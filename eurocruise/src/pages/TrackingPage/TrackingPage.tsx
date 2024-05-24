import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './TrackingPage.module.css';
import axios from 'axios';
import { Input } from '../../components/ui/Inputs/Input/Input';



const TrackingPage = () => {
    const [error, setError] = useState()
    const [api, setApi] = useState('')
    const [id, setId] = useState('')
    const fetchData = async (key: string, id: string) => {
        try {
            return await axios.get('https://mapon.com/api/v1/routeplanning_routes/get.json', {
            params: {
                key: key,
                id: Number(id)
            }
           
        })
        } catch (error) {
        }
    }

    const SubmitHandler = (e: FormEvent) => {
        e.preventDefault();
        console.log(api, id)
        console.log(fetchData(api, id))
    }

    return (
        <div>
            <form onSubmit={SubmitHandler}>
             <h1>Отслеживайте свои маршруты</h1>
             <label htmlFor="">Введите ключ:</label>
             <Input placeholder='Ключ' onChange={(e: ChangeEvent<HTMLInputElement>)=>setApi(e.target.value)}/>
             <label htmlFor="">Введите номер:</label>
             <Input placeholder='Номер' onChange={(e: ChangeEvent<HTMLInputElement>)=>setId(e.target.value)}/> 
             <button type='submit'> Отслеживать</button> 
            </form>      
        </div>
    )
}

export default TrackingPage;