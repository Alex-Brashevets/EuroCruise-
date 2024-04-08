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
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellat, similique nihil aperiam dolorum dolor consequuntur illo
              eum totam velit impedit,
              <br /> reiciendis exercitationem quia necessitatibus, perferendis
              asperiores! Quod similique quidem deserunt.     Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Quos blanditiis labore
              <br /> qui numquam architecto? Sunt repudiandae aperiam in rerum
              nesciunt, inventore doloremque quia. Dolore ullam amet, similique
              vero minima ex?
            </p>
          </div>
          <img className={styles.img} src={MainCar}></img>
        </div>
        <img className={styles.tabl} src={Tabloo} alt="" />

        <div className={styles.container2}>
          <div className={styles.abotus}>
            <div className={styles.vibe}>
              <h2 className={styles.about}>О нас </h2>
              <img className={styles.line} src={ThreeLine}></img>
            </div>
            <p className={styles.paragraph}>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repellat, similique nihil aperiam dolorum dolor consequuntur illo
              eum totam velit impedit,
              <br /> reiciendis exercitationem quia necessitatibus, perferendis
              asperiores! Quod similique quidem deserunt.     Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Quos blanditiis labore
              <br /> qui numquam architecto? Sunt repudiandae aperiam in rerum
              nesciunt, inventore doloremque quia. Dolore ullam amet, similique
              vero minima ex?
            </p>
          </div>
        </div>
      </main>
    </>
  );
};
