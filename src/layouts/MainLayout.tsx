import React, { ReactElement } from "react";
import { Navbar } from "@/components";

interface MainLayout {
  children: ReactElement;
}

export default function MainLayout({ children }: MainLayout) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
