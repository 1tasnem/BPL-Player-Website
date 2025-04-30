import { useEffect, useState } from 'react';
import './Available.css'
import SingleProduct from '../SingleProduct/SingleProduct';

const Available = () => {
    const[available,setAvailable] = useState([]);
    useEffect (()=>{
        fetch("./fake.json")
        .then(res => res.json())
    .then(data =>setAvailable(data))
    },[])
    return (
        <div className='card-container'>
            
            {available.map((p) => (
      <SingleProduct key={p.id} player={p} />
    ))}
            
        </div>
    );
};

export default Available;