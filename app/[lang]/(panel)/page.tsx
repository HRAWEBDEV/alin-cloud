import { InputGroupInput, InputGroup } from "@/components/ui/input-group";
import { Field, FieldLabel } from "@/components/ui/field";
export default function Home() {
  return (
    <div>
      <Field>
        <FieldLabel>نام کاربری</FieldLabel>
        <InputGroup>
          <InputGroupInput />
        </InputGroup>
      </Field>
    </div>
  );
}
