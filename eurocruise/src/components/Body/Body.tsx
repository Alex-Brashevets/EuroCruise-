import styles from "./Body.module.css";
import MainCar from "/src/assets/car1.svg";
import ThreeLine from "/src/assets/line.svg";
export const Body = () => {
  return (
    <>
      <div className={styles.container}>
        <div className="">
          <h1 className={styles.text}>ГРУЗОВЫЕ ПЕРЕВОЗКИ</h1>
          <div className={styles.text2}>
            Перевозка крупногабаритных грузов по России и Европе. Полное <br />{" "}
            экспедирование, страхование, упаковка и хранение грузов
          </div>
        </div>
      </div>
      <div className={styles.container2}>
        <div id="About" className={styles.abotus}>
          <div className={styles.vibe}>
            <h2 className={styles.about}>О нас </h2>
            <img className={styles.line} src={ThreeLine} />
          </div>
          <p className={styles.paragraph}>
            {" "}
            ООО "ЕвроКруиз" - ведущая транспортно-логистическая компания,
            предоставляющая услуги по международным автомобильным
            грузоперевозкам. Мы осуществляем доставку грузов собственным и
            привлеченным автомобильным транспортом с соблюдением всех требований
            заказчика. География наших перевозок охватывает Европу, Россию,
            Беларусь, Казахстан и другие страны СНГ. Мы перевозим практически
            любые виды грузов, включая опасные грузы (ADR), дорогостоящие и
            требующие соблюдения температурного режима. Наш отраслевой опыт
            включает пищевую, легкую, химическую, машиностроительную,
            строительную промышленность, а также перевозки косметики,
            парфюмерии, оборудования, инструментов, металлов, бытовой техники и
            других потребительских товаров.
          </p>
        </div>
        <img className={styles.img} src={MainCar} />
      </div>
    </>
  );
};
