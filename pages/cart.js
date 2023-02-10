import styles from "../styles/Cart.module.css";
import Image from "next/image";
export default function Cart() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <thead>
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
          <tr>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/img/pizza-removebg-preview.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
            </td>
            <td>
              <span className={styles.name}> CORALZO</span>
            </td>
            <td>
              <span className={styles.extras}>
                
                Double ingredients, spicy sauce
              </span>
            </td>
            <td>
              <span className={styles.price}> $19.90</span>
            </td>
            <td>
              <span className={styles.quantity}> 2</span>
            </td>
            <td>
              <span className={styles.total}> $39.80</span>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/img/pizza-removebg-preview.png"
                  alt=""
                  width={100}
                  height={100}
                  
                />
              </div>
            </td>
            <td>
              <span className={styles.name}> CORALZO</span>
            </td>
            <td>
              <span className={styles.extras}>
              
                Double ingredients, spicy sauce
              </span>
            </td>
            <td>
              <span className={styles.price}> $19.90</span>
            </td>
            <td>
              <span className={styles.quantity}> 2</span>
            </td>
            <td>
              <span className={styles.total}> $39.80</span>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/img/pizza-removebg-preview.png"
                  alt=""
                  width={100}
                  height={100}
                
                />
              </div>
            </td>
            <td>
              <span className={styles.name}> CORALZO</span>
            </td>
            <td>
              <span className={styles.extras}>
                
                Double ingredients, spicy sauce
              </span>
            </td>
            <td>
              <span className={styles.price}> $19.90</span>
            </td>
            <td>
              <span className={styles.quantity}> 2</span>
            </td>
            <td>
              <span className={styles.total}> $39.80</span>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src="/img/pizza-removebg-preview.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
            </td>
            <td>
              <span className={styles.name}> CORALZO</span>
            </td>
            <td>
              <span className={styles.extras}>
                
                Double ingredients, spicy sauce
              </span>
            </td>
            <td>
              <span className={styles.price}> $19.90</span>
            </td>
            <td>
              <span className={styles.quantity}> 2</span>
            </td>
            <td>
              <span className={styles.total}> $39.80</span>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
         <h2 className={styles.title}>CARD TOTAL</h2> 
         <div className={styles.totalText}>
           <b className={styles.totalTextTitle}> Subtotal </b>$79.60
         </div>
         <div className={styles.totalText}>
           <b className={styles.totalTextTitle}> Discount </b>$0.00
         </div>
         <div className={styles.totalText}>
           <b className={styles.totalTextTitle}>Total</b>$79.60
         </div>
         <button className={styles.button}>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
}
