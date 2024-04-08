import styles from "./Header.module.css";
import logo from "/src/assets/logo.svg";
import strelka from "/src/assets/strelka.svg";
import placeholder from "/src/assets/placeholder.svg";
import {NavLink} from "react-router-dom";
export const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <NavLink className={styles.link} to={'/'}>
          <img className={styles.logoimg} src={logo} alt="logo" />
        </NavLink>
        <div className={styles.manchik}></div>
        <img className={styles.placeimg} src={placeholder} alt="xz" />
        <a href="ссылка" className={styles.link}>
          <div className={styles.ofice}> НАШ ОФИС</div>
        </a>
        <a href="ссылка" className={styles.link}>
          <button className={styles.button1}> узнать стоимость </button>
        </a>
        <a href="ссылка" className={styles.link}>
          <div className={styles.language}> RU </div>
        </a>
        <img className={styles.strelkaimg} src={strelka} alt="xz" />
      </div>
      <ul className={styles.li1}>
        <li className={styles.text}>
          <NavLink to="/about-us" className={styles.link}>
            О НАС
          </NavLink>
        </li>
        <li className={styles.text}>
          <NavLink to="/service-center" className={styles.link}>
            СЕРВИСНЫЙ ЦЕНТР
          </NavLink>
        </li>
        <li className={styles.text}>
          <NavLink to="/vacancies" className={styles.link}>
            ВАКАНСИИ
          </NavLink>
        </li>
        <li className={styles.text}>
          <NavLink to="/services" className={styles.link}>
            ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ
          </NavLink>
        </li>
        <li className={styles.text}>
          <NavLink to="/delivery" className={styles.link}>
            ДОСТАВКА ГРУЗОВ
          </NavLink>
        </li>
        <li className={styles.text}>
          <NavLink to="/sales" className={styles.link}>
            ПРОДАЖА ТЕХНИКИ С ПРОБЕГОМ
          </NavLink>
        </li>
      </ul>
    </header>
  );
};
