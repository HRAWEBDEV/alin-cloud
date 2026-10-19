interface GridBox {
  id: number;
  width: number;
  height: number;
  x: number;
  y: number;
}

const defaultGridBoxProperties: Omit<GridBox, "id"> = {
  width: 60,
  height: 60,
  x: 0,
  y: 0,
};

function getDefaultGridBoxProperties() {
  return { ...defaultGridBoxProperties };
}

export type { GridBox };
export { defaultGridBoxProperties, getDefaultGridBoxProperties };
