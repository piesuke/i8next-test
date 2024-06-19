import Image from "next/image";
import { ClientComponent } from "../_components/Client";
import Link from "next/link";
import { ChangeLocale } from "../_components/ChangeLocale";
import { ChangeLocaleButton } from "../_components/ChangeLocaleIButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24 gap-4">
      <ClientComponent />
      <div className="flex flex-col items-start gap-1">
        <p className="font-xl font-bold">link Type</p>
        <ChangeLocale />
      </div>
      <div className="flex flex-col items-start gap-1">
        <p className="font-xl font-bold">button Type</p>
        <ChangeLocaleButton />
      </div>
    </main>
  );
}
