import Logo from './Logo';
import { CiFacebook, CiInstagram, CiYoutube } from 'react-icons/ci';

function Footer() {
  return (
    <>
      <div className=' bottom-0'>
        {/* First Section */}
        <div className='bg-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 px-10 py-10'>
          <Logo />
          <ul className='flex flex-col items-center justify-around gap-4 text-xs cursor-pointer'>
            <li className='italic text-lg font-semibold text-sky-400'>Info</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <ul className='flex flex-col items-center justify-around gap-4 text-xs'>
            <li className='italic text-lg font-semibold text-sky-400'>
              Contact
            </li>
            <li>Customer Service:</li>
            <li>123-456-7890</li>
            <li className='flex items-center gap-2 cursor-pointer'>
              <CiFacebook />
              <CiInstagram />
              <CiYoutube />
            </li>
          </ul>
        </div>
        <div className='h-12 text-white font-semibold bg-sky-400 flex items-center justify-center'>
          © 2023 By LaptopLane
        </div>
      </div>
    </>
  );
}

export default Footer;
