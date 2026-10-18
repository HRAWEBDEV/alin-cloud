"use client";
import { useRef } from "react";
import { Stage, Layer, Circle, Transformer } from "react-konva";

export default function PanelPage() {
  const shapeRef = useRef(null);
  const transformerRef = useRef(null);

  return (
    <div>
      <Stage width={600} height={600}>
        <Layer>
          <Circle
            ref={shapeRef}
            radius={50}
            x={100}
            y={100}
            draggable
            fill={"red"}
            onClick={(e) => {
              transformerRef.current?.nodes([shapeRef.current]);
            }}
            onDragMove={(e) => {
              console.log(e.target.x());
            }}
          />
          <Transformer ref={transformerRef} />
        </Layer>
      </Stage>
    </div>
  );
}
