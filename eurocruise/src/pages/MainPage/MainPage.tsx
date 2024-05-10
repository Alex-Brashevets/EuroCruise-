import {Body} from "../../components/Body/Body";
import SettlementForm from "../../components/SettelmentForm/SettlementForm";
import {NoName} from "../../components/NoName/NoName";
import styles from "./MainPage.module.css";
import {Footer} from "../../components/Footer/Footer";
import watch from "/src/assets/watch.svg";
import Package from "/src/assets/ProtectPackage.svg";
import map from "/src/assets/map.svg";
import {BenefitsCard} from "../../components/BenefitsCard/BenefitsCard";
import { NewsContainer } from "../../components/NewsContainer/NewsContainer";

const MainPage = () => {
  return (
    <>
        <Body/>
        <SettlementForm/>
        <NoName/>
        <NewsContainer/>
        <div className={styles.benefits_container}>
          <BenefitsCard title="Экономия времени" description={<>Не надо звонить <br/> и вести долгие <br/> переговоры</>} img={watch} />
          <BenefitsCard title="Отслеживание груза" description={<>Схема отслеживая <br/> покажет <br/> где ваш грузт</>} img={map} />
          <BenefitsCard title="Страхование грузов" description={<>Перевозчики торгуются <br/> за ваш заказ <br/>,снижая цены</>} img={Package} />
        </div>
      </>
  );
};

export default MainPage;