import { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate} from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const [showMenu,setShowMenu] = useState(false)
    const [token,setToken] = useState(true)
  return (
    <div className="flex items-center justify-between px-4 py-4 border-b border-gray-400 mb-8">
      {/* Logo - Top Left */}
      <img  onClick={()=>navigate('/#')} className="w-44 cursor-pointer" src={assets.logo} alt="not visible" />

      {/* Navigation Links - Top Center */}
      <ul className="flex items-center gap-8 font-medium">
        <NavLink to="/" className="relative py-1 group">
          HOME
          <hr className="absolute left-0 bottom-0 h-1 bg-primary w-3/5 m-auto group-hover:block hidden" />
        </NavLink>
        <NavLink to="/doctors" className="relative py-1 group">
          ALL DOCTORS
          <hr className="absolute left-0 bottom-0 h-1 bg-primary w-3/5 m-auto group-hover:block hidden" />
        </NavLink>
        <NavLink to="/about" className="relative py-1 group">
          ABOUT
          <hr className="absolute left-0 bottom-0 h-1 bg-primary w-3/5 m-auto group-hover:block hidden" />
        </NavLink>
        <NavLink to="/contact" className="relative py-1 group">
          CONTACT
          <hr className="absolute left-0 bottom-0 h-1 bg-primary w-3/5 m-auto group-hover:block hidden" />
        </NavLink>
      </ul>

      {
      token
      ?<div className='flex items-center gap-2 cursor-pointer group relative'>
        <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
        <img className='w-2.5'src={assets.dropdown_icon} alt="" />
        <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
          <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p- 4'>
          <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</ p>
            <p onClick={()=>navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</ p>
            <p onClick={()=>setToken(false)}  className='hover:text-black cursor-pointer'>Logout</ p>  
          </div>
        </div>
      </div>
      :<button onClick={()=>navigate('/login')}className="bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block">      
        Create Account
      </button>
      }      
    </div>
  );
};

export default Navbar;
