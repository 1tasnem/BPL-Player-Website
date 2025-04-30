
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


 const [selectedPlayer,setSelectedplayers] = useState([]);

const handleSelectedPlayer = (player) =>{
const isexist = selectedPlayer.find((p) => p.name == player.name)
  //console.log(product);
  if(isexist){
    alert("Already Added")
  }
  else{
   // console.log("naiiiii")
   //handleIncreasePrice(product.price);
    const newPlayer = [...selectedPlayer,player]
    setSelectedplayers(newPlayer);
  }
 
}
//console.log(selectedPlayer)

  return (
    <>
      
      
      <Navbar coins={coins} handlecoins={handlecoins} ></Navbar>
      
      <ToastContainer />
      <Cardcontainer isActive={isActive} handleIsActiveState={handleIsActiveState} handleSelectedPlayer={handleSelectedPlayer} selectedPlayer={selectedPlayer}></Cardcontainer>
    
     
    </>
  )
}

export default App
