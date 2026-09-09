import ModeControllerButton from "./ModeControllerButton";
import LocaleControllerButton from "./LocaleControllerButton";
import NotificationControllerButton from "./NotificationControllerButton";

export default function HeaderTools() {
  return (
    <div className="flex items-center flex-row-reverse">
      <ModeControllerButton />
      <LocaleControllerButton />
      <NotificationControllerButton />
    </div>
  );
}
