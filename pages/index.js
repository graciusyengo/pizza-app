import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Pizza restaurant</title>
        <meta name="description" content="Best Pizza Restaurant" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.description}>
        <Featured />
        <PizzaList/>
      </div>
    </>
  );
}
