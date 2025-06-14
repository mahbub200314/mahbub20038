import "./navigator.css"

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faGithub ,faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';


const TopNavbar = () => {

  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("light-mode", isLight);
  }, [isLight]);

  const toggleTheme = () => {
    setIsLight(!isLight);
  };


  return (
    <div className='Top'>
      
     <div className="logo">
      {/* <img src={signature} alt="signature" /> */}
      <h1>MAHBUB</h1>
     </div>

     <ul>
      <li><a href="https://www.facebook.com/mahbub20038/" target="_blank"><FontAwesomeIcon className="topIcon" icon={faFacebook} /></a></li>
      <li><a href="https://www.linkedin.com/in/mahbub20038/" target="_blank"><FontAwesomeIcon className="topIcon" icon={faLinkedin} /></a></li>
      <li><a href="https://github.com/mahbub200314" target="_blank"><FontAwesomeIcon className="topIcon" icon={faGithub} /></a></li>
      <li><a href="https://wa.me/8801887239062" target="_blank"><FontAwesomeIcon className="topIcon" icon={faWhatsapp} /></a></li>
      <li><a href="https://www.instagram.com/mahbub20038/" target="_blank"><FontAwesomeIcon className="topIcon" icon={faInstagram} /></a></li>
     </ul>

       {/* Theme toggle button */}
      <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle Light/Dark Mode">
        <FontAwesomeIcon icon={isLight ? faMoon : faSun} />
      </button>
    </div>
  )
}

export default TopNavbar
