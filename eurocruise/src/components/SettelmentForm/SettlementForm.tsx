import { SubmitHandler, useForm } from 'react-hook-form';
import { FormInput } from '../ui/Inputs/FormInput/FormInput';
import styles from './SettlementForm.module.css';
import representative from '/src/assets/world_2.svg'
import vector from '/src/assets/VectorM.svg'
import road from '/src/assets/Road.svg'
import roadFinish from '/src/assets/Road_finish.svg'
import telephone from '/src/assets/TeleP.svg'
import company from '/src/assets/company.svg'
import {GoogleReCaptchaCheckbox} from "@google-recaptcha/react";
import { useForm as useSendForm } from '@formspree/react';
import {useRef, useState} from "react";
import { useOnClickOutside } from '../../utils/hooks/useOnClickOutside';
import { ModalWindow } from '../ModalWindow/ModalWindow';


export interface SettlementFormInputs {
  representative: string;
  email: string;
  phone: string;
  companyName: string;
  сountryFrom: string;
  сountryTo: string;
  cityFrom: string;
  cityTo: string
}


const SettlementForm = () => {
  const [insuranceSelected, SetInsuranceSelected] = useState(true);
  const [recaptchaCheked, setRecaptchaChecked] = useState<null | String>(null)
  const [recaptchReset, setRecaptchaReset] = useState<null | String>(null)
  const [state, handleSendFormSubmit] = useSendForm("xayrbezz");
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const modalContainer = useRef<HTMLDivElement>(null);
  useOnClickOutside(modalContainer, () => setModalIsOpen(false));


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SettlementFormInputs>()

  const onSubmit: SubmitHandler<SettlementFormInputs> = (data: any) => {
   if (recaptchaCheked) {
    console.log(data)
    handleSendFormSubmit(data)
    setModalIsOpen(true)
   }
  }

  return (
      <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.header}>
          <div  className={styles.header_info}>
            РАСЧЕТ СТОИМОСТИ
          </div>
          <span className={styles.line}/>
          <div className={styles.header_description}>
            заполните форму рассчета стоимости
            <span>* - Обязательные поля для заполнения </span>
          </div>
        </div>
        <div  id='Form' className={styles.representative_info}>
          <div className={styles.column}>
            <FormInput 
            label='Представитель'
             icon={representative} 
             placeholder='Имя'
             register={register}
             register_field='representative'
             isError={errors.representative}
             helperText='Поле должно быть заполнено'
              />
            <FormInput 
                      label='Электронная почта'
                       icon={vector}
                        placeholder='Почта'
                        validate
                        register={register}
                        register_field='email'
                        isError={errors.email}
                        helperText={
                          errors.email?.type === 'required'
                            ? 'Поле должно быть заполнено'
                            : errors.email?.type === 'pattern'
                            ? 'Некоректная почта'
                            : ''
                        }
                        />
          </div>
          <div className={styles.column}>
            <FormInput 
                  label='Телефон'
                   icon={telephone}
                    placeholder='+375 __ ___ __'
                    register={register}
                        register_field='phone'
                        isError={errors.phone}
                        helperText='Поле должно быть заполнено'
                    />
            <FormInput 
                      label='Компания'
                        icon={company}
                      placeholder='Название'
                      register={register}
                        register_field='companyName'
                        isError={errors.companyName}
                        helperText='Поле должно быть заполнено'    
              />
          </div>
        </div>
        <h3 className={styles.info_title}>Информация о грузе</h3>
        <div className={styles.routes}>
          <FormInput 
                label='Страна Откуда'
                icon={road}
                placeholder='Россия'
                register={register}
                register_field='сountryFrom'
                isError={errors.сountryFrom}
                helperText='Поле должно быть заполнено' 
                  />
          <FormInput 
                      label='Страна Куда'
                       icon={roadFinish}
                      placeholder='Беларусь'
                      register={register}
                      register_field='сountryTo'
                      isError={errors.сountryTo}
                      helperText='Поле должно быть заполнено'      
                        />
          <FormInput 
                      label='Город Откуда'
                      icon={road}
                      placeholder='Название'
                      register={register}
                      register_field='cityFrom'
                      isError={errors.cityFrom}
                      helperText='Поле должно быть заполнено'  
                      />
          <FormInput 
                    label='Город Куда'
                     icon={roadFinish}
                    placeholder='Название'
                    register={register}
                      register_field='cityTo'
                      isError={errors.cityTo}
                      helperText='Поле должно быть заполнено'        
                      />
        </div>
        <h3 className={styles.info_title}>Страхование груза</h3>
        <div className={styles.buttons_container}>
          <div className={styles.insurance}>
            <div className={insuranceSelected ? styles.selected:""} onClick={()=>SetInsuranceSelected(true)}>
              Застраховать
            </div>
            <div className={!insuranceSelected ?styles.selected:""} onClick={()=>SetInsuranceSelected(false)}>
              Нет
            </div>
          </div>
          <div className={styles.confirm}>
            <GoogleReCaptchaCheckbox  callback={(token)=>setRecaptchaChecked(token)}
            />
            <button type='submit' className={styles.button}>
              Расчитать стоимость
            </button>
          </div>
        </div>
        <ModalWindow 
        label='Заявка успешно отпрвлена'
         description='В скором времени с вами свяжется менеджер'
          isOpen={modalIsOpen}
           ref={modalContainer}
           onClose={()=>setModalIsOpen(false)}
           />
      </form>
  );
};

export default SettlementForm;