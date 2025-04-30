
import { useState } from 'react'
import './App.css'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cardcontainer from './components/cardcontainer/cardcontainer';
import Navbar from './components/Navbar/Navbar'
import Available from './components/Available/Available';

function App() {
 
  const [coins,setCoins] = useState(0);

  const handlecoins = () =>{
    //console.log(coins)
    const newBalance = coins + 6000000; 
  setCoins(newBalance);

  
  }

  const [isActive,setIsActive] = useState({
    Available:true,
    status:"active",
  })
 //console.log(isActive)
 const handleIsActiveState = (status) =>{
  if(status == 'Available')
  {
    setIsActive({
      Available:true,
      status:"Available",
    })
  }
  else{
    setIsActive({
      Available:false,
      status:"Selected",
    })

  }
 }

  return (
    <>
      
      
      <Navbar coins={coins} handlecoins={handlecoins} ></Navbar>
      
      <ToastContainer />
      <Cardcontainer isActive={isActive} handleIsActiveState={handleIsActiveState}></Cardcontainer>
    
     
    </>
  )
}

export default App
