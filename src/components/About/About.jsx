import './about.css'
import myimg from '../../assets/myphoto3.png'
const About = () => {
  return (
    <div className='about'>
     
     <div className='about-me'>
        <div className="myself">

           <div className="photo">
             <img src={myimg} alt="" />
         </div>
         
        <address>
          <ul>
            <li><u>Student : </u> <span> philosophy</span></li>
            <li><u>Natinaliy : </u> <span>Bangladesh</span></li>
            <li> <u>District: </u> <span> Feni</span></li>
            <li><u>Date fo birth : </u> <span> 14/8/2003</span></li>
            <li><u>Mobile : </u> <span> 01887239062</span></li>
          </ul>
        </address>

        </div>
      {/* photo................... */}

      <div className="describe">
           <h1>Hi, I am Mahbubr Rahman.</h1>
           <h2>A passionate and self-taught Front-end web developer.</h2>

           <p>I specialize in React, Tailwind CSS, Firebase, and SASS. I'm also skilled in using
            Git, GitHub, and Figma to build responsive, real-time web apps with clean UI and smooth UX. Always
            eager to learn and build something impactful.</p>

            <span>
              <b>React</b>
              <p>I am proficient in React JS, a popular JavaScript library for building user interfaces. Using 
              React’s component-based architecture, I can build modular, reusable, and scalable web applications.
               I have experience with state management, props, React Hooks (such as useState, useEffect),
                and React Router. I also integrate React with Tailwind CSS to create modern and responsive UI 
                designs.
            </p>
            </span>

            <span>
              <b>CSS, Tailwind CSS, and SASS.</b>
               <p>✅ CSS: I can create custom layouts, animations, and responsive designs using vanilla CSS.</p>
               <p>✅ Tailwind CSS: With the utility-first approach of Tailwind CSS, I can rapidly build consistent and responsive user interfaces, especially within React projects.</p>
               <p>✅ SASS (SCSS): I use SASS to write cleaner, modular, and maintainable code with features like nesting, variables, mixins, and functions.</p>
            </span>

      </div>
      {/* about-me end ........... */}
     </div>
      
       <div className='skills'>

        <button>HTML</button>
        <button>CSS</button>
        <button>Tailwind</button>
        <button>SASS</button>
        <button>Javascript</button>
        <button>React</button>
        <button>Firebase</button>
        <button>Figma</button>
        <button>git</button>
        <button>GitHub</button>
       </div>

    </div>
  )
}

export default About
