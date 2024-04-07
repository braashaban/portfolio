import './works.css'
import braacv from './braa.pdf'
import img1 from "../../assets/imgs/herr1.png"
import {easeOut, motion } from "framer-motion";
import { useContext } from 'react';
import { themeContext } from '../../Context';

const Works = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
      
        <div className='works' id='works'>
            <motion.div
              initial={{opacity:0,y:-100}}
              animate={{opacity:1,y:0}}
             transition={{duration:1 ,ease:easeOut,delay:0.4}}
             className="work-left">
                <div className="awesome">
                    <span style={{ color: darkMode ? "white" : "" }}>
                        Works for All these
                    </span>
                    <span>Brands & Clients</span>
                    <p className='mt-2' style={{ color: darkMode ? "white" : "" }}>
                        Lorem ispum is simpley dummy text of printing of printing Lorem</p>
                    <p> ispum is simpley dummy text of printingLorem ispum is simpley dummy
                        text</p>
                    <p>y dummy text of printingLorem</p>
                    <p> ispum is simpley dummy text of printing</p>
                    <a href={braacv} download>
                   <button className="button s-button">Download CV</button>
                    </a>
                    <div
                        className="blur s-blur1"
                        style={{ background: "#ABF1FF94" }}
                    ></div>
                </div>

                {/* right side */}
            </motion.div>
            <motion.div
             initial={{opacity:0,y:-100}}
             animate={{opacity:1,y:0}}
            transition={{duration:1 ,ease:easeOut,delay:0.4}}
             className="img-work">
         <img src={img1} alt="" />
            </motion.div>

        </div>

    )
}

export default Works