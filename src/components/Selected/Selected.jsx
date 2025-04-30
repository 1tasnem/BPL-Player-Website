import React from 'react';
import './Selected.css'

const Selected = ({selectedPlayer}) => {
   // console.log(selectedPlayer)
    return (

        <div>
            <h2 className='font-bold text-2xl '>Selected Player({selectedPlayer.length}/6)</h2>
            {
            selectedPlayer.map((player) =>(
            <div>

              <div className='mx-10'>
                <img className="selected-img " src={player.image} alt=""/>
                <p>{player.name}</p>
                <button className='btn '>Delete</button>
                </div>
            </div>))
          }
            
        </div>
    );
};

export default Selected;