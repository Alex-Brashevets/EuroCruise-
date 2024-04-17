import styles from "./NewsContainer.module.css";
import ThreeLine from "/src/assets/line.svg";
import MainCar from "/src/assets/car1.svg";
import StrelaR from "/src/assets/strelkaRight.svg";
import StrelaL from "/src/assets/strelkaleft.svg";

export const NewsContainer = () => {
  return (
    <>
      <div className={styles.vibe}>
        <h2 className={styles.news}>Новости </h2>
        <img className={styles.line} src={ThreeLine} />
      </div>
      <div className={styles.threeImg}>
        <img className={styles.imgL} src={StrelaL} />
        <img className={styles.img} src={MainCar} />
        <img className={styles.img} src={MainCar} />
        <img className={styles.img} src={MainCar} />
        <img className={styles.imgR} src={StrelaR} />
      </div>
    </>
  );
};
