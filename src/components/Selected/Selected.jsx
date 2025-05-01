import React from 'react';

import './Selected.css'
import Available from '../Available/Available';



const Selected = ({selectedPlayer,handleDelete, handleIsActiveState}) => {
   // console.log(selectedPlayer)

 
    return (

        

        <div>
            <h2 className='font-bold text-2xl '>Selected Player({selectedPlayer.length}/6)</h2>
            
            {
            selectedPlayer.map((player) =>(
            <div className='mt-5 '>

              <div className='card_p'>
                <img className="selected-img " src={player.image} alt=""/>
                <div className='flex justify-between w-full ' >
                  <div>
                <p className='text-xl'>{player.name}</p>
                
                <p className='text-sm text-gray-500'>{player.handed}</p>
                
              </div>
               </div>
               <button  onClick = {()=>handleDelete(player.name)}className="btn bg-red-500 text-white px-3 py-1 rounded ml-20"><i class="fa-solid fa-trash"></i></button>
                </div>
              
               
            </div>))
            }
          
         <button onClick={() => {handleIsActiveState("Available")}}  className='add-button'>Add More Players</button>
          
           

            
        </div>
    );
};

export default Selected;