import { type AuthDictionary } from "@/internalization/app/dictionaries/auth/dictionary";
import SignInWithPassword from "./SignInWithPassword";

export default function SignInWrapper({ dic }: { dic: AuthDictionary }) {
  return <SignInWithPassword dic={dic} />;
}
