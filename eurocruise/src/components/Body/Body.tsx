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
        <div id= "About"className={styles.abotus}>
          <div className={styles.vibe}>
            <h2 className={styles.about}>О нас </h2>
            <img className={styles.line} src={ThreeLine}/>
          </div>
          <p className={styles.paragraph}>
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            similique nihil aperiam dolorum dolor consequuntur illo eum totam
            velit impedit,
            <br /> reiciendis exercitationem quia necessitatibus, perferendis
            asperiores! Quod similique quidem deserunt.     Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Quos blanditiis labore
            <br /> qui numquam architecto? Sunt repudiandae aperiam in rerum
            nesciunt, inventore doloremque quia. Dolore ullam amet, similique
            vero minima ex?
          </p>
        </div>
        <img className={styles.img} src={MainCar}/>
      </div>
    </>
  );
};
