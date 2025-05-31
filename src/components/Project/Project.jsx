import './project.css'


import dashbord from "../../assets/projects/dashbord.jpg"
import weather from "../../assets/projects/weather.png"
import noxia from "../../assets/projects/noxia.png"
import todo from "../../assets/projects/to-do.png"
import nexcent from "../../assets/projects/nexcent.png"
import fudoResturant from "../../assets/projects/Fudo-resturant.png"
import animation from "../../assets/projects/animation.png"
import dreamHouse from "../../assets/projects/Dream-house.png"
import ecommerce from '../../assets/projects/e-commerce.png'

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
   

        console.dir(project)
  return (
  
    <div className='project'>

      <h1><u>Here you see my some Projects</u></h1>

         {
          project.map((data,index)=>(

        <div className='main' key={index}>

            <div className="slide1">
               <img src={data.photo} alt="project img" />
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
