import { Button } from "@/components/ui/button";
import { FaArrowLeft } from "react-icons/fa6";
import { useNewOrderControlContext } from "../services/control/newOrderControlContext";
import NoItemFound from "@/app/[lang]/(panel)/components/NoItemFound";

export default function NewOrderShop() {
  const { setActiveEndPanelTab } = useNewOrderControlContext();
  return (
    <div className="grow flex flex-col">
      <div className="grow">
        <NoItemFound />
      </div>
      <div className="sticky bottom-0 grid gap-2 grid-cols-2 pt-2">
        <Button>ثبت سفارش</Button>
        <Button
          variant="outline"

          onClick={() => setActiveEndPanelTab("invoice")}
        >
          <span>صورتحساب</span>
          <FaArrowLeft className="size-3 ltr:rotate-180" />
        </Button>
      </div>
    </div>
  );
}
