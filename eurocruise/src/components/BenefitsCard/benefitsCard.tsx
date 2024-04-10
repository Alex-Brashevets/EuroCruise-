import React, { ReactNode } from "react";
import logo from "/src/assets/logo.svg";
import styles from "./benefitsCard.module.css";
import vector from "/src/assets/Vector.svg";
import FirstScreen from "/src/assets/Rectangle2.svg";
interface BenefitsCardProps{
  title:string, description:ReactNode, img:string}
export const BenefitsCard = ({title,description,img} :BenefitsCardProps) => {
  return ( 

        <div className={styles.Benifit}>
            <div className={styles.card}>
              {title}
            </div>
            <div className={styles.descriptionText}>
            <div className={styles.card_text}>
              {description}
            </div>
            <img  src={img} alt="item" />
            </div>
        </div>
   );
};
