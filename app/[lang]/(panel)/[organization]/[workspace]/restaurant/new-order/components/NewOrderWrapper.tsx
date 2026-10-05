import NewOrderStartPanel from "./NewOrderStartPanel";
import NewOrderEndPanel from "./NewOrderEndPanel";

export default function NewOrderWrapper() {
  return (
    <div className="grid grid-cols-[14rem_1fr_14rem] grow overflow-hidden">
      <NewOrderStartPanel />
      <div></div>
      <NewOrderEndPanel />
    </div>
  );
}
