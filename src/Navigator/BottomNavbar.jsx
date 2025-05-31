import './navigator.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faAddressCard,faBriefcase,faUserTie} from '@fortawesome/free-solid-svg-icons'
import { Link, useLocation } from 'react-router';
const BottomNavbar = () => {

  const location = useLocation();
  console.dir(location)
  const currentpath = location.pathname;
  return (
    <div className='navigation'>
     <nav>
      
      <li className={currentpath === '/'? "active":""}><Link to='/'>        <FontAwesomeIcon className='icon' icon={faHouseUser} /> <span>Home</span></Link></li>
      <li className={currentpath === '/about'? "active":""}><Link to="/about">   <FontAwesomeIcon className='icon' icon={faAddressCard} /><span>About</span></Link></li>
      <li className={currentpath === '/project'? "active":""}><Link to="/project"> <FontAwesomeIcon className='icon' icon={faBriefcase} /><span>Projects</span></Link></li>
      <li className={currentpath === '/mystory'? "active":""}><Link to="/mystory"> <FontAwesomeIcon className='icon' icon={faUserTie} /><span>Story</span></Link></li>
      
     </nav>
    </div>
  )
}

export default BottomNavbar
