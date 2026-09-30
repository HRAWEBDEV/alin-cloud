"use client";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useShareDictionary } from "@/services/share-dictionary/shareDictionaryContext";
import { Spinner } from "@/components/ui/spinner";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogMedia,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { IoIosWarning } from "react-icons/io";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { useSettingsContext } from "../../../services/settings/settingsContext";

export default function UserInfoAvatar() {
  const { setShowConfirmlogout } = useSettingsContext();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isRemoveAvatarDialogOpen, setIsRemoveAvatarDialogOpen] =
    useState(false);
  const {
    shareDictionary: {
      components: { userInfo: dic },
    },
  } = useShareDictionary();
  return (
    <div className="flex flex-col items-center mb-6 relative">
      <div className="absolute top-0 inset-e-0">
        <Button
          variant="destructive"

          onClick={() => setShowConfirmlogout(true)}
        >
          <RiLogoutBoxRFill className="size-5" />
          {dic.exit}
        </Button>
      </div>
      <Avatar className="size-36">
        {/* {usersInfoQuery.data?.user.avatar && ( */}
        {/*   <AvatarImage */}
        {/*     src={`${process.env.NEXT_PUBLIC_SERVER_URI}${usersInfoQuery.data?.user.avatar}`} */}
        {/*     alt="user profile image" */}
        {/*   /> */}
        {/* )} */}
        <AvatarFallback>H</AvatarFallback>
      </Avatar>
      <div className="flex gap-2 items-center flex-wrap mt-4">
        <AlertDialog
          open={isRemoveAvatarDialogOpen}
          onOpenChange={setIsRemoveAvatarDialogOpen}
        >
          <AlertDialogTrigger
            render={
              <Button
                variant="destructive"
                className="min-w-28"
                disabled={false}
              >
                {false && <Spinner />}
                {dic.removeAvatar}
              </Button>
            }
          />
          <AlertDialogContent size="sm">
            <AlertDialogHeader>
              <AlertDialogMedia className="bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive">
                <IoIosWarning />
              </AlertDialogMedia>
              <AlertDialogTitle>
                {dic.removeAvatarConfirmMessage}
              </AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel disabled={false} variant="outline">
                {dic.cancel}
              </AlertDialogCancel>
              <AlertDialogAction disabled={false} variant="destructive">
                {dic.confirm}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        <Button
          className="min-w-28"
          disabled={false}
          onClick={() => {
            fileInputRef.current?.click();
          }}
        >
          <input
            disabled={false}
            ref={fileInputRef}
            type="file"
            onChange={(e) => {
              const formData = new FormData();
              if (!e.target.files) return;
              formData.append("image", e.target.files[0]);
            }}
            accept="image/*"
            hidden
          />
          {false && <Spinner />}
          {dic.changeAvatar}
        </Button>
      </div>
    </div>
  );
}
