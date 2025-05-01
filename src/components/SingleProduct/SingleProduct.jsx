import React from 'react';
import './SingleProduct.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SingleProduct = ({player,handleSelectedPlayer}) => {
   // console.log(handleSelectedPlayer)
    //console.log(player)
    const {image,name,country,player_type,handed,price} = player;

  
      
    return (
        <div>
        <div className='card'>
                <img className='img' src ={image} alt="playe" />

            <div className='flex font-bold text-xl gap-5'>
                
              <h2 className='pb-10 mb-3'>  <i class="fa-solid fa-user"></i>{name}</h2>
              
            </div>
            
                <div className='flex text-sm justify-between -mt-10 text-gray-400 mb-2 border-b-2'>
                 <p><i class="fa-solid fa-flag"></i>  {country}</p> 
                    <button  className='btn text-gray-400'>{player_type}</button>
                </div>
                <h2 className='font-bold text-lg text-left'>Rating</h2>
                <div className='flex justify-between text-sm'> 
                    <h3 className='font-bold'>{handed}</h3>
                    <p className='text-gray-400'>{handed}</p>
                </div>
                <div className='flex justify-between text-sm'>
                    <h2 className='text-gray-400 mt-2'>Price:${price}</h2>
                    <button onClick={() => {handleSelectedPlayer(player)
                    
                    
                     

                    }} className='btn text-gray-800 hover:bg-yellow-300'>Choose Player</button>
                </div>
              
            </div>
            {
  
  }
            
        </div>
        
    );
};

export default SingleProduct;