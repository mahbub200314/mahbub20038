import "./home.css"


import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoSass } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";

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

               <p className="mobile">Hi, I'm Mahbub — a passionate and self-taught Front-end Web Developer.
                 Let me know what kind of website you need — I’m fully prepared to deliver it with dedication, InshaAllah.
                 Feel free to communicate openly with me at any time.
            </p>
            <p className="tab">Hi, I'm Mahbub — a passionate and self-taught Front-end Web Developer.<br></br>
                 Let me know what kind of website you need — I’m fully prepared to deliver it with dedication, InshaAllah.<br />
                 Feel free to communicate openly with me at any time.
            </p>
            <div className="skills-icon">
                <RiTailwindCssFill className="reactIcon" />
                <RiNextjsLine className="reactIcon"/>
                <FaReact className="reactIcon" />
                <IoLogoFirebase className="reactIcon" />
                <BiLogoSass className="reactIcon" />
                <SiRedux className="reactIcon"/>
                 
            </div>
            <div className="button">
                <a href="https://wa.me/8801887239062" target="_blank">Get In Touch</a>
                <Link to='resume'> See Resume</Link>


            </div>
        </div>
    )
}

export default Home
