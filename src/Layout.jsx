import './App.css'
import TopNavbar from './Navigator/TopNavbar'
import BottomNavbar from './Navigator/BottomNavbar'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div className='layout'>

     <div className="top">
           <TopNavbar/>
     </div>
        
        <main>
          <Outlet/>
        </main>

        <div className="bottom">
          <BottomNavbar/>
        </div>

    </div>
  )
}

export default Layout
