import "./hero.scss"
import {motion} from "framer-motion"

const textVariants={
  initial:{
    x:-500,
    opacity:0
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1
    }
  },
  scrollButton:{
    opacity:0,
    y:10,
    transition:{
      duration:2,
      repeat:Infinity
    }
  }
}
const Hero = () => {
  return (
    <div className="hero">
     <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate" >
            <motion.h2 variants={textVariants}>AVIRAL CHAUHAN</motion.h2>
            <motion.h1 variants={textVariants}>FrontEnd Developer</motion.h1>
            <motion.div className="buttons" variants={textVariants}>
              <motion.button variants={textVariants}><a href="./aviral_chauhan.pdf" download>Download resume</a></motion.button>
              <motion.button variants={textVariants}><a href="mailto: aviralchauhan018@gmail.com">Send email</a></motion.button>
            </motion.div>
            <motion.img animate="scrollButton" src="./scroll.png" variants={textVariants}/>
        </motion.div>
      </div>
      
      <div className="imageContainer">
        <img src="hero1.png"/>
      </div>
    </div>
  )
}

export default Hero
