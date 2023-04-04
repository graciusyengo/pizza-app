import axios from "axios";
import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
const inter = Inter({ subsets: ["latin"] });
export default function Home({pizzaList}) {
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
        <PizzaList pizzaList={pizzaList}/>
      </div>
    </>
  );
}
export const getServerSideProps= async ()=>{
  const res = await axios.get("http://localhost:3000/api/products")
  return{
    props:{
      pizzaList:res.data
    }
  }
}

