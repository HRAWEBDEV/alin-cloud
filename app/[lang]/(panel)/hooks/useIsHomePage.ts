import { usePathname } from "next/navigation";
import { useGoHome } from "./useGoHome";

export function useIsHomePage() {
  const { homePath } = useGoHome();
  const pathname = usePathname();
  return pathname === homePath;
}
