import ModeControllerButton from "./ModeControllerButton";
import LocaleControllerButton from "./LocaleControllerButton";

export default function HeaderTools() {
  return (
    <div className="flex gap-1 items-center flex-row-reverse">
      <ModeControllerButton />
      <LocaleControllerButton />
    </div>
  );
}
