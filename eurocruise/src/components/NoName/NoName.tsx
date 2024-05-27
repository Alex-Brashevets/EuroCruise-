import { ReactNode } from "react";
import styles from "./NoName.module.css";
import FirstScreen from "/src/assets/Rectangle2.svg";
import MainCar from "/src/assets/car1.svg";
import ThreeLine from "/src/assets/line.svg";
import Tabloo from "/src/assets/tablo.svg";
export const NoName = () => {
  return (
    <>
      <main>
        <div className={styles.container3}>
          <div className={styles.abotus}>
            <div className={styles.vibe}>
              <h2 className={styles.about}>О нас </h2>
              <img className={styles.line} src={ThreeLine}></img>
            </div>
            <p className={styles.paragraph}>
              {" "}
              Компания "ЕвроКруиз" предлагает комплектные грузоперевозки, а
              также контрактные перевозки, разработанные с учетом специфики
              вашего бизнеса. Мы гарантируем своевременную подачу транспорта,
              высокую скорость доставки, контроль за выполнением договорных
              обязательств и обязательную визуализацию размещения груза. Раздел
              "Наши преимущества" Выбирая "ЕвроКруиз", вы получаете целый
              комплекс преимуществ:
              <ul>
                <li>Своевременная подача транспорта под загрузку </li>
                <li>Наличие ADR-комплекта в каждом автопоезде </li>
                <li>Оптимальная стоимость доставки </li>
                <li>Разработка персонального плана погрузки </li>
                <li>Возможность доставки 2-мя водителями </li>
                <li>Подготовка ЭПИ квалифицированным персоналом </li>
                <li>Постоянный контроль режима труда и отдыха водителей </li>
                <li>Обязательный контроль внешнего состояния груза </li>
                <li>Команда опытных водителей со стажем более 5 лет </li>
                <li>Безопасный скоростной режим и соблюдение норм </li>
                <li>Современный автопарк ведущих производителей </li>
              </ul>
              Мы гарантируем своевременную, надежную и безопасную доставку
              грузов в соответствии с вашими пожеланиями.
            </p>
          </div>
          <img className={styles.img} src={MainCar}></img>
        </div>
      </main>
    </>
  );
};
