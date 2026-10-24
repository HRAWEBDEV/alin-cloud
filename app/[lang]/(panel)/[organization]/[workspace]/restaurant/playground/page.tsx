"use client";
import { useRef, useState } from "react";
import { DragDropProvider } from "@dnd-kit/react";
import { useSortable } from "@dnd-kit/react/sortable";
import { useDroppable } from "@dnd-kit/react";

type ColumnId = "todo" | "progress" | "done";

type Items = Record<ColumnId, string[]>;

const initialItems: Items = {
  todo: ["Task 1", "Task 2", "Task 3"],
  progress: ["Task 4", "Task 5"],
  done: ["Task 6"],
};

function SortableItem({
  id,
  index,
  column,
}: {
  id: string;
  index: number;
  column: ColumnId;
}) {
  const { ref, isDragging } = useSortable({
    id,
    index,

    // All items with the same type can interact.
    type: "item",
    accept: "item",

    // This identifies which list the item belongs to.
    group: column,
  });

  return (
    <div
      ref={ref}
      style={{
        padding: "12px",
        marginBottom: "8px",
        background: "white",
        border: "1px solid #ddd",
        borderRadius: "8px",
        cursor: "grab",
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      {id}
    </div>
  );
}

function Column({ id, children }: { id: ColumnId; children: React.ReactNode }) {
  const { ref, isDropTarget } = useDroppable({
    id,
    type: "column",
    accept: "item",
  });

  return (
    <div
      ref={ref}
      style={{
        width: 280,
        minHeight: 300,
        padding: 16,
        background: isDropTarget ? "#e5e7eb" : "#f3f4f6",
        borderRadius: 12,
        transition: "background 150ms",
      }}
    >
      <h3
        style={{
          marginTop: 0,
          marginBottom: 16,
          textTransform: "capitalize",
        }}
      >
        {id}
      </h3>

      {children}
    </div>
  );
}

export default function App() {
  const [items, setItems] = useState<Items>(initialItems);

  // Needed so we can restore the state if the drag is cancelled.
  const previousItems = useRef<Items>(initialItems);

  return (
    <DragDropProvider
      onDragStart={() => {
        previousItems.current = structuredClone(items);
      }}

      onDragOver={(event) => {
        const { source, target } = event.operation;
        console.log(target?.id);

        // We only want to move cards.
        if (source?.type !== "item") {
          return;
        }
      }}

      onDragEnd={(event) => {
        if (event.canceled) {
          setItems(previousItems.current);
        }
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 20,
          alignItems: "flex-start",
          padding: 30,
        }}
      >
        <Column id="todo">
          {items.todo.map((id, index) => (
            <SortableItem key={id} id={id} index={index} column="todo" />
          ))}
        </Column>

        <Column id="progress">
          {items.progress.map((id, index) => (
            <SortableItem key={id} id={id} index={index} column="progress" />
          ))}
        </Column>

        <Column id="done">
          {items.done.map((id, index) => (
            <SortableItem key={id} id={id} index={index} column="done" />
          ))}
        </Column>
      </div>
    </DragDropProvider>
  );
}
