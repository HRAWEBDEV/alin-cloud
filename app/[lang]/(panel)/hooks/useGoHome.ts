import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useBaseConfig } from "@/services/base-config/baseConfigContext";

export function useGoHome() {
  const router = useRouter();
  const { locale } = useBaseConfig();
  const homePath = useMemo(() => `/${locale}`, [locale]);
  const goHome = useCallback(() => {
    router.push(homePath);
  }, [homePath, router]);
  return {
    goHome,
    homePath,
  };
}
