import logo from "../assets/VJD.png"
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-8">
        <div className=" flex flex-shrink-0 items-center">
            <img className="w-20"src={logo} alt="logo" />
        </div>
        <div className="m-8 flex item-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/vinard-james-damasco" target="_blank"><FaLinkedin /></a>
            <a href="https://www.instagram.com/dvinardjames/" target="_blank"><FaInstagram/></a>
            <FaSquareXTwitter/>
            <a href="https://github.com/vjamespd" target="_blank"><FaGithub/></a>
        </div>
    </nav>
    
  )
};

export default NavBar;
