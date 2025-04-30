import { useEffect, useState } from 'react';
import './Available.css'
import SingleProduct from '../SingleProduct/SingleProduct';

const Available = ({handleSelectedPlayer}) => {
    const[available,setAvailable] = useState([]);
    useEffect (()=>{
        fetch("./fake.json")
        .then(res => res.json())
    .then(data =>setAvailable(data))
    },[])
    return (
        <div>
            <h2 className='text-2xl'>Available Players</h2>
    
        <div className='card-container'>
           
            {available.map((p) => (
      <SingleProduct handleSelectedPlayer={handleSelectedPlayer} key={p.id} player={p} />
    ))}
            
        </div>
         </div>
    );
};

export default Available;