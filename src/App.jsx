import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Home from './components/Home/Home'
import Layout from './Layout'
// import About from './components/About/About'
// import Project from './components/Project/Project'
import MyStory from './components/My Blogs/MyStory'
import CustomCursor from './components/cursor effect/CustomCursor'
import Resume from './components/Resume'
import { lazy, Suspense } from 'react'
import Project from './components/Project/Project'
import About from './components/About/About'

const about = lazy(()=> import('./components/About/About'))
const project = lazy(() => import('./components/Project/Project'))

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
            <Suspense fallback={<div>loading...</div>}>
              <Project />
            </Suspense>} />
          <Route path='mystory' element={<MyStory />} />
          <Route path='resume' element={<Resume />} />

        </Route>
      </Routes>
    </>

  )
}

export default App
