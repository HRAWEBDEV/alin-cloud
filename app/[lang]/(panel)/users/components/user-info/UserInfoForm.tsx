"use client";
import { useShareDictionary } from "@/services/share-dictionary/shareDictionaryContext";
import { NumericFormat } from "react-number-format";
import { Button } from "@/components/ui/button";
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import { Spinner } from "@/components/ui/spinner";

export default function UserInfoForm() {
  const {
    shareDictionary: {
      components: { userInfo: dic },
    },
  } = useShareDictionary();

  return (
    <form className="pb-2 mb-2">
      <FieldGroup className="gap-4">
        <div className="grid gap-4 grid-cols-2">
          <Field className="gap-2" data-invalid={false}>
            <FieldLabel htmlFor="firstName">{dic.firstName} *</FieldLabel>
            <InputGroup data-invalid={false}>
              <InputGroupInput id="firstName" />
            </InputGroup>
          </Field>
          <Field className="gap-2" data-invalid={false}>
            <FieldLabel htmlFor="lastName">{dic.lastName} *</FieldLabel>
            <InputGroup data-invalid={false}>
              <InputGroupInput id="lastName" />
            </InputGroup>
          </Field>
          <Field className="gap-2 col-span-full" data-invalid={false}>
            <FieldLabel htmlFor="username">{dic.username} *</FieldLabel>
            <InputGroup data-invalid={false}>
              <InputGroupInput id="username" />
            </InputGroup>
          </Field>
          <Field className="gap-2" data-invalid={false}>
            <FieldLabel htmlFor="email">{dic.email} * </FieldLabel>
            <InputGroup data-invalid={false}>
              <InputGroupInput id="email" />
            </InputGroup>
          </Field>
          <Field className="gap-2" data-invalid={false}>
            <FieldLabel htmlFor="phoneNumber">{dic.phoneNumber} </FieldLabel>
            <InputGroup data-invalid={false}>
              <NumericFormat
                id="phoneNumber"
                allowLeadingZeros
                decimalScale={0}
                customInput={InputGroupInput}
                onValueChange={({ value }) => {}}
              />
            </InputGroup>
          </Field>
        </div>
        <div className="flex justify-end gap-2">
          <Button
            disabled={false}
            type="submit"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            {false && <Spinner />}
            {dic.saveChanges}
          </Button>
        </div>
      </FieldGroup>
    </form>
  );
}
