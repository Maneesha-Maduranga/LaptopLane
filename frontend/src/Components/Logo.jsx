import { Link } from 'react-router-dom';

import newLogo from '../assets/logo.png';
function Logo() {
  return (
    <Link to='/'>
      <div className='logo inline-flex'>
        <div>
          <img src={newLogo} alt='logo' className='w-24 md:w-32' />
        </div>
        <div className='inline-flex flex-col mx-2'>
          <div className='text-sky-400 italic text-2xl font-bold'>
            LaptopLane
          </div>
          <span className='bg-sky-400 text-white p-1'>Best Laptops</span>
        </div>
      </div>
    </Link>
  );
}

export default Logo;
