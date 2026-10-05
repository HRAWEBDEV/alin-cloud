import RackSidebar from "./RackSidebar";
import RackActions from "./RackActions";

export default function RackWrapper() {
  return (
    <div className="grow overflow-hidden grid grid-cols-[14rem_1fr]">
      <RackSidebar />
      <div className="px-2 w-[min(100%,50rem)]">
        <RackActions />
      </div>
    </div>
  );
}
