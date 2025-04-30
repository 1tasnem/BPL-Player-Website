import Available from '../Available/Available';
import Selected from '../Selected/Selected';
import './cardcontainer.css'

const cardcontainer = ({isActive,handleIsActiveState,handleSelectedPlayer,selectedPlayer}) => {
    return (
        <div>
        <div className='flex justify-between p-4 m-10 font-bold text-xl'>
        {isActive.Available ? <Available handleSelectedPlayer={handleSelectedPlayer}></Available>:
       
       <Selected selectedPlayer={selectedPlayer}></Selected>}
           
            <div className=''>
        <button onClick={() => {handleIsActiveState("Available")}}
            className={`${isActive.Available?" btn active":"btn "}`}>Available</button>
        <button onClick={() =>handleIsActiveState("Selected")} className={`${isActive.Available?"btn ":" active btn "}`}>Selected({selectedPlayer.length})</button>
            </div>
            </div>
            
           
        </div>
    );
};

export default cardcontainer;