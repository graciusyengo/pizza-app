import React from "react";
import Image from "next/image";
import styles from "../styles/Featured.module.css";
export default function Featured() {
  const images = [
    "/img/featured.png",
    "/img/featured1.png",
    "/img/featured2.png",
  ];
  return (
    <div className={styles["container"]}>
      <div className={styles.wrapper}>
        <div className={styles.imageContainer}>
          {images.map((image, index) => (
            <Image
              className="mainImage"
              src={image}
              alt=""
              objectPosition="center"
              objectFit="cover"
              key={index}
             width={800}
             height={800}
              
            />
          ))}
         
          <h2 className={styles.title}>kdkdk</h2>
        </div>
      </div>
      
    </div>
  );
}
