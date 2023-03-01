import React, { ReactElement } from "react";
import { Navbar, Footer } from "@/components";
import styles from "@/styles/layouts/MainLayout.module.scss";

interface MainLayout {
  children: ReactElement[];
}

export default function MainLayout({ children }: MainLayout) {
  return (
    <>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
