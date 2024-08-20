import React, { useState } from 'react'
import "./Discover.css"
import car from '../../assets/Pagani-Utopia-Roadster-Home-1440x810-1.png'
import { useGSAP} from '@gsap/react'
import gsap from 'gsap'
import logo from '../../assets/Picsart_24-08-20_12-46-12-172.png'
import utopia from '../../assets/Utopia-Roadster-WEB-Logo-1.png'
import pagani from '../../assets/menu-logo.png'
import { Link } from 'react-router-dom'
const Discover = () => {

    const [modal,setmodal]=useState(false)
     useGSAP(()=>{

        let tl=gsap.timeline()
        gsap.from('.logo', { y:-40, opacity: 0, duration: 0.5,},)
        gsap.from('.logo-and-menu-main',{y:-100, opacity:0, duration:0.8},)
        gsap.from('.para3',{y:40,opacity:0,duration:0.5},)
        tl.from ('.home-section',{backgroundColor:"#000",opacity:0.2,duration:1},)
        tl.from('.content-image-div', {backgroundColor:"#000", backgroundSize:100, opacity: 1, duration: 3,}, 0.5)
        tl.from('.utopia-roadstar',{opacity:0,duration:2},1)
        tl.from('.para5',{opacity:0,duration:2},1)
     })

     const Navmenu=()=>{
         return<>
            <div className='menu-bar-div'>
                     <div className='d-flex justify-content-end me-2 mt-2'>
                     <i onClick={(()=>setmodal(false))} className="fa-solid fa-x text-light"></i>
                     
                     </div>
                     <div className=' menu-bar-contains d-flex justify-content-center align-items-center flex-column'>
                         <div className='menu-contain'>
                        <a>HISTORY</a>
</div>
 <div className='menu-contain'>
                        <a>HYPERCARS</a>
                        </div>  
                        <div className='menu-contain'>             
                        <a>DEALERS</a>
                        </div>  
                        <div className='menu-contain'>                   
                        <a>ARTE IN PISTA</a>
                        </div>
                        <div className='menu-contain'>   
                        <a>PAGANI OFFICINA</a>
</div>
<div className='menu-contain'>   
                        <a>VISIT US</a>
                        </div>
                        <div className='menu-contain'>   
                        <a>CONTACT</a>
</div>

<div className='menu-contain'>   
                        <a>JOB AND STAGE OPPORTUNITIES</a>
                        </div>
                        <div className='menu-contain'>   
                        <a>PRESS ROOM</a>
        </div>
        <div className='menu-contain'>   
                        <a>CALENDARIO PAGANI</a>
                        </div>
                        <div className='menu-contain'>   
                        <a>PAGANI STORE</a>
                        </div>
                        <div className='menu-contain'>   
                        <a>LEGAL & COMPLIANCE</a>
                        </div>
                     </div>
                     <div className='pagani-logo-div d-flex justify-content-center mt-3'>
                        <img src={pagani} alt='logo'></img>
                     </div>
                     <div className='d-flex justify-content-around text-light'>
                        <div className='left-div'>
                            <p>ITALIANO</p>
                        </div>
                       
                        <div className='right-div'>
                            <p>ENGLISH</p>
                        </div>
                     </div>
                 
                     </div>
         </>
     }
  return (
    <>
      <section className='home-section'>
        <div className='content-image-div'>
            {/* <img src={car} className='car-img' alt='landing-page-image'></img> */}
            <div className='logo-and-menu-main d-flex justify-content-between'>
                <div className='logo-div'>
                    <img src={logo} className='logo' alt='logo'></img>
                </div>
                <div className='menu-bar-main'>
                    <div onClick={(()=>setmodal(true))} className='menu-bar'>
                    <i className="fa-solid fa-bars "></i>
                    </div>
                </div>
                
            </div>
            <div className='heading-main2 d-flex justify-content-center'>
                    <div className='text-light'>
                        <h1 className='text-center utopia-roadstar'>Utopia Roadster</h1>
                    </div>
                </div>


                <div className='d-flex'>
                <div className='div-left'>

                </div>
                <div className='heading-3 text-light'>
                    <p className='text-center para5'>The Utopia Roadster represents the pinnacle of a continuous quest that merges sophisticated technology with timeless design.

Lightweight, dynamic, and high-performing, it continues the legacy of the Coupé version while introducing distinctive elements.

Featuring a seamlessly integrated hard-top, it offers the flexibility of an open or closed driving experience, while maintaining the same weight as its counterpart.

This vehicle celebrates the timeless allure of mechanical purity, from the Pagani V12 engine, devoid of hybrid support, to avant-garde design elements such as the gearbox and pedal system, where every mechanism is visible and meticulously crafted.

It embodies Pagani’s most advanced technology, resulting from sophisticated aerodynamic studies and the integration of over forty composite material formulas.

It is the first car to bring innovative technologies to the road, including the Pirelli Cyber™ Tyre sensor system, which allows the tires to talk to the vehicle improving its safety.

Each of the 130 Utopia Roadsters is unique, thanks to the extensive range of available customizations, allowing each Hypercar to tell the unique story of its owner.</p>
                    
                    
                </div>
                </div>
                {modal && <Navmenu/>}
                
                <div id="circle-div1" className='circle-div'></div>
                <p  className='text-secondary para3'>2024 Pagani S.P.A -rights reserved -PIVA 02054560368 - credits</p>

               
        </div>

      </section>

    </>
  )}
  export default Discover