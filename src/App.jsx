
import { useState } from 'react'
import './App.css'

import { ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cardcontainer from './components/cardcontainer/cardcontainer';
import Navbar from './components/Navbar/Navbar'
import Available from './components/Available/Available';



function App() {
 
  const [coins,setCoins] = useState(0);

  const handlecoins = () =>{
   // console.log(coins)
    const newBalance = coins + 6000000; 
  setCoins(newBalance);

  
  }
  const handleIncreasePrice = (pr) =>
    {
   setCoins(coins-pr)
    }

 // console.log(coins);
 

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
  if(isexist || selectedPlayer.length >= 6){
    toast.warn("⚠️ Player already selected or limit reached!", {
      position: "top-center",
      autoClose: 3000,
      pauseOnHover: true,
    });
    
  }
  else{
   // console.log("naiiiii")
   if(player.price>=coins){
    toast.error("❌ Not enough money!", {
      position: "top-center",
      autoClose: 3000,
      pauseOnHover: true,
    });
   }
  else{
  handleIncreasePrice(player.price);
 // showInsufficientFundsToast();
    const newPlayer = [...selectedPlayer,player]
    setSelectedplayers(newPlayer);
    toast.success(`🎉 Congratulations! ${player.name} added successfully! `, {
      position: "top-center",
      autoClose: 3000,
      pauseOnHover: true,
    });
  }
  }
}
 

//console.log(selectedPlayer)
const handleDeletePrice = (name) =>
  {
   const player = selectedPlayer.find((p) => p.name == name);
   setCoins(coins+player.price)
 
  }






const handleDelete = (name)=>{
  handleDeletePrice(name);

  const newPlayer = selectedPlayer.filter ((p) => p.name != name);
    setSelectedplayers(newPlayer);
    toast.info(`${name} has been removed from the list.`, {
      position: "top-center",
      autoClose: 3000,
      pauseOnHover: true,
    });

}




  return (
    <>
      
      
      <Navbar coins={coins} handlecoins={handlecoins}  ></Navbar>
      
      <ToastContainer />
      <Cardcontainer isActive={isActive} handleIsActiveState={handleIsActiveState} handleSelectedPlayer={handleSelectedPlayer} selectedPlayer={selectedPlayer}
    handleDelete={handleDelete}  
    
    
      
      ></Cardcontainer>
     
    
     
    </>
  )
}

export default App
