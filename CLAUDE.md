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
- `(panel)/` — the authenticated app shell. Its `layout.tsx` composes, from outside in: `ShortcutsProvider` → `SidebarProvider` → `ProfileProvider` → `SettingsProvider` → sidebar + header + main content + tabs nav + settings modal.

**"services" = colocated feature modules.** Both `app/[lang]/(panel)/services/*` and top-level `services/*` follow the same three-file pattern per concern: `xContext.ts` (context object + `useX` hook that throws `OutOfContext` — see `utils/OutOfContext.ts` — if used outside its provider), `XProvider.tsx` (`"use client"`, holds the state), and `components/` for the feature's UI. Existing services: `side-bar`, `settings`, `shortcuts`, `profile` (panel-scoped), plus `base-config`, `react-query`, `share-dictionary` (app-wide, under top-level `services/`).

**Global config surfaces:**
- `services/base-config/` — active locale, theme (via `next-themes`), and the color-palette CSS class (`utils/colorPalletes.ts` / `colorPalletesManager.ts`), persisted client-side.
- `app/[lang]/(panel)/services/shortcuts/` — keyboard shortcuts registry built on `@tanstack/react-hotkeys`; add new shortcuts to the `defaultShortcuts` map in `shortcutsManager.ts` (grouped by category, e.g. `general`).
- `app/[lang]/services/axios-interceptors/` — client components with no UI that register/eject axios interceptors on the shared instance from `app/utils/defaultAxios.ts` (sets `languageID` and `apptype` headers per request).

**i18n dictionaries.** Translation namespaces live in `internalization/app/dictionaries/<namespace>/` as `{en,fa}.json` plus a `"server-only"` `dictionary.ts` that exports a `get<Namespace>Dictionary({ locale })` loader. Current namespaces: `auth`, `meta`, `share`. Dictionaries are loaded in `app/[lang]/layout.tsx` and exposed to client components via `services/share-dictionary/ShareDictionaryProvider`. `en.json` for `auth` currently just re-imports `fa.json` — not yet translated.

**UI components.** `components/ui/` is shadcn-generated (`components.json`: style `base-vega`, neutral base, no Tailwind prefix, RSC on). Prefer extending/composing these over adding new UI primitives from scratch; regenerate/add via the `shadcn` CLI rather than hand-rolling equivalents.

**Path alias:** `@/*` → repo root (see `tsconfig.json`).

**Env vars:** `NEXT_PUBLIC_MODE` (`DEVELOPMENT`/`PRODUCTION`, see `utils/env.ts`) and `NEXT_PUBLIC_API_URI` are set per-environment in `.env.development` / `.env.production`.
