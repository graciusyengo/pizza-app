import React from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
// import {FaCartPlus} from 'rea'
import { FaCartPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function Navbar() {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" height={33} width={32} />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}> ORDER NOW</div>
          <div className={styles.text}> +243972479671</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Home page</li>
          <li className={styles.listItem}>product</li>
          <li className={styles.listItem}>Menus</li>
          <div className={styles.containerLogo}>
            <h2 className={styles.logo}>Gy</h2>
          </div>

          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <Link href="/cart">
        <div className={styles.item}>
          <div className={styles.cart}>
            <FaCartPlus className={styles.cartPlus} />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}
