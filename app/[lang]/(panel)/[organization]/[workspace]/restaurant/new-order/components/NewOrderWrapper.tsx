import NewOrderStartPanel from "./NewOrderStartPanel";
import NewOrderEndPanel from "./NewOrderEndPanel";
import NewOrderActions from "./NewOrderActions";
import NewOrderItems from "./NewOrderItems";

export default function NewOrderWrapper() {
  return (
    <div className="grid grid-cols-[14rem_1fr_14rem] grow overflow-hidden">
      <NewOrderStartPanel />
      <div className="px-2 overflow-hidden">
        <NewOrderActions />
        <NewOrderItems />
      </div>
      <NewOrderEndPanel />
    </div>
  );
}
