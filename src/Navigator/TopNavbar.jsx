import "./navigator.css"
import signature from '../assets/signature.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faGithub ,faWhatsapp} from '@fortawesome/free-brands-svg-icons';


const TopNavbar = () => {
  return (
    <div className='Top'>
      
     <div className="logo">
      <img src={signature} alt="signature" />
     </div>

     <ul>
      <li><a href="https://www.facebook.com/mahbub20038/"><FontAwesomeIcon className="topIcon" icon={faFacebook} /></a></li>
      <li><a href="https://www.linkedin.com/in/mahbub20038/"><FontAwesomeIcon className="topIcon" icon={faLinkedin} /></a></li>
      <li><a href="https://github.com/mahbub200314"><FontAwesomeIcon className="topIcon" icon={faGithub} /></a></li>
      <li><a href="https://wa.me/8801887239062"><FontAwesomeIcon className="topIcon" icon={faWhatsapp} /></a></li>
      <li><a href="https://www.instagram.com/mahbub20038/"><FontAwesomeIcon className="topIcon" icon={faInstagram} /></a></li>
     </ul>
    </div>
  )
}

export default TopNavbar
