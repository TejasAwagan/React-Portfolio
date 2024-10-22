// import logo from '../assets/logo.png'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      {/* <div className='flex flex-shrink-0 items-center mx-2 w-28'>
            <img className='rounded-md' src={logo} alt='logo'/>
        </div> */}
      <div className="flex m-8 items-center justify-center gap-4 text-2xl">
        <a href="https://github.com/TejasAwagan">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/tejas-awagan-ab9789218/">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/tejas_awagan?igsh=MXR1YTZkNjdrYmMzZA==">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
