import { useRef } from "react";
import "./projects.scss"
import {motion,useScroll,useSpring, useTransform} from "framer-motion";

const items=[
    {
        id:1,
        title:"Face Recognition Application",
        img:"https://cdn.pixabay.com/photo/2020/01/25/05/17/face-detection-4791810_1280.jpg",
        description:"Recognize and manipulate faces from Python or from the command line with the world’s simplest facerecognition library. Built using dlib’s state-of-the-art face recognition built with deep learning.The model has an accuracy of 99.38% on the Labeled Faces in the Wild benchmark.",
        link:""
    },
    {
        id:2,
        title:"Travel Advisor",
        img:"https://cdn.pixabay.com/photo/2019/01/24/20/07/map-3953229_1280.jpg",
        description:"Crafted a cutting-edge Travel Companion App integrated with Google Maps API and Geolocation services for seamless navigation.Users can easily find nearby attractions, restaurants, and hotels via intuitive searches, bolstered by Rapid APIs.",
        link:"https://aviralchauhan.github.io/travel_advisior/"
    },
    {
        id:3,
        title:"Weather Forecast",
        img:"https://mandimitchell.com/wp-content/uploads/2019/04/honda_forecast_week.jpg",
        description:"Developed a dynamic weather forecast application using React.js, providing real-time weather updates via OpenWeatherMap API.",
        link:"https://aviralchauhan.github.io/weather-application"
    },
    {
        id:4,
        title:"Video Calling Web Application",
        img:"https://www.mirrorfly.com/blog/wp-content/uploads/2022/06/20-Essential-FAQs-to-Know-Before-you-Build-a-Video-Chat-app-with-WebRTCs.webp",
        description:"Built a video calling application using HTML, CSS, JavaScript, WebRTC, and Agora.",
        link:"https://aviralchauhan.github.io/peer-chat/"
    },
]

const Single=({item})=>{
    const ref=useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"],
      });

    const y=useTransform(scrollYProgress,[0,1],[300,-300])
    return <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} />
                    </div>
                    <motion.div className="textContainer" style={{y:y}}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <button><a href={item.link}>Learn more.</a> </button>
                    </motion.div>
                </div>
            </div>
          </section>;
        }
const Projects=()=> {
    const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="projects" ref={ref}>

        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map((item)=>(
            <Single item={item} key={item.id}/>
        ))}
    </div>
  )
}


export default Projects;