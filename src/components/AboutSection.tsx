import React from "react";
import styles from "@/styles/components/AboutSection.module.scss";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className={styles.about} id="about">
      <div className={styles.about__dark}>
        <Image src="/assets/images/image-about-dark.jpg" alt="About" fill={true} quality={100} />
      </div>
      <div className={styles.about__information}>
        <h2 className={styles.about__header}>ABOUT OUR FURNITURE</h2>
        <p className={styles.about__paragraph}>
          Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires
          you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.
        </p>
      </div>
      <div className={styles.about__light}>
        <Image src="/assets/images/image-about-light.jpg" alt="About" fill={true} quality={100} />
      </div>
    </div>
  );
};

export default AboutSection;
