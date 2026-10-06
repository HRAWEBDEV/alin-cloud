import NewOrderItem from "./NewOrderItem";

export default function NewOrderItems() {
  return (
    <div className="grid justify-center gap-2 grid-cols-[repeat(auto-fill,minmax(8.5rem,9rem))] items-start">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((item) => {
        return <NewOrderItem key={item} />;
      })}
    </div>
  );
}
