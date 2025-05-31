import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home/Home'
import Layout from './Layout'
import About from './components/About/About'
import Project from './components/Project/Project'
import MyStory from './components/My Blogs/MyStory'
import CustomCursor from './components/cursor effect/CustomCursor'


function App() {


  return (
    <>
    <CustomCursor></CustomCursor>

     <Routes>
       <Route path='/' element={<Layout/>} >

         <Route index   element={<Home/>}/>
         <Route path='about' element={<About/>}/>
         <Route path='project' element={<Project></Project>}/>
         <Route path='mystory' element={<MyStory/>}/>
   
   
       </Route>
     </Routes>
    </>
  
  )
}

export default App
