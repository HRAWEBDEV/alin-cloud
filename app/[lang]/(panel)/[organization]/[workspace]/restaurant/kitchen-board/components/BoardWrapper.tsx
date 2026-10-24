import BoardFilters from "./BoardFilters";
import Boards from "./Boards";

export default function BoardWrapper() {
  return (
    <div className="flex flex-col grow overflow-hidden">
      <BoardFilters />
      <Boards />
    </div>
  );
}
