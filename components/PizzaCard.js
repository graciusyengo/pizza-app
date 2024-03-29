import React from "react";
import styles from "../styles/PizzaCard.module.css";
import Image from "next/image";
import Link from "next/link";

export default function PizzaCard({pizza}) {
  return (
    
    <div className={styles.container}>
      <Link href={`/product/${pizza._id}`}>
      <Image className={styles.imgPizza} src={pizza.img} alt="" width="300" height="300"  /> 
      </Link>
       <h1 className={styles.title}> {pizza.title}</h1>
      <span className={styles.price}> {pizza.prices[0]}</span>
      <p className={styles.desc}>
        
    {pizza.desc}
      </p>
    </div>
    
  );
}
