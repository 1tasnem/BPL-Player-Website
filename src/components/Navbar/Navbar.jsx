import './Navbar.css'
import logo from '../assets/logo.png'
import shadow from '../assets/bg-shadow.png'
import banner from '../assets/banner-main.png'
import { toast } from 'react-toastify';


const Navbar = ({handlecoins,coins}) => {



    const handleClick = () => {
        // Your logic here (e.g., API call, state change, etc.)
    
        toast.success("Account added successfully!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          
        });
      };
    
   // console.log(coins)
    return (
        <div className=''>
        <div className='flex justify-between w-11/12 mx-10 p-4 m-4'>
            <div>
                <img src={logo} alt=""/>
            </div>
            <div className=''> 
                <ul className='flex gap-10 font items-center text-gray-600'>
                <li>Home</li>
                <li>Fixture</li>
                <li>Teams</li>
                <li>Schedules</li>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
                <button className='btn'>{coins} Coin <i class="fas fa-coins"></i> </button>
                </ul>
            </div>
        </div>
        <div className="main ">
        <img className="item" src = {shadow} alt=""/>
        <div class="content-card">
        <img src={banner} alt="Cricket Logo" className="logo" />
        <h1 class="title">Assemble Your Ultimate Dream 11 Cricket Team</h1>
    <p class="subtitle">Beyond Boundaries Beyond Limits</p>
    
    <button 
  onClick={() => {
    handleClick();
   
    handlecoins(); 
    // call your function
  }} 
  className="cta-button"
>
  Claim Free Credit
</button>

   </div>
        </div>
        </div>
    );
};

export default Navbar;