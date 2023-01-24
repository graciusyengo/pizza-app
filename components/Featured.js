import React from "react";
import Image from "next/image";
import {MdOutlineNavigateNext} from "react-icons/md"
import {GrPrevious} from "react-icons/gr"
import {GrFormPreviousLink} from "react-icons/gr"
import {BiCaretRight} from "react-icons/bi"
import {BiCaretLeft} from "react-icons/bi"

import styles from "../styles/Featured.module.css";
import { IconContext } from "react-icons";
export default function Featured() {
  const images = [
    "/img/featured.png",
    "/img/featured2.png",
    "/img/featured1.png",
  ];
  return (
    <div className={styles["container"]}>
      <BiCaretLeft className={styles.BiCaretLeft} size="200px" /> 
      <div className={styles.wrapper}>
        <div className={styles.imageContainer}>
          {images.map((image, index) => (
            <Image
              className="mainImage"
              src={image}
              alt=""
              objectPosition="center"
              objectFit="cover"
              key={index}
             width={800}
             height={800}
              
            />
          ))}
          
              

          
         
          <h2 className={styles.title}>kdkdk</h2>
        </div>
      </div>
      <BiCaretRight className={styles.BiCaretRight}size="200px" />
     
    </div>
  );
}
