import logo from '../assets/kevinRushLogo.png'
import {FaLinkedin} from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const NavBar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center mx-2 w-10'>
            <img src={logo} alt='logo'/>
        </div>
        <div className='flex m-8 items-center justify-center gap-4 text-2xl'>
            <FaGithub />
            <FaLinkedin />
            <FaInstagram />
        </div>
    </nav>
  )
}

export default NavBar