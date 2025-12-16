import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home/Home'
import Layout from './Layout'
import CustomCursor from './components/cursor effect/CustomCursor'
import Resume from './components/Resume'
import { lazy, Suspense } from 'react'
import Project from './components/Project/Project'
import About from './components/About/About'
import MyStory from './components/My Blogs/MyStory'
import Reviews from './components/review/Reviews'
import MyStoryDetails from './components/My Blogs/MyStoryDetails'
import Login from '../adminPanel/Login'
import ControlPanel from '../adminPanel/ControlPanel'

const about = lazy(()=> import('./components/About/About'))
const project = lazy(() => import('./components/Project/Project'))
const mystory = lazy(()=> import('./components/My Blogs/MyStory'))
function App() {


  return (
    <>
      <CustomCursor></CustomCursor>

      <Routes>
             
        <Route path='/' element={<Layout />} >

          <Route index element={<Home />} />

          <Route path='about' element={
            <Suspense fallback={<div>Loading...</div>}>
                <About/>
            </Suspense>} />

          <Route path='project' element={
            <Suspense fallback={<div>Loading...</div>}>
              <Project />
            </Suspense>} />

          <Route path='mystory' element={
            <Suspense fallback={<div>Loading..</div>}>
              <MyStory></MyStory>
            </Suspense>
          } />
          <Route path='review' element={
            <Suspense fallback={<div>Loading...</div>}>
              <Reviews></Reviews>
            </Suspense>
          }/>

          <Route path='/story/:id' element={
            <Suspense fallback={<div>Loading...</div>} >
               <MyStoryDetails/>
            </Suspense>
          } />

          <Route path='resume' element={<Resume />} />

        </Route>

              <Route path='login' element={<Login/>} />
              <Route path='/controlpanel' element={<ControlPanel></ControlPanel>}/>
      </Routes>
    </>

  )
}

export default App
