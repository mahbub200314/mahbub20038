import {  Route, Routes } from 'react-router'
import './App.css'
import { lazy, Suspense } from 'react'
import Home from './components/Home/Home'
import Layout from './Layout'
import CustomCursor from './components/cursor effect/CustomCursor'
import Resume from './components/Resume'
import Login from '../adminPanel/Login'
import ControlPanel from '../adminPanel/ControlPanel'

const About = lazy(()=> import('./components/About/About'))
const Project = lazy(() => import('./components/Project/Project'))
const MyStory = lazy(()=> import('./components/MyBlogs/MyStory'))
const Reviews = lazy(()=> import('./components/review/Reviews'))
const MyStoryDetails = lazy(()=> import('./components/MyBlogs/MyStoryDetails'))
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

          <Route path='story/:id' element={
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
