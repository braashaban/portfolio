import './About.css'
import braacv from './braa.pdf'
import img1 from "../../assets/imgs/herr1.png"
import { easeOut, motion } from "framer-motion";
import { useContext } from 'react';
import { themeContext } from '../../Context';

const About = () => {
      /* for dark mode */
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
     /* About */
        <div className='mt-10'>
            {/* titleeee */}
            <h1 className="section-title-01 text-center " style={{ color: darkMode ? "white" : "" }}>About Me</h1>
            <h2 className="section-title-02 text-center mb-0" style={{ color: darkMode ? "white" : "" }}>About Me</h2>
            <div className='About' id='works'>
                             
         {/* right side */}
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: easeOut, delay: 0.4 }}
                    className="work-left">
                    <div className="awesome">
                        <span style={{ color: darkMode ? "white" : "" }}>
                        I am Braa Shaban
                        </span>
                        <span className='mt-2'>Front end Developer</span>
                        <p className='mt-2 mb-2 w-[500px]' style={{ color: darkMode ? "white" : "" }}>
                   I graduated from Computer Engineering and Automatic Control , Interested in the field of Programming, especially Web Development, I aspire to become one of the best programmers in the world, 
                        I always strive to move forward and gain new experiences.
                        </p>
                        <a href={braacv} download>
                            <button className="button s-button">Download CV</button>
                        </a>
                        <div className="blur s-blur1"
                            style={{ background: "#ABF1FF94" }} ></div>
                    </div>

                </motion.div>
                
         {/* right side */}
        
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: easeOut, delay: 0.4 }}
                    className="img-work">
                    <img src={img1} alt="" />
                   
                </motion.div>
              
            </div>
        </div>
    )
}

export default About 