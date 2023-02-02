import React from "react";
import styles from "../styles/PizzaCard.module.css";
import Image from "next/image";

export default function PizzaCard() {
  return (
    <div className={styles.container}>
      <Image className={styles.imgPizza} src="/img/featured2.png" alt="" width="300" height="300"  />
      <h1 className={styles.title}> FIORI DI ZUCCA</h1>
      <span className={styles.price}> $19.00</span>
      <p className={styles.desc}>
        {" "}
        lorem loremekkekke ejeuueue eueuuue uueuueueuo yeuu
      </p>
    </div>
  );
}
