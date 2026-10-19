import DinningGrid from "./DinningGrid";
import DinningTools from "./DinningTools";

export default function DinnigWrapper() {
  return (
    <div className="flex flex-col grow overflow-hidden relative">
      <DinningGrid />
      <DinningTools />
    </div>
  );
}
