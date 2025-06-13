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
                      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus ut totam facere dolorem aspernatur deserunt ab eius quasi impedit?</p>
                    </div>
                <div className={bill.flexi}>
                  <div className={bill.card}>
                    <img src={img} alt="" />
                    <h3>Team Lead</h3>
                    <h4>Olaseub Tolu</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex molestiae enim totam dolor quos cumque necessitatibus obcaecati ratione voluptates harum!</p>
                  </div>
                  <div className={bill.card}>
                    <img src={imgi} alt="" />
                    <h3>Senior Developer</h3>
                    <h4>Herry Blue</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex molestiae enim totam dolor quos cumque necessitatibus obcaecati ratione voluptates harum!</p>
                  </div>
                  <div className={bill.card}>
                    <img src={imgii} alt="" />
                    <h3>Developer</h3>
                    <h4>Amaar Salam</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex molestiae enim totam dolor quos cumque necessitatibus obcaecati ratione voluptates harum!</p>
                  </div>
                  <div className={bill.card}>
                    <img src={imgi} alt="" />
                    <h3>Developer</h3>
                    <h4>Herry Blue</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex molestiae enim totam dolor quos cumque necessitatibus obcaecati ratione voluptates harum!</p>
                  </div>
                   <div className={bill.card}>
                    <img src={img} alt="" />
                    <h3>Admin</h3>
                    <h4>Olaseub Tolu</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex molestiae enim totam dolor quos cumque necessitatibus obcaecati ratione voluptates harum!</p>
                  </div>
                 
                 </div>
            </div>
        </div>
    </div>
  )
}

export default Bill
