import React, { useState } from "react";
import Image from "next/image";
import { BiCaretRight } from "react-icons/bi";
import { BiCaretLeft } from "react-icons/bi";
import styles from "../styles/Featured.module.css";

export default function Featured() {
  const [index, setIndex] = useState(0);
  const images = [
    "/img/featured2.png",
    "/img/featured.png",
    "/img/featured1.png",
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : 2);
    }
    if (direction === "r") {
      setIndex(index !== 2 ? index + 1 : 0);
    }
  };
  console.log(index);
  return (
    <div className={styles["container"]}>
      <BiCaretLeft
        className={styles.BiCaretLeft}
        
        onClick={() => handleArrow("l")}
      />
      <div
        className={styles.wrapper}
        style={{ transform: `translateX(${-100 * index}vw)` }}
      >
        {images.map((image, index) => (
          <div className={styles.imageContainer} key={index}>
            <Image
              className="mainImage"
              src={image}
              alt=""
              width={800}
              height={800}
            />
          </div>
        ))}
        <div className={styles.containerTitle}>
          <div className={styles.containerHotSpicy}>
            <h6 className={styles.hotSpicy}> Hot & Spicy</h6>
          </div>
          <h2 className={styles.title}>Pizza</h2>
          <div className={styles.containerDetail}>
            <span className={styles.detailReduction}>50 % OFF</span>
            <span className={styles.detailOrder}>ORDER NOW</span>
            <span className={styles.detailDev}> Gy dev</span>
          </div>
        </div>
      </div>
      <BiCaretRight
        className={styles.BiCaretRight}
        // size="200px"
        // ObjectFit="contain"
        onClick={() => handleArrow("r")}
      />
    </div>
  );
}
