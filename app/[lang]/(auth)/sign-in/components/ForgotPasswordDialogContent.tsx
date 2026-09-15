import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useShareDictionary } from "@/services/share-dictionary/shareDictionaryContext";
import { FieldGroup, Field, FieldLabel } from "@/components/ui/field";
import { InputGroup, InputGroupInput } from "@/components/ui/input-group";
import { NumericFormat } from "react-number-format";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

export default function ForgotPasswordDialogContent() {
  const {
    authDictionary: {
      signIn: { withPassword: dic },
    },
  } = useShareDictionary();
  return (
    <DialogContent className="gap-0 p-0 flex flex-col max-h-[80svh] overflow-hidden">
      <DialogHeader className="p-4 border-b border-border">
        <DialogTitle>{dic.forgotPassword}</DialogTitle>
      </DialogHeader>
      <div className="p-4 overflow-auto">
        <form>
          <FieldGroup className="gap-4">
            <Field>
              <FieldLabel htmlFor="mobileNo">{dic.mobileNo} *</FieldLabel>
              <InputGroup>
                <NumericFormat
                  id="mobileNo"
                  allowLeadingZeros
                  decimalScale={0}
                  customInput={InputGroupInput}
                />
              </InputGroup>
            </Field>
            {/* <div className="flex justify-end gap-4"> */}
            {/*   <Button>{dic.sendCode}</Button> */}
            {/* </div> */}
            <Field>
              <FieldLabel htmlFor="confirmCode">{dic.confirmCode} *</FieldLabel>
              <InputGroup>
                <NumericFormat
                  id="confirmCode"
                  allowLeadingZeros
                  decimalScale={0}
                  customInput={InputGroupInput}
                />
              </InputGroup>
            </Field>
            <div className="flex justify-between gap-4 flex-wrap">
              <Button variant="outline">{dic.editMobileNo}</Button>
              <Button className="w-28">{dic.confirm}</Button>
            </div>
          </FieldGroup>
        </form>
      </div>
    </DialogContent>
  );
}
