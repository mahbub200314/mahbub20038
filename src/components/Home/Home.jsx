import "./home.css" 

import avatar from "../../assets/avatar.png"

function Home() {
    return (
        <div className='home'>
            
          <div className="img"> <img src={avatar} alt="" width={100}/></div>
           <b>I do code and <br></br> make content <span>about it!</span></b>
           <p>Hi, I’m Mahbub — a passionate and self-taught Front-end web developer.<br></br> I specialize in React, 
            Tailwind CSS, Firebase, and SASS. I'm also skilled in using <br></br>Git, GitHub, and Figma to build responsive,
             real-time web apps with clean UI and smooth UX. Always<br></br> eager to learn and build something impactful.
             </p>

             <div className="button">
                <a href="https://wa.me/8801887239062">Get In Touch</a>
                <a  href="#">See Resume</a>
             </div>
        </div>
    )
}

export default Home
