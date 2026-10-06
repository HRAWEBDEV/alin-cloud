import NewOrderItem from "./NewOrderItem";

export default function NewOrderItems() {
  return (
    <div className="grid justify-center gap-2 grid-cols-[repeat(auto-fill,minmax(8.5rem,9rem))]">
      {[1, 2, 3].map((item) => {
        return <NewOrderItem key={item} />;
      })}
    </div>
  );
}
