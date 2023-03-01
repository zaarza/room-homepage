import React from "react";
import styles from "@/styles/components/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Challenge by{" "}
      <a className={styles.footer__link} href="https://www.frontendmentor.io/challenges" target="_blank">
        Frontend Mentor
      </a>
      . Coded by{" "}
      <a className={styles.footer__link} href="https://zaarza.github.io/" target="_blank">
        Arzaqul Mughny
      </a>
    </footer>
  );
};

export default Footer;
