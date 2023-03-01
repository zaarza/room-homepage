import React from "react";
import styles from "@/styles/components/Slider.module.scss";
import Image from "next/image";

interface Slider {
  adjustImageState: Function;
}

export default function Slider({ adjustImageState }: Slider) {
  return (
    <div className={styles.slider}>
      <button className={styles.slider__previous} type="button" onClick={() => adjustImageState("decrease")}>
        <Image src="/assets/images/icons/icon-angle-left.svg" alt="Previous image" width={12} height={12} />
      </button>
      <button className={styles.slider__next} type="button" onClick={() => adjustImageState("increase")}>
        <Image src="/assets/images/icons/icon-angle-right.svg" alt="Next image" width={12} height={12} />
      </button>
    </div>
  );
}
