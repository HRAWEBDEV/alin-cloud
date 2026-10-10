import { useCallback } from "react";
import { type NavigationItem, navigationItems } from "../utils/navigationItems";
import { useBasePath } from "./useBasePath";

function useFindNavigationItemByPathname() {
  const basePath = useBasePath();
  const findItem = useCallback(
    (pathname: string) => {
      const navItemPath = pathname.replace(basePath, "");
      function searchItem(navItems: NavigationItem[], navItemPath: string) {
        for (const item of navItems) {
          if ("items" in item) {
            return searchItem(item.items!, navItemPath);
          } else if (item.path === navItemPath) {
            return item;
          }
        }
        return null;
      }
      return searchItem(navigationItems, navItemPath);
    },
    [basePath],
  );

  const check = useCallback(
    (pathname: string) => {
      return findItem(pathname);
    },
    [findItem],
  );

  return check;
}

export { useFindNavigationItemByPathname };
