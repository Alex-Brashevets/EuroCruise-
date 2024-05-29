import styles from "./Header.module.css";
import logo from "/src/assets/logo.svg";
import BurgerM from "/src/assets/BurgerMenu.svg";
import strelka from "/src/assets/strelka.svg";
import placeholder from "/src/assets/placeholder.svg";
import {NavLink} from "react-router-dom";
import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { useOnClickOutside } from "../../utils/hooks/useOnClickOutside";
import { Anchor } from "../../utils/hooks/useAnchor";
export const Header = () => {
  const [nav, setNav] = useState(false);  
  const sideNavBar = React.useRef<HTMLDivElement>(null);
  useOnClickOutside(sideNavBar, () => setNav(false));
  const{ t, i18n } = useTranslation(); 
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.item}>
          <NavLink className={styles.link} to={'/'}>
            <img className={styles.logo} src={logo} alt="logo" />
          </NavLink>
          <div className={styles.vertical_line}/>
          <img className={styles.place_img} src={placeholder} alt="xz" />
          <a href="ссылка" className={styles.link}>
            <div className={styles.office}>{t('text')}</div>
          </a>
        </div>
        <div className={styles.item}>
          <div className={styles.header_button}>
          <Anchor to="Form" path="/"> <button className={styles.button}>{t('calcCost')}</button></Anchor>
          </div>

          <a href="ссылка" className={styles.link}>
            <div className={styles.language}> {t('language')} </div>
          </a>
        <img className={styles.strelkaimg} src={strelka} alt="xz" />
        <div>
        <div onClick={()=> setNav(!nav)} className={styles.Burger}>     
        {nav ?<img src={BurgerM} alt="Open Burger Menu" /> : <img src={BurgerM} alt="Closed Burger Menu" />} 
        </div>
        {nav && <div ref ={sideNavBar}> 
          <ul 
          className={nav ? styles.menu : styles.active}>
          <li>
            <a href="##">product</a>
          </li>
          <li>
            <a href="##">product</a>
          </li>
          <li>
            <a href="##">product</a>
          </li>
          <li>
            <a href="##">product</a>
          </li>
        </ul>
        </div>}
        </div>
        </div>
      </div>
      <ul className={styles.li1}>
        <li className={styles.text}>
          <div className={styles.link}>
            <Anchor to="About" path="/"> {t('aboutUs')}</Anchor>
        </div>
        </li>
        <li className={styles.text}>
          <NavLink to="/service-center" className={styles.link}>
          {t('serviceCentr')} 
          </NavLink>
        </li>
        <li className={styles.text}>
          <NavLink to="/vacancies" className={styles.link}>
          {t('vacancies')} 
          </NavLink>
        </li>
        <li className={styles.text}>
          <NavLink to="/add-services" className={styles.link}>
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