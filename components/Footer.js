import styles from "../styles/Footer.module.css";
import Image from "next/image";
export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/featured.png" alt="" width={600} height={636} />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>OH YES, WE DID. GY PIZZA, WELL BAKE SLICE OF PIZZA</h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}> FIND OUR RESTAURANTS </h1>
          <p className={styles.text}>
            70 BIS. COLONEL #304,
            <br /> Kinshasa, 45644
            <br /> +243972479631
          </p>
          <p className={styles.text}>
            70 BIS. COLONEL #304,
            <br /> Kinshasa, 45644
            <br /> +243972479631
          </p>
          <p className={styles.text}>
            70 BIS. COLONEL #304,
            <br /> Kinshasa, 45644
            <br /> +243972479631
          </p>
          <p className={styles.text}>
            70 BIS. COLONEL #304,
            <br /> Kinshasa, 45644
            <br /> +243972479631
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}> WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDY - SUNDAY
            <br /> 12:00 - 22:00
          </p>
        </div>
      </div>
      footer
    </div>
  );
}
