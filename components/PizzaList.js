import React from "react";
import PizzaCard from "./PizzaCard";
import styles from "../styles/PizzaList.module.css";

export default function PizzaList({ pizzaList }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> THE BEST PIZZA IN NOW</h1>
      <p className={styles.desc}>
        lorem dkdkdkkd dolo dle ld ,,d landit eke,kek zk«ZZ lorem ipsul orem
        dkdkdkkd dolo dle ld ,,d landit eke,kek zk«ZZ lorem ipsul
      </p>
      <div className={styles.wrapper}>
          {pizzaList.map((pizza) => (
            <PizzaCard  key={pizza._id} pizza={pizza}/>
          ))}
      </div>
    </div>
  );
}
