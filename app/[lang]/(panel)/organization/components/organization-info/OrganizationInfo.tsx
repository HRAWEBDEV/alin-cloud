"use client";
import { useRef, useState } from "react";
import { useShareDictionary } from "@/services/share-dictionary/shareDictionaryContext";
import { FieldGroup, FieldLabel, Field } from "@/components/ui/field";
import {
  InputGroupInput,
  InputGroup,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
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

export default function OrganizationInfo() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isRemoveLogoDialogOpen, setIsRemoveLogoDialogOpen] = useState(false);
  const {
    shareDictionary: {
      components: { organizationInfo: dic },
    },
  } = useShareDictionary();

  return (
    <form className="p-4">
      <div className="flex flex-col items-center mb-6">
        <Avatar className="size-36">
          {/* <AvatarImage */}
          {/*   src={`${process.env.NEXT_PUBLIC_SERVER_URI}${usersInfoQuery.data?.organization.logo}`} */}
          {/*   alt="organization image" */}
          {/* /> */}
          <AvatarFallback>H</AvatarFallback>
        </Avatar>
        <div className="flex gap-2 items-center flex-wrap mt-4">
          <AlertDialog
            open={isRemoveLogoDialogOpen}
            onOpenChange={setIsRemoveLogoDialogOpen}
          >
            <AlertDialogTrigger
              render={
                <Button
                  disabled={false}
                  variant="destructive"
                  className="min-w-28"
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
                <AlertDialogAction
                  disabled={false}
                  variant="destructive"
                  onClick={() => {}}
                >
                  {dic.confirm}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Button
            className="min-w-28"
            onClick={() => {
              fileInputRef.current?.click();
            }}
            disabled={false}
          >
            <input
              ref={fileInputRef}
              disabled={false}
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
      <FieldGroup className="gap-4">
        <Field data-invalid={false}>
          <FieldLabel htmlFor="name">{dic.name} *</FieldLabel>
          <InputGroup data-invalid={false}>
            <InputGroupInput id="name" />
          </InputGroup>
        </Field>
        <Field data-invalid={false}>
          <FieldLabel htmlFor="description">{dic.description}</FieldLabel>
          <InputGroup data-invalid={false}>
            <InputGroupTextarea
              id="description"
              className="field-sizing-fixed"
              rows={3}
            />
          </InputGroup>
        </Field>
        <div className="flex justify-end gap-2">
          <Button type="submit" disabled={false}>
            {false && <Spinner />}
            {dic.saveChanges}
          </Button>
        </div>
      </FieldGroup>
    </form>
  );
}
