import styles from "../styles/Cart.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

// This values are the props in the UI

export default function Cart() {
  
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  // Custom component to wrap the PayPalButtons and handle currency changes

    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
  

 

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.tr}>
              <th>Product</th>
              <th>Name</th>
              <th>Extra</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.products.map((product) => (
              <tr className={styles.tr} key={product._id}>
                <td>
                  <div className={styles.imgContainer}>
                    <Image src={product.img} alt="" width={200} height={200} />
                  </div>
                </td>
                <td>
                  <span className={styles.name}> {product.title}</span>
                </td>
                <td className={styles.tdExtras}>
                  {product.extras.map((extra) => (
                    <span className={styles.extras} key={extra._id}>
                      {extra.text},
                    </span>
                  ))}
                </td>
                <td>
                  <span className={styles.price}> ${product.price}</span>
                </td>
                <td>
                  <span className={styles.quantity}> {product.quantity}</span>
                </td>
                <td>
                  <span className={styles.total}>
                    {" "}
                    ${product.price * product.quantity}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CARD TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}> Subtotal </b>${cart.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}> Discount </b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total</b>${cart.total}
          </div>
          <button className={styles.button}>CHECKOUT NOW!</button>
         
        </div>
      </div>
    </div>
  );
}
