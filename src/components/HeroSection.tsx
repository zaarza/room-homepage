import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "./Slider";
import styles from "@/styles/components/HeroSection.module.scss";

interface ImageState {
  currentIndex: number;
  imagesLength: number;
}

const HeroSection = () => {
  const [imageState, setImageState] = useState<ImageState>({
    currentIndex: 1,
    imagesLength: 3,
  });

  const adjustImageState = (action: string): void => {
    const { currentIndex, imagesLength } = imageState;

    if (action === "decrease") {
      currentIndex === 1 ? setImageState((currentState) => ({ ...currentState, currentIndex: imagesLength })) : setImageState((currentState) => ({ ...currentState, currentIndex: currentIndex - 1 }));
    }

    if (action === "increase") {
      currentIndex === imagesLength ? setImageState((currentState) => ({ ...currentState, currentIndex: 1 })) : setImageState((currentState) => ({ ...currentState, currentIndex: currentIndex + 1 }));
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.hero__image}>
        <Image src={`/assets/images/hero-${imageState.currentIndex}.jpg`} alt="Hero image" fill={true} quality={100} />
        <Slider adjustImageState={adjustImageState} />
      </div>
      <div className={styles.hero__information}>
        <div className={styles.hero__text}>
          <h1 className={styles.hero__header}>Discover innovative ways to decorate</h1>
          <p className={styles.hero__paragraph}>
            We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own
            style with our collection and make your property a reflection of you and what you love.
          </p>
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
