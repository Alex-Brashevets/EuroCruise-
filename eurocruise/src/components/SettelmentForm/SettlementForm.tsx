import { FormInput } from '../ui/Button/Inputs/FormInput/FormInput';
import styles from './SettlementForm.module.css';
import representative from '/src/assets/world_2.svg'

const SettlementForm = () => {
  return (
      <div>
        <div className={styles.header}>
          <div className={styles.header_info}>
            РАСЧЕТ СТОИМОСТИ
          </div>
          <span className={styles.line}/>
          <div className={styles.header_description}>
            заполните форму рассчета стоимости
            <span>* - Обязательные поля для заполнения </span>
          </div>
        </div>
        <div className={styles.representative_info}>
          <div className={styles.column}>
            <FormInput label='Представитель' icon={representative} placeholder='Имя'/>
            <FormInput label='Электронная почта' icon={representative} placeholder='Почта'/>
          </div>
          <div className={styles.column}>
            <FormInput label='Телефон' icon={representative} placeholder='+375 __ ___ __'/>
            <FormInput label='Компания' icon={representative} placeholder='Название'/>
          </div>
        </div>
        <h3 className={styles.info_title}>Информация о грузе</h3>
        <div className={styles.routes}>
          <FormInput label='Страна Окуда' icon={representative} placeholder='Россия'/>
          <FormInput label='Страна Куда' icon={representative} placeholder='Беларусь'/>
          <FormInput label='Город Окуда' icon={representative} placeholder='Название'/>
          <FormInput label='Город Куда' icon={representative} placeholder='Название'/>
        </div>
      </div>
  );
};

export default SettlementForm;