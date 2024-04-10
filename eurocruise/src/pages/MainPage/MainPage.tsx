import {Body} from "../../components/Body/Body";
import SettlementForm from "../../components/SettelmentForm/SettlementForm";
import {NoName} from "../../components/NoName/NoName";
import styles from "./MainPage.module.css";
import {Footer} from "../../components/Footer/Footer";
import watch from "/src/assets/watch.svg";
import Package from "/src/assets/ProtectPackage.svg";
import map from "/src/assets/map.svg";
import {BenefitsCard} from "../../components/BenefitsCard/benefitsCard";

const MainPage = () => {
  return (
      <>
        <Body/>
        <SettlementForm/>
        <NoName/>
        <div className={styles.ben}>
        <BenefitsCard title="экономия времени" description={<>Не надо звонить <br/> и вести долгие <br/> переговоры</>} img={watch} /> 
        <BenefitsCard title="отслеживание груза" description={<>Схема отслеживая <br/> покажет <br/> где ваш грузт</>} img={map} />
        <BenefitsCard title="Страхование грузов" description={<>Перевозчики торгуются <br/> за ваш заказ <br/>,снижая цены</>} img={Package} />
        </div> 
        <Footer/>
      </>
  );
};

export default MainPage;