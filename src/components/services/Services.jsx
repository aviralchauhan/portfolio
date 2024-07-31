import "./services.scss";
import {motion,useInView} from "framer-motion";
import { useRef } from "react"

const variants={
    initial:{
        x:-500,
        y:100,
        opacity:0
    },
    animate:{
        x:0,
        y:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.5
        }
    }
}

const Services = () => {
  const ref=useRef();
  const isInView=useInView(ref,{margin:"-100px"}) 
  return (
    <motion.div className="services" variants={variants} initial="initial" ref={ref} animate={"animate"}>
      <motion.div className="textContainer">
        <p>Crafting Modern Web Experiences,<br/> One Pixel at a Time</p>
        <hr/>
      </motion.div>
      <motion.div className="titleContainer">
        <div className="title">
            <img src="./people.webp"/>
            <h1><b>About</b> Me.</h1>
        </div>
        <div className="title">
            <h1><b>Skills & Expertise</b>.</h1>
            <button>What I know?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer">
        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
            <h2>About me</h2>
            <p>I have a strong enthusiasm for coding and problem-solving, specializing in developing responsive web applications that deliver seamless user experiences. With a keen interest in technology and innovation, I am eager to immerse myself in its dynamic landscape. My passion extends beyond software development to areas like data analytics. Armed with my academic background and insatiable curiosity, I am excited to embark on new learning journeys and contribute to impactful projects..</p>
        </motion.div>
        <motion.div className="box skill-container" whileHover={{background:"lightgray",color:"black"}}>
            <h2>Skills and Expertise</h2>
            <div>
                    <div className="skill-category">
                    <h3>Languages</h3>
                    <div className="skills-list">
                        <span className="skill-box">C++</span>
                        <span className="skill-box">Python</span>
                        <span className="skill-box">Java</span>
                        <span className="skill-box">HTML</span>
                        <span className="skill-box">CSS</span>
                        <span className="skill-box">SCSS</span>
                        <span className="skill-box">JavaScript</span>
                        <span className="skill-box">Node.js</span>
                    </div>
                </div>
                <div className="skill-category">
                    <h3>Frameworks/Databases</h3>
                    <div className="skills-list">
                        <span className="skill-box">React.js</span>
                        <span className="skill-box">MongoDB</span>
                        <span className="skill-box">MySQL</span>
                        <span className="skill-box">Angular</span>
                    </div>
                </div>
                <div className="skill-category">
                    <h3>AI/ML</h3>
                    <div className="skills-list">
                        <span className="skill-box">Generative AI</span>
                        <span className="skill-box">LangChain</span>
                    </div>
                </div>
            </div>
        </motion.div>
        
      </motion.div>
    </motion.div>
  )
}

export default Services
