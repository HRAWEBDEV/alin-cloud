import { useBaseConfig } from "@/services/base-config/baseConfigContext";

export function useBasePath() {
  const { locale } = useBaseConfig();
  return `/${locale}/main/main`;
}
