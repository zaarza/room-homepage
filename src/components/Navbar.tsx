/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from "react";
import styles from "@/styles/components/Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isNavbarLinksActive, setIsNavbarLinksActive] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__inner}>
        <button className={styles.navbar__open} type="button" onClick={() => setIsNavbarLinksActive(!isNavbarLinksActive)}>
          <Image src="/assets/images/icons/icon-open.svg" alt="Open menu" width={22} height={22} />
        </button>

        <div className={styles.navbar__logo}>
          <Link href="/">
            <Image src="/assets/images/logo.svg" alt="Open menu" fill={true} />
          </Link>
        </div>

        <div className={`${styles.navbar__responsiveLinks} ${isNavbarLinksActive && styles["navbar__responsiveLinks--active"]}`}>
          <button className={styles.navbar__close} type="button" onClick={() => setIsNavbarLinksActive(!isNavbarLinksActive)}>
            <Image src="/assets/images/icons/icon-close.svg" alt="Close menu" width={12} height={12} />
          </button>

          <ul className={styles.navbar__links}>
            <li className={styles.navbar__link}>
              <a className={styles.navbar__A} href="#">
                home
              </a>
            </li>
            <li className={styles.navbar__link}>
              <a className={styles.navbar__A} href="#">
                shop
              </a>
            </li>
            <li className={styles.navbar__link}>
              <a className={styles.navbar__A} href="#about">
                about
              </a>
            </li>
            <li className={styles.navbar__link}>
              <a className={styles.navbar__A} href="#">
                contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
