import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
export default function Product({pizza}) {
  const [price, setPrice] = useState(pizza.prices[0]);
   const [size, setSize] = useState(0);
   const [extras,setExtras]=useState([])
   const [quantity,setQuantity]=useState(1)

   const changePrice=(number)=>{
     setPrice(price + number)
   }
   const handleSize=(sizeIndex)=>{
     const difference= pizza.prices[sizeIndex]-pizza.prices[size]
     setSize(sizeIndex)
     changePrice(difference)
   }
 const handlerChange=(e,option)=>{
   const checked=e.target.checked
   if(checked){
     changePrice(option.price)
     setExtras((prev=>[...prev,option]))
     console.log("####",option)

   }else{
     changePrice(-option.price)
     setExtras(extras.filter((extra)=> extra._id!==option._id))
   }
  
 }
 console.log(extras)
 

  // const pizza = {
  //   id: 1,
  //   img: "/img/pizza-removebg-preview.png",
  //   name: "CAMPAGNOLA",
  //   price: [19.9, 23.9, 27.9],
  //   desc: "  lorem kdkdk dkkdlll lolo  dloeoeojdjdj djedje lorem kdkdk dkkdlll lolo  dloeoeojdjdj djedje lorem kdkdk dkkdlll lolo  dloeoeojdjdj djedje lorem kdkdk dkkdlll lolo  dloeoeojdjdj djedje",
  // };
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
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}> ${price}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.sizeSmall} onClick={() => handleSize(0)}>
            <Image
              src="/img/size-removebg-preview.png"
              alt=""
              width={30}
              height={30}
            />
            <span className={styles.numberSmall}>Small</span>
          </div>
          <div className={styles.sizeMedium} onClick={() => handleSize(1)}>
            <Image
              src="/img/size-removebg-preview.png"
              alt=""
              width={40}
              height={40}
            />
            <span className={styles.numberMedium}>Medium</span>
          </div>
          <div className={styles.sizeLarge} onClick={() => handleSize(2)}>
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
          {pizza.extraOption.map((option)=>(
            <div className={styles.option} key={option._id}>
            <input
              type="checkbox"
              id={option.text}
              name={option.text}
              className={styles.checkbox}
              onChange={(e)=>handlerChange(e,option)}
            />
            <label htmlFor="double" className={styles.label}> {option.text}</label>
          </div>
          
          ))}
          
         
       
        </div>
        <div className={styles.add}>
          <input  onChange={(e) =>setQuantity(e.target.value)} type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}> Add to cart </button>
        </div>
      </div>
    </div>
  );
}
export const getServerSideProps= async({params})=>{
  const res = await axios.get(`http://localhost:3000/api/products/${params.id}`)
  console.log(res)
  return{
    props:{
      pizza:res.data
    }
  }
}
