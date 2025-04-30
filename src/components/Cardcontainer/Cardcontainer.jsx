import Available from '../Available/Available';
import Selected from '../Selected/Selected';
import './cardcontainer.css'

const cardcontainer = ({isActive,handleIsActiveState}) => {
    return (
        <div>
        <div className='flex justify-between p-4 m-10 font-bold text-xl'>
            <h2>Available Players</h2>
            <div className=''>
        <button onClick={() => handleIsActiveState("Available")}className={`${isActive.Available?" btn active":"btn "}`}>Available</button>
        <button onClick={() =>handleIsActiveState("Selected")} className={`${isActive.Available?"btn ":" active btn "}`}>Selected(0)</button>
            </div>
            </div>
            {isActive.Available ? <Available></Available>:
       
       <Selected></Selected>}
           
        </div>
    );
};

export default cardcontainer;