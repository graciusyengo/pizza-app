import Image from "next/image";
import styles from "../../styles/Order.module.css";
import { MdOutlinePaid } from "react-icons/md";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { GiEating} from "react-icons/gi";
import {FaMotorcycle} from "react-icons/fa";
import {FaUserCheck} from "react-icons/fa"
export default function Order() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.tr}>
                <th>Order</th>
                <th>Customer</th>
                <th>Adress</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className={styles.id}> 12345</span>
                </td>
                <td>
                  <span className={styles.name}>Gracius Yengo</span>
                </td>
                <td>
                  <span className={styles.adress}> Elton st. 222-33</span>
                </td>
                <td>
                  <span className={styles.total}> $39.80</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.row}>
          <div className={styles.status}>
            <MdOutlinePaid className={styles.mdpaid} />
            <span>payement</span>
            <div className={styles.checkedIcon}>
              <BsFillPatchCheckFill className={styles.BsFillPatchCheckFill} />
            </div>
          </div>
          <div className={styles.status}>
          <GiEating className={styles.GiEating} />
            <span>preparing</span>
            <div className={styles.checkedIcon}>
              <BsFillPatchCheckFill className={styles.BsFillPatchCheckFill} />
            </div>
          </div>
          <div className={styles.status}>
          <FaMotorcycle className={styles.FaMotorcycle}/>
            <span>On the way</span>
            <div className={styles.checkedIcon}>
              <BsFillPatchCheckFill className={styles.BsFillPatchCheckFill} />
            </div>
          </div>
          <div className={styles.status}>
          <FaUserCheck className={styles.FaUserCheck}/>
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <BsFillPatchCheckFill className={styles.BsFillPatchCheckFill} />
            </div>
          </div>
        </div>
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
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
}
