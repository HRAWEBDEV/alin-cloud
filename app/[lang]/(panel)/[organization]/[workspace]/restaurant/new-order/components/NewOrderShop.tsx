import { Button } from "@/components/ui/button";
import { FaArrowLeft } from "react-icons/fa6";
import { useNewOrderControlContext } from "../services/control/newOrderControlContext";
import NoItemFound from "@/app/[lang]/(panel)/components/NoItemFound";
import { Field } from "@/components/ui/field";
import {
  InputGroupInput,
  InputGroup,
  InputGroupAddon,
} from "@/components/ui/input-group";
import { IoIosSearch } from "react-icons/io";

export default function NewOrderShop() {
  const { setActiveEndPanelTab } = useNewOrderControlContext();
  return (
    <div className="grow flex flex-col">
      <div className="sticky top-10">
        <Field>
          <InputGroup className="bg-background">
            <InputGroupInput type="search" placeholder={"جستجو" + " ..."} />
            <InputGroupAddon align="inline-start">
              <IoIosSearch className="size-5" />
            </InputGroupAddon>
          </InputGroup>
        </Field>
      </div>
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
