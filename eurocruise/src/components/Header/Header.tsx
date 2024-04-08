import styles from "./Header.module.css";
import logo from "/src/assets/logo.svg";
import strelka from "/src/assets/strelka.svg";
import placeholder from "/src/assets/placeholder.svg";
export const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <a href="ссылка" className={styles.link}>
          <img className={styles.logoimg} src={logo} alt="xz" />
        </a>
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
          <a href="ссылка1" className={styles.link}>
            О НАС
          </a>
        </li>
        <li className={styles.text}>
          <a href="ссылка2" className={styles.link}>
            СЕРВИСНЫЙ ЦЕНТР
          </a>
        </li>
        <li className={styles.text}>
          <a href="ссылка3" className={styles.link}>
            ВАКАНСИИ
          </a>
        </li>
        <li className={styles.text}>
          <a href="ссылка4" className={styles.link}>
            ДОПОЛНИТЕЛЬНЫЕ УСЛУГИ
          </a>
        </li>
        <li className={styles.text}>
          <a href="ссылка5" className={styles.link}>
            ДОСТАВКА ГРУЗОВ
          </a>
        </li>
        <li className={styles.text}>
          <a href="ссылка6" className={styles.link}>
            ПРОДАЖА ТЕХНИКИ С ПРОБЕГОМ
          </a>
        </li>
      </ul>
    </header>
  );
};
