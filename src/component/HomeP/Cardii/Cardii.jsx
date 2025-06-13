import React from 'react'
import carI from './carI.module.css'
import img from  '../../../Assets/harry-shelton-pPxhM0CRzl4-unsplash.jpg'
import imgi from  '../../../Assets/shayan-hefzi-u01ya3giO0Q-unsplash.jpg'
import imgii from  '../../../Assets/drew-beamer-1TUK-3oEJ1w-unsplash.jpg'
const cardii = () => {
  return (
    <div className={carI.carI}>
      <div className={carI.container}>
        <div className={carI.content}>
        <div className={carI.head}>
          <h3><strong>Global Branch</strong></h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda reiciendis consectetur 
            dolore praesentium libero optio possimus sapiente nesciunt, animi debitis labore culpa a 
            .</p>
        </div>
        <div className={carI.flex}>
          <div className={carI.card}>
            <img src={img} alt="" />
            <div className={carI.seci}>
            <h4><b>Mobile branch</b></h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               Amet eveniet doloremque laudantium laborum sed dolorum.</p>
            </div>
          </div>
          <div className={carI.card}>
            <img src={imgi} alt="" />
            <div className={carI.seci}>
            <h4><b>Loam Branch</b></h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               Amet eveniet doloremque laudantium laborum sed dolorum.</p>
            </div>
          </div>
          <div className={carI.card}>
            <img src={imgii} alt="" />
            <div className={carI.seci}>
            <h4><b>ATM Branch</b></h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
               Amet eveniet doloremque laudantium laborum sed dolorum.</p>
            </div>
          </div>
         
         

        </div>
        </div>
      </div>
    </div>
  )
}

export default cardii
