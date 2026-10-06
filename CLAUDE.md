# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server (also regenerates the AGENTS.md block above)
npm run build    # production build
npm run start    # serve production build
npm run lint     # eslint (flat config: eslint-config-next core-web-vitals + typescript)
```

There is no test suite/framework configured in this repo — do not assume Jest/Vitest are available.

## This is a pre-release Next.js version

`next` is `16.3.4` with breaking changes vs. the Next.js you were trained on. Before touching routing, layouts, page/layout props, or request interception, read the matching page under `node_modules/next/dist/docs/` — do not rely on training-data knowledge of these APIs. Two differences already visible in this codebase:

- **`proxy.ts` replaces `middleware.ts`.** The root `proxy.ts` exports a `proxy` function (not `middleware`) and is the equivalent of old Next.js Middleware — same `NextRequest`/`NextResponse`/`matcher` API, new name/file. See `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/proxy.md`.
- **Typed route props.** Layouts/pages use generated types like `LayoutProps<"/[lang]">` instead of hand-written `{ children, params }: { params: Promise<{ lang: string }> }`. `params` is still a `Promise` that must be `await`ed.

## Architecture

**Locale-first routing.** Every route lives under `app/[lang]/`. `proxy.ts` redirects any request whose first path segment isn't a valid locale (`fa` | `en`, defined in `internalization/app/localization.ts`) to a locale-prefixed URL, reading the preferred locale from a cookie (`utils/userLocaleManager.ts`) and defaulting to `fa`. `fa` (Jalali calendar, RTL) is the primary/active locale; `en` exists in the locale table but is marked inactive.

**Route groups under `app/[lang]/`:**

- `(auth)/` — sign-in flow, no panel chrome.
- `(panel)/` — the authenticated app shell. Its `layout.tsx` composes, from outside in: `ShortcutsProvider` → `SidebarProvider` → `ProfileProvider` → `HelpProvider` → `SettingsProvider` → `HistoryProvider` → sidebar + header + history tabs + main content + tabs nav + settings modal.
- Inside `(panel)/`, tenant-scoped pages nest under `[organization]/[workspace]/` (e.g. `restaurant/tables`, `restaurant/salons`, `restaurant/tables-rack`, `restaurant/new-order`); each level has its own pass-through `layout.tsx`. `(panel)/users/`, `(panel)/organization/`, and `(panel)/help/` are non-tenant-scoped panel pages (account/org settings and an in-app help list, respectively).

**"services" = colocated feature modules.** Both `app/[lang]/(panel)/services/*` and top-level `services/*` follow the same three-file pattern per concern: `xContext.ts` (context object + `useX` hook that throws `OutOfContext` — see `utils/OutOfContext.ts` — if used outside its provider), `XProvider.tsx` (`"use client"`, holds the state), and `components/` for the feature's UI. Existing services: `side-bar`, `settings`, `shortcuts`, `profile`, `history` (panel-scoped), plus `base-config`, `react-query`, `share-dictionary` (app-wide, under top-level `services/`). `services/userInterface` is the one exception — it's just a `components/` dir (`UserInterfaceSettings.tsx`) with no context/provider, rendered as a tab inside `SettingsProvider`'s own state. The same colocated pattern also shows up inside feature routes, not just under `services/*`, always under a `services/control/` subpath named `<x>ControlContext.ts` + `<X>ControlProvider.tsx`: `restaurant/tables/services/control/`, `restaurant/salons/services/control/`, `restaurant/tables-rack/services/control/`, and `restaurant/new-order/services/control/` each scope filter/control state to their own page, and `(panel)/help/services/` (`HelpContext.ts` + `HelpProvider.tsx`) scopes state to the help page.

**Grid pages (`tables`, `salons`).** Each has a `*Wrapper.tsx` (page entry), a `*Filters.tsx`, and dual List/Grid views (`*List.tsx` / `*GridView.tsx` + `*Grid.tsx`) switched via `utils/contentViewOptions.ts` + `utils/getViewOptionIcon.tsx`. Table-backed grids (e.g. `tables/components/TablesGrid.tsx`) build their column defs in a colocated `hooks/use<X>Grid.tsx` hook using `@tanstack/react-table`'s `createColumnHelper`/`tableFeatures`/`useTable` (see `tables/hooks/useTablesGrid.tsx`) rather than inlining columns in the component.

**Sidebar/panel pages (`tables-rack`, `new-order`).** A newer, simpler shape than the grid pages above: a `*Wrapper.tsx` lays out a fixed-width side panel (or panels) next to a scrollable main area — `tables-rack` has `RackSidebar(Wrapper)` + `RackActions` + a card grid of `RackTable`; `new-order` has `NewOrderStartPanel`/`NewOrderEndPanel` flanking `NewOrderActions` + `NewOrderItems`. No List/Grid view toggle and (so far) no `@tanstack/react-table` grid — just the route's own `services/control/` provider plus `utils/` helpers (e.g. `tables-rack/utils/tableStates.ts`, `getTableRows.ts`). Both are registered as top-level entries (not nested under `capacityAndPricing`) in `app/[lang]/(panel)/utils/navigationItems.ts`.

**Global config surfaces:**

- `services/base-config/` — active locale, theme (via `next-themes`), and the color-palette CSS class (`utils/colorPalletes.ts` / `colorPalletesManager.ts`), persisted client-side.
- `app/[lang]/(panel)/services/shortcuts/` — keyboard shortcuts registry built on `@tanstack/react-hotkeys`; add new shortcuts to the `defaultShortcuts` map in `shortcutsManager.ts` (grouped by category, e.g. `general`).
- `app/[lang]/(panel)/services/settings/` — panel-wide user settings (active tab via `settingItems.ts`, options like grid row count via `utils/gridRowsCountOptions.ts`), persisted client-side through `utils/panelSettingsManager.ts`.
- `app/[lang]/services/axios-interceptors/` — client components with no UI that register/eject axios interceptors on the shared instance from `app/utils/defaultAxios.ts`. `AxiosBaseConfig` (sets `languageID` and `apptype` headers per request) is mounted in `app/[lang]/layout.tsx`; `AxiosCredentials` exists alongside it but isn't mounted anywhere yet.

**i18n dictionaries.** Translation namespaces live in `internalization/app/dictionaries/<namespace>/` as `{en,fa}.json` plus a `"server-only"` `dictionary.ts` that exports a `get<Namespace>Dictionary({ locale })` loader. Top-level namespaces: `auth`, `meta`, `share`, loaded in `app/[lang]/layout.tsx` and exposed to client components via `services/share-dictionary/ShareDictionaryProvider`. `en.json` for `auth` currently just re-imports `fa.json` — not yet translated. Feature-scoped namespaces nest by route instead, e.g. `panel/restaurant/tables/`, `panel/restaurant/salons/`, `panel/restaurant/tables-rack/`, and `panel/restaurant/new-order/`, each loaded directly by its page rather than through `ShareDictionaryProvider`.

**UI components.** `components/ui/` is shadcn-generated (`components.json`: style `base-vega`, neutral base, no Tailwind prefix, RSC on, `rtl: true`). Prefer extending/composing these over adding new UI primitives from scratch; regenerate/add via the `shadcn` CLI rather than hand-rolling equivalents.

**Path alias:** `@/*` → repo root (see `tsconfig.json`).

**Env vars:** `NEXT_PUBLIC_MODE` (`DEVELOPMENT`/`PRODUCTION`, see `utils/env.ts`) and `NEXT_PUBLIC_API_URI` are set per-environment in `.env.development` / `.env.production`.
