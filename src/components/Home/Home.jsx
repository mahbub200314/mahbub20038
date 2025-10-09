import "./home.css"

import avatar from "../../assets/myphoto/Avatar.png"
import resume from '../../assets/myphoto/Untitled document.pdf'
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoSass } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router";
import Animation from "../animation/Animation";



function Home() {
    return (
        <div className='home'>

            <div className="img">

                <Animation />
                {/* <img src={avatar} alt="" width={100}/> */}
            </div>

            <b>I do code and <br></br> make website <span>about it!</span></b>
            <p>Hi, I'm Mahbub — a passionate and self-taught Front-end Web Developer.<br></br>
             I specialize in React, efficient state management using Redux Toolkit (RTK), Tailwind CSS, Firebase, and SASS.<br></br>
             I'm also skilled in using Git, GitHub, and Figma to build<br></br> responsive, real-time web apps with clean UI and smooth UX. Always eager to learn <br></br> and build something impactful.
            </p>
            <div className="skills-icon">
                <RiTailwindCssFill className="reactIcon" />
                <FaReact className="reactIcon" />
                <IoLogoFirebase className="reactIcon" />
                <BiLogoSass className="reactIcon" />

            </div>
            <div className="button">
                <a href="https://wa.me/8801887239062" target="_blank">Get In Touch</a>
                <Link to='resume'> See Resume</Link>


            </div>
        </div>
    )
}

export default Home
