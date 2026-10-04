interface TData {
  id: number;
  tableNo: number;
  salonName: string;
  tableType: string;
  maxCapacity: number;
  isVip: boolean;
}

const data = [
  {
    id: 1,
    tableNo: 1,
    salonName: "سالن اصلی",
    tableType: "میز",
    maxCapacity: 10,
    isVip: true,
  },
  {
    id: 2,
    tableNo: 2,
    salonName: "سالن اصلی",
    tableType: "میز",
    maxCapacity: 10,
    isVip: true,
  },
];

export type { TData };
export { data };
