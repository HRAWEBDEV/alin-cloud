// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { IoMdArrowDropup } from "react-icons/io";
import { LiaHotelSolid } from "react-icons/lia";
import ConnectivityInfo from "@/app/[lang]/(panel)/components/ConnectivityInfo";

export default function SidebarHotelInfo() {
  return (
    <div>
      <div className="mb-1">
        <ConnectivityInfo />
      </div>
      <Button
        variant="outline"
        className="w-full justify-stretch text-start p-2 h-auto bg-transparent rounded-none border-0 border-t"
      >
        <div className="flex gap-2 items-center grow text-neutral-700 dark:text-neutral-400">
          <LiaHotelSolid className="size-12" />
          {/* <Avatar className="size-12"> */}
          {/*   <AvatarImage */}
          {/*     src="https://github.com/shadcn.png" */}
          {/*     alt="profile image" */}
          {/*   /> */}
          {/*   <AvatarFallback>CN</AvatarFallback> */}
          {/* </Avatar> */}
          <div className="grow grid">
            <h3 className="mb-0.5 truncate">مدیر سیستم</h3>
            <p className="text-xs text-primary truncate">هتل عباسی</p>
          </div>
          <IoMdArrowDropup />
        </div>
      </Button>
    </div>
  );
}
