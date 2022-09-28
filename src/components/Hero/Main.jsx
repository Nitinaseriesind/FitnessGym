import React from 'react'
import Header from '../Header/Header'
import './Main.css'
import Heart from "../../assets/heart.png"
import main_image from '../../assets/hero_image.png'
import main_img_back from '../../assets/hero_image_back.png'
import Calories from '../../assets/calories.png'
import NumberCounter from 'number-counter'
import {motion} from 'framer-motion'

const Main = () => {
  const transition ={type:'spring', duration :3}
  const mobile = window.innerWidth<=768 ? true:false;
  return (
    <div className="Main" id='home'>
     <div className="blur main-blur"></div>
         <div className="left">
         <Header/>
         {/* the best line div */}
         <div className="the-best">
           <motion.div
           initial ={{left:mobile? '162px':'238px'}}
           whileInView={{left: '8px'}}
           transition={{...transition ,type:'tween' }}>
         </motion.div>
         <span>The Best Fitness club & gym in Town</span>
         </div>
        
        {/*Main Heading */}
        <div className='main-text'>
        <div><span className='stroke-text'>Shape 
          </span>{"  "}
          <span>  Your</span>
          </div>
          <span> Ideal Body</span>
          <span className='mainText'>In here we will help you to shape and build your ideal body <br/>
           and live up your life to fulliest </span>
         </div>
        {/* {figures} */}

        <div className="figures">
          <div>
           <span>
             <NumberCounter end={140} start={100} delay="4" preFix="+" />
           </span>
           <span>expert coachs
           </span>
          </div>
          <div>
           <span>
             <NumberCounter end={978} start={800} delay="4" preFix="+" />
           </span>
           <span>member joined</span>
          </div>
          <div>
           <span>
             <NumberCounter end={50} start={0} delay="4" preFix="+" />
           </span>
           <span>Meditational program </span></div>
        
</div>
        {/* {main-buttons} */}

        <div className="main-btn">
          <button className="btn">
          Get Started 
          </button>
          <button className="btn">
          Learn More 
          </button>
        
        </div>
        </div>

        {/* {Right side content} */}
        
        <div className="right">
          <button className='btn'>Join now </button> 

               <motion.div
               initial ={{right: '-1rem'}}
               whileInView={{right : '4rem'}}
               transition={transition}
               className="heart-rate" >
                <img src= {Heart} alt="" />
                <span>Heart Rate </span>
                <span>116 bpm</span>
                </motion.div>
              


          {/* {main image } */}
          <img src={main_image} alt=""  className='main_image'/>
          <motion.img 
               initial ={{right: '11rem'}}
               whileInView={{right: '20rem'}}
               transition={transition }
               src={main_img_back} alt="" className='main_img_back'/>
               

          {/* calories */}
          <motion.div
             initial ={{right: '37rem'}}
               whileInView={{right: '28rem'}}
               transition={transition }
               className="calories">
            <img src={Calories} alt="" />
            <div>
              <span><b>Calories Burned</b></span>
              <span>220 kcal</span>
            </div>
             </motion.div>



          </div>
    </div>
  )
}

export default Main 