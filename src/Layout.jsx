import './App.css'
import TopNavbar from './Navigator/TopNavbar'
import BottomNavbar from './Navigator/BottomNavbar'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div className='layout'>

     <div className="top pt-50px">
           <TopNavbar/>
     </div>
        
        <main>
          <Outlet/>
        </main>

        <div className="bottom pb-70px">
          <BottomNavbar/>
        </div>

    </div>
  )
}

export default Layout
