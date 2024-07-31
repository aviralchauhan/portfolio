import SideBar from "../sidebar/SideBar";
import "./navbar.scss";
import {motion} from "framer-motion";
const Navbar = () => {
  return (
    <div className="navbar">
      {/*sidebar*/}
      <SideBar />
      <div className="wrapper">
        <motion.span 
          initial={{opacity:0,scale:0.5}} 
          animate={{opacity:1,scale:1}} 
          transition={{duration:0.75}}>
            
            Aviral Chauhan
        </motion.span>
        <div className="social">
            <a href="#"><img src="./github.png"/></a> 
            <a href="#"><img src="./linkedin.png"/></a>
            <a href="#"><img src="./instagram.png"/></a>
            <a href="#" alt="Aviral"><img src="./letter-a.png" alt="Aviral Chauhan"/></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
