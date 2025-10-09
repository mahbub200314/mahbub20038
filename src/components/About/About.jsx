import './about.css'
import myimg from '../../assets/myphoto/myphoto3.png'
import Animation2 from '../animation/Animation2'
const About = () => {
  return (
    <div className='about'>

      <div className='about-me'>
        <div className="myself">

          <div className="photo">
            {/* <div className="animation"></div> */}
            <Animation2 />
            {/* <img src={myimg} alt="" /> */}
          </div>


          <address>
            <ul>
              <li><u>Student : </u> <span> philosophy</span></li>
              <li><u>Nationality : </u> <span>Bangladesh</span></li>
              <li> <u>District: </u> <span> Feni</span></li>
              <li><u>Date fo birth : </u> <span> 14/8/2003</span></li>
              <li><u>Mobile : </u> <span> 01887239062</span></li>

            </ul>
          </address>

        </div>
        {/* photo................... */}



        <div className="describe">
          <h1>Hi, I am Mahbubur Rahman.</h1>
          <h2>A passionate and self-taught Front-end web developer.</h2>

          <p>I specialize in React, Tailwind CSS, Firebase, and SASS. I'm also skilled in using
            Git, GitHub, and Figma to build responsive, real-time web apps with clean UI and smooth UX. Always
            eager to learn and build something impactful.</p>


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

          <div className='span'>
            <b>Next JS</b>
            <p>I am now still learning Next JS for increasing  my front-end web development experience and knowledge</p>
          </div>
          {/* <hr /> */}
          <div className='span'>
            <b>JavaScript</b>
            <p>
              I have solid experience with JavaScript, which I use to build dynamic and interactive web applications. I’m confident in working with core concepts like DOM manipulation, event handling, async operations (Promises, async/await), and API integration.

              Modern ES6+ features like arrow functions, destructuring, template literals, and array methods (map, filter, reduce) are part of my regular workflow. I also have a clear understanding of deeper JavaScript concepts such as closures, callbacks, scope, and prototypes, which help me write clean, modular, and efficient code.

              I apply JavaScript effectively in React projects for smooth user interactions, and I’m continuously expanding my knowledge through real-world projects and hands-on development.

            </p>
          </div>
          {/* <hr /> */}
          <div className='span'>
            <b>React</b>
            <p>I am proficient in React JS, a popular JavaScript library for building user interfaces. Using
              React’s component-based architecture, I can build modular, reusable, and scalable web applications.
              I have experience with state management, props, React Hooks (such as useState, useEffect),
              and React Router. I also integrate React with Tailwind CSS to create modern and responsive UI
              designs.
            </p>
          </div>

          {/* <hr /> */}
          <div className='span'>
            <b>CSS, Tailwind CSS, and SASS.</b>
            <p>✅ CSS: I can create custom layouts, animations, and responsive designs using vanilla CSS.</p>
            <p>✅ Tailwind CSS: With the utility-first approach of Tailwind CSS, I can rapidly build consistent and responsive user interfaces, especially within React projects.</p>
            <p>✅ SASS (SCSS): I use SASS to write cleaner, modular, and maintainable code with features like nesting, variables, mixins, and functions.</p>
          </div>
          {/* <hr /> */}
          <div className='span'>
            <b>Firebase</b>
            <p>I integrated Firebase Authentication into my web application to enable secure and real-time user login functionality. The system supports both Email/Password authentication and Google Sign-In, ensuring flexibility for users. I also implemented protected routes and real-time auth state monitoring to maintain a smooth and secure user experience. Proper error handling and session persistence were added to enhance reliability and usability.</p>
          </div>

        </div>
        {/* about-me end ........... */}
      </div>
      {/*       
       <div className='skills'>

        <button>HTML</button>
        <button>CSS</button>
        <button>Tailwind</button>
        <button>SASS</button>
        <button>Javascript</button>
        <button>React</button>
        <button>Redux</button>
        <button>Firebase</button>
        <button>Figma</button>
        <button>git</button>
        <button>GitHub</button>
       </div> */}

    </div>
  )
}

export default About
