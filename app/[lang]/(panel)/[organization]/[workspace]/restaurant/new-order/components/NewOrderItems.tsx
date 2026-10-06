import NewOrderItem from "./NewOrderItem";

export default function NewOrderItems() {
  return (
    <div className="grid justify-center gap-2 grid-cols-[repeat(auto-fill,minmax(10rem,10.5rem))]">
      {[1, 2, 3].map((item) => {
        return <NewOrderItem key={item} />;
      })}
    </div>
  );
}
