import LinearLoading from "@/app/[lang]/(panel)/components/LinearLoading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa";
import { IoReload } from "react-icons/io5";
import { TbFilterSearch } from "react-icons/tb";

export default function BoardFilters() {
  return (
    <div className="sticky top-0 bg-background z-2 p-2">
      {false && (
        <div className="absolute inset-x-0 top-0">
          <LinearLoading />
        </div>
      )}
      <div className="flex gap-2 flex-wrap items-center justify-between">
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="text-primary bg-primary/5 relative"
          >
            <TbFilterSearch className="size-5" />
            <div className="absolute -top-1.5 -inset-e-1.5">
              <Badge
                style={{
                  direction: "ltr",
                }}
                variant="default"

                className="p-1 rounded-full size-5 font-en-roboto"
              >
                1
              </Badge>
            </div>
          </Button>
        </div>
        <div className="flex gap-2">
          <Button>
            <FaPlus />
          </Button>
          <Button variant="outline" size="icon">
            <IoReload className="size-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
