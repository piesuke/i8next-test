"use client";

import Link from "next/link";

export const ChangeLocale = async () => {
  return (
    <>
      <Link href="/ja">ja</Link>
      <Link href="/en">en</Link>
    </>
  );
};
