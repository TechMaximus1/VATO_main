import React from 'react'
import bill from './bill.module.css'
import img from '../../../Assets/prince-akachi-LWkFHEGpleE-unsplash.jpg'
import imgi from '../../../Assets/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.jpg'
import imgii from '../../../Assets/jonas-kakaroto-mjRwhvqEC0U-unsplash.jpg'
const Bill = () => {
  return (
    <div className={bill.bill}>
        <div className={bill.container}>
            <div className={bill.content}>
            <div className={bill.head}>
                      <h3><strong>MEET OUR TEAM</strong></h3>
                      <p>Get to know the passionate professionals driving VATO Bank forward. Our team is committed to delivering exceptional service, 
                        innovative solutions, and a banking experience you can trust.</p>
                    </div>
                <div className={bill.flexi}>
                  <div className={bill.card}>
                    <img src={img} alt="" />
                    <h3>Victor Max</h3>
                    <h4>Team Lead</h4>
                    <p>Guiding the team with experience, vision, and a commitment to excellence. Focused on collaboration, innovation, and delivering results that matter.</p>
                  </div>
                  <div className={bill.card}>
                    <img src={imgi} alt="" />
                    <h3>Herry Blue</h3>
                    <h4>Senior Developer</h4>
                    <p>Building robust, scalable solutions with clean code and forward-thinking design. Passionate about innovation, performance, and mentoring the next generation of developers.</p>
                  </div>
                  <div className={bill.card}>
                    <img src={imgii} alt="" />
                    <h3>Amaar Salam</h3>
                    <h4>Developer</h4>
                    <p>Turning ideas into functional, efficient code. Dedicated to creating user-friendly solutions and continuously improving through collaboration and innovation.</p>
                  </div>
                  <div className={bill.card}>
                    <img src={imgi} alt="" />
                    <h3>Herry Blue</h3>
                    <h4>Developer</h4>
                    <p>Driven by problem-solving and clean code, focused on building reliable digital experiences that make an impact</p>
                  </div>
                   <div className={bill.card}>
                    <img src={img} alt="" />
                    <h3>Olaseub Tolu</h3>
                    <h4>Admin</h4>
                    <p>Ensuring smooth operations behind the scenes. Organized, reliable, and committed to keeping everything running efficiently.</p>
                  </div>
                 
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Bill
