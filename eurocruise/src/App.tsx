import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/Button/Button'
import { Header } from './components/Header/Header'
import { Body } from './components/Body/Body'
import { NoName } from './components/NoName/NoName'
import SettlementForm from './components/SettelmentForm/SettlementForm'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Header/> 
      <Body/>
      <SettlementForm/>
      <NoName/>
    </>
  )
}
export default App
