import './project.css'
 
import Animation3 from '../animation/Animation3';

import { FaPlus } from "react-icons/fa6";

import dashbord from "../../assets/projects/dashbord.jpg"
import weather from "../../assets/projects/weather.png"
import noxia from "../../assets/projects/noxia.png"
import todo from "../../assets/projects/to-do.png"
import nexcent from "../../assets/projects/nexcent.png"
import fudoResturant from "../../assets/projects/Fudo-resturant.png"
import animation from "../../assets/projects/animation.png"
import dreamHouse from "../../assets/projects/Dream-house.png"
import ecommerce from '../../assets/projects/e-commerce.png'
import { useEffect, useState } from 'react'
import { addDoc, onSnapshot } from 'firebase/firestore'
import { collection } from 'firebase/firestore'
import { db } from '../../firebase'


const Project = () => {
      const project=[
        
        {
          name : "SHOP.CO",
          tools : "React, tailwind , firebase",
          photo : ecommerce,
          projectlink: "https://shop-co-e-commerce-wheat.vercel.app/",
          describe : " SHOP.CO is dynamic user data and user secure e-commerce website. "
        },
        
        {
          name:"Student Dashbord",
          tools:"React, Tailwind,Firebase",
          photo: dashbord,
          projectlink: "https://student-dashbord-omega.vercel.app",
          describe:"Student dashbord is demo project for a dashbord. I specially focus on clean UI and sign-up and login flow"

        },
        {
          name:"Weather App",
          tools:"React, Tailwind",
          photo: weather,
          projectlink: "https://weather-app-eight-plum-46.vercel.app",
          describe:"This project, I specially focus on API using, and react useEffect hook"
          
        },
        {
          name:"Noxia",
          tools:"Java-script, SASS",
          photo: noxia,
          projectlink: "https://noxia-agency.vercel.app",
          describe:"This project i focused some common css animation to do"
          
        },
        {
          name:"To-Do",
          tools:"React, Tailwind",
          photo:todo,
          projectlink: "https://to-do-app-alpha-peach.vercel.app",
          describe:"This is my first react project"
          
        },
        {
          name:"Nexcent",
          tools:"Java-script, Tailwind",
          photo: nexcent,
          projectlink: "https://nexcent-website-five.vercel.app",
          describe:"This project I learn how to do vertical page animation on website"
          
        },
        {
          name:"Fudo Resturant",
          tools:"Java-script, CSS",
          photo: fudoResturant,
          projectlink: "https://mahbub200314.github.io/Fudo-resturant/",
          describe:"This project for a simple resturan website projetct"
          
        },
        {
          name:"Hover Animation",
          tools:"CSS ",
          photo: animation,
          projectlink: "https://mahbub200314.github.io/css-fantastic-hover-animation-/",
          describe:"This a  hover amazing fun project . This project i do for mind enjoying"
          
        },
        {
          name:"Dream House",
          tools:"HTML, Bootstrap",
          photo: dreamHouse,
          projectlink: "https://mahbub200314.github.io/Dream-house/",
          describe:"This focused for e-comerce house website. This projet i focuesd on my Bootstrap"
          
        }

      ]
   

      // upload option create now 11.6.2025.....................

        const [showForm , setShowForm] = useState(false)
        const [download , setDownload] = useState([])
        const [projects , setProjects] =useState({
               
          name :'',
          tools :'',
          photo : '',
          projectlink : '',
          describe :''
          
        })

//upload project .......................

        const handleChange = (e) =>{
              setProjects({...projects, [e.target.name]: e.target.value})
        };

        const formSubmit = async (e)=> {
          e.preventDefault()
          try{
            const docRef = await addDoc(collection(db, 'projects'), projects);
            alert('project uploaded succusfully');
            setProjects({
           name :'',
          tools :'',
          photo : '',
          projectlink : '',
          describe :''
            })
            setShowForm(false)
          }catch(e){
            console.error('error here : ', e);
            alert('failed upload project')
          }
          
        }
// ui show project to firebase store...............
useEffect(()=>{
  const unsub = onSnapshot(collection(db, 'projects'), 
(snapshot)=>{const list = snapshot.docs.map(doc => ({id: doc.id, ...doc.data() }))
  setDownload(list)

});
return ()=> unsub()
},[])

  return (
  
    <div className='project'>
       
       <div className="animation3">
        <Animation3 className='animation3rd'></Animation3>
       </div>
      <h1><u>Here you see my some Projects</u></h1>


      <button className='uploadButton'

       onClick={ ()=>{

        const adminPassword = prompt('Enter admin code : ');
        if( adminPassword === '81434MR'){
          setShowForm(true)
        }else{
          alert('Your code is wrong')
          setShowForm(false)
        }


       }
      
      
      }>
        {showForm ?   ' Close Upload Form' : <><FaPlus className='uploadIcon'/> Uplad Project</>}</button>
      
     {
  showForm && (
    <div className="modalOverlay">
      <div className="modalContent">
        <button className="closeBtn" onClick={() => setShowForm(false)}>×</button>
        <form onSubmit={formSubmit}>
          <input type="text" placeholder='Project Name' name='name' value={projects.name} onChange={handleChange} required />
          <input type="text" placeholder='Project Tools' name='tools' value={projects.tools} onChange={handleChange} required />
          <input type="text" placeholder='Project photo' name='photo' value={projects.photo} onChange={handleChange} required />
          <input type="text" placeholder='Project Project link' name='projectlink' value={projects.projectlink} onChange={handleChange} required />
          <input type="text" placeholder='Project describe' name='describe' value={projects.describe} onChange={handleChange} required />
          <button type='submit'> Submit Project</button>
        </form>
      </div>
    </div>
  )
}





{
          download.map((data,index)=>(

        <div className='main' key={index}>
        
            <div className="slide1">
               <img src={data.photo} loading='lazy' alt="project img" />
            </div>
            {/* slide1.............................. */}


            <div className="slide2">
              <h2>{data.name}</h2>
              <p>{data.describe}</p>
              <b>{data.tools}</b>
              <div className='link'>
                <a href={data.projectlink} target='_blank'>Link</a>
                <a className='mr-2' href="https://github.com/mahbub200314" target='_blank'>GitHub</a>
              </div>
            </div> 
            {/* slide.............................. */}
            
        </div>

          ))
         }













{/* {/................................................} */}

         {
          project.map((data,index)=>(

        <div className='main' key={index}>

            <div className="slide1">
               <img src={data.photo} loading='lazy' alt="project img" />
            </div>
            {/* slide1.............................. */}


            <div className="slide2">
              <h2>{data.name}</h2>
              <p>{data.describe}</p>
              <b>{data.tools}</b>
              <div className='link'>
                <a href={data.projectlink} target='_blank'>Link</a>
                <a className='mr-2' href="https://github.com/mahbub200314" target='_blank'>GitHub</a>
              </div>
            </div> 
            {/* slide.............................. */}
            
        </div>

          ))
         }


    </div>
  )
}

export default Project
