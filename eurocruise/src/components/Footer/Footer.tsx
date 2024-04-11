import { ReactNode } from "react";
import logo from "/src/assets/logo.svg";
  import styles from "./Footer.module.css";
import vector from "/src/assets/Vector.svg";
import FirstScreen from "/src/assets/Rectangle2.svg";
export const Footer = () => {
  return (
    <footer>
      <div className={styles.footer_container}>
        <div className={styles.container_img}>
          <img className={styles.logo2} src={logo} alt="" />
          <div className={styles.columText}>
            <img className={styles.vector_img} src={vector} />
            <div className={styles.FooterText}>998 Devonshire<br /> Ave.Camp  Hill, PA 17011</div>
          </div>
          <div className={styles.columText}>
            <img className={styles.vector_img} src={vector} />
            <div className={styles.FooterText}>haddawy@comcast.net</div>
          </div>
          <div className={styles.columText}>
            <img className={styles.vector_img} src={vector} />
            <div className={styles.FooterText}>(334) 202-4792</div>
          </div>
        </div>
        <div className={styles.Question}>Question us</div>
        <div className={styles.CompanyMain}>
          <div className={styles.Company}>Company</div>
          <ul className={styles.info}>
            <li className={styles.info_container}>о нас</li>
            <li className={styles.info_container}>карьера</li>
            <li className={styles.info_container}>Вакансии</li>
            <li className={styles.info_container}>доставка грузов</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
