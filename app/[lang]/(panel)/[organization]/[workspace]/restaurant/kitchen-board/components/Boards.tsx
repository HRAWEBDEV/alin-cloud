import BoardItem from "./BoardItem";

export default function Boards() {
  return (
    <div className="grow overflow-auto p-2 pt-0">
      <div className="flex gap-2">
        <div className="flex flex-col gap-2">
          <BoardItem />
          <BoardItem />
          <BoardItem />
        </div>
        <div className="flex flex-col gap-2">
          <BoardItem />
          <BoardItem />
        </div>
        <div className="flex flex-col gap-2">
          <BoardItem success />
          <BoardItem success />
          <BoardItem success />
        </div>
        <div className="flex flex-col gap-2">
          <BoardItem success />
          <BoardItem success />
          <BoardItem success />
        </div>
        <div className="flex flex-col gap-2">
          <BoardItem success />
          <BoardItem success />
          <BoardItem success />
        </div>
        <div className="flex flex-col gap-2">
          <BoardItem success />
          <BoardItem success />
          <BoardItem success />
        </div>
        <div className="flex flex-col gap-2">
          <BoardItem success />
          <BoardItem success />
          <BoardItem success />
        </div>
      </div>
    </div>
  );
}
