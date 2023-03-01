import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "./Slider";
import styles from "@/styles/components/HeroSection.module.scss";
import heroData from "@/data/hero.json";

interface ImageState {
  currentIndex: number;
  maxLength: number;
}

const HeroSection = () => {
  const [imageState, setImageState] = useState<ImageState>({
    currentIndex: 0,
    maxLength: heroData.length,
  });

  const adjustImageState = (action: string): void => {
    const { currentIndex, maxLength } = imageState;

    if (action === "decrease") {
      currentIndex === 0 ? setImageState((currentState) => ({ ...currentState, currentIndex: maxLength - 1 })) : setImageState((currentState) => ({ ...currentState, currentIndex: currentIndex - 1 }));
    }

    if (action === "increase") {
      currentIndex === maxLength - 1 ? setImageState((currentState) => ({ ...currentState, currentIndex: 0 })) : setImageState((currentState) => ({ ...currentState, currentIndex: currentIndex + 1 }));
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.hero__image}>
        <Image src={heroData[imageState.currentIndex].image} alt="Hero image" fill={true} quality={100} />
        <Slider adjustImageState={adjustImageState} />
      </div>
      <div className={styles.hero__information}>
        <div className={styles.hero__text}>
          <h1 className={styles.hero__header}>{heroData[imageState.currentIndex].title}</h1>
          <p className={styles.hero__paragraph}>{heroData[imageState.currentIndex].description}</p>
        </div>

        <Link className={styles.hero__cta} href="/">
          <p>SHOP NOW</p>
          <div className={styles.hero__arrow} aria-hidden="true">
            <Image src="/assets/images/icons/icon-arrow.svg" alt="arrow icon" fill={true} />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
