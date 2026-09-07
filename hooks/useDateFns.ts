import { supportedDateFns } from "@/internalization/app/localization";
import { useBaseConfig } from "@/services/base-config/baseConfigContext";

export function useDateFns() {
  const { locale } = useBaseConfig();
  return supportedDateFns[locale];
}
