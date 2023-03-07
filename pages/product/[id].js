import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
export default function Product() {
  const [size, setSize] = useState(0);
  const pizza = {
    id: 1,
    img: "/img/pizza-removebg-preview.png",
    name: "CAMPAGNOLA",
    price: [19.9, 23.9, 27.9],
    desc: "  lorem kdkdk dkkdlll lolo  dloeoeojdjdj djedje lorem kdkdk dkkdlll lolo  dloeoeojdjdj djedje lorem kdkdk dkkdlll lolo  dloeoeojdjdj djedje lorem kdkdk dkkdlll lolo  dloeoeojdjdj djedje",
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image
            src={pizza.img}
            alt=""
            objectFit="contain"
            width={500}
            height={350}
          />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}> ${pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.sizeSmall} onClick={() => setSize(0)}>
            <Image
              src="/img/size-removebg-preview.png"
              alt=""
              width={30}
              height={30}
            />
            <span className={styles.numberSmall}>Small</span>
          </div>
          <div className={styles.sizeMedium} onClick={() => setSize(1)}>
            <Image
              src="/img/size-removebg-preview.png"
              alt=""
              width={40}
              height={40}
            />
            <span className={styles.numberMedium}>Medium</span>
          </div>
          <div className={styles.sizeLarge} onClick={() => setSize(2)}>
            <Image
              src="/img/size-removebg-preview.png"
              alt=""
              width={50}
              height={50}
            />
            <span className={styles.numberLarge}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}> Choose additionnal ingredient</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double" className={styles.label}> Double Ingrenients</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="cheese"
              name="cheese"
              className={styles.checkbox}
            />
            <label htmlFor="cheese" className={styles.label}> Extra cheese</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="spicy"
              name="spicy"
              className={styles.checkbox}
            />
            <label htmlFor="spicy" className={styles.label}> Spicy Sauce</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="garlic"
              name="garlic "
              className={styles.checkbox}
            />
            <label htmlFor="garlic" className={styles.label}> Garlic Sauce</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}> Add to cart </button>
        </div>
      </div>
    </div>
  );
}
