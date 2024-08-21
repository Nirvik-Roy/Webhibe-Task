import React, { useState } from 'react'
import "./Home.css"
import car from '../../assets/Pagani-Utopia-Roadster-Home-1440x810-1.png'
import { useGSAP} from '@gsap/react'
import gsap from 'gsap'
import logo from '../../assets/Picsart_24-08-20_12-46-12-172.png'
import utopia from '../../assets/Utopia-Roadster-WEB-Logo-1.png'
import pagani from '../../assets/menu-logo.png'
import { Link, NavLink } from 'react-router-dom'
import Loader from '../Loader/Loader'

const Home = () => {

    const [modal,setmodal]=useState(false)

    const [top,setop]=useState(0)
    const [bottom,setbottom]=useState(0)
    const [middle,setmiddle]=useState('')
    const [margin,setmargin]=useState(7)
     useGSAP(()=>{

        let tl=gsap.timeline()
        gsap.from('.logo', { y:-40, opacity: 0, duration: 0.5,},)
        gsap.from('.logo-and-menu-main',{y:-40, opacity:0, duration:0.5},)
        gsap.from('.para3',{y:40,opacity:0,duration:0.5},)
        tl.from ('.home-section',{backgroundColor:"#000",opacity:0.2,duration:1},)
        tl.from('.content-image-div', {backgroundColor:"#000", backgroundSize:100, opacity: 1, duration: 3,}, 0.5)

     })

  const setnav=()=>{
    setmiddle('none')
    setop(135)
    setbottom(-135)
    setmargin(0)
    setmodal(true)
  }
  const setnav1=()=>{
    setmiddle('block')
    setop(0)
    setbottom(0)
    setmargin(7)
    setmodal(false)
  }

     const Navmenu=()=>{
         return<>
            <div className='menu-bar-div'>
                     <div onClick={(()=>setnav1())} className='d-flex cross-menu-bar justify-content-end align-items-end flex-column me-2 mt-4'>
                     {/* <i onClick={(()=>setnav1())} className="fa-solid fa-x text-light"></i> */}
                     <div onClick={(()=>setnav1())} className='spinner top' style={{transform:'rotate(135deg)'}}></div>
                     <div onClick={(()=>setnav1())} className='spinner bottom' style={{transform:'rotate(-135deg)',margin:'0px'}}></div>
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
                        <img className='pb-2' src={pagani} alt='logo'></img>
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
                    <div onClick={(()=>setnav())} className='menu-bar d-flex'>
                    {/* <i className="fa-solid fa-bars "></i> */}
                    <div className='spinner top' style={{transform:`rotate(${top}deg)`,marginTop:'0px'}}></div>
                    <div className='spinner middle' style={{display:`${middle}`}}></div>
                    <div className='spinner bottom' style={{transform:`rotate(${bottom}deg)`, marginTop:`${margin}px` }}></div>
                    </div>
                </div>
                
            </div>
            <div className='heading-main d-flex justify-content-center'>
                    <div className='utopia-logo-div'>
                        <img className='utopia-logo'  src={utopia} alt='utopia-roadstar'></img>
                    </div>
                </div>
                <div className='heading-2 text-light'>
                    <p className='text-center para1'>ACT THREE, SCENE TWO: PAGANI UTOPIA </p>
                    <p className='text-center para1'>ROADSTER.</p>
                    <div className='d-flex justify-content-center mt-3'>
                    <Link to={'/discover'} id='nav' className='text-center d-inline'>DISCOVER MORE | </Link><span className='text-center'> PRESS RELEASE</span>
                    </div>
                </div>
                {modal && <Navmenu/>}
                
                <div className='circle-div'></div>
                <p className='text-secondary para3'>2024 Pagani S.P.A -rights reserved -PIVA 02054560368 - credits</p>

               
        </div>

      </section>
    </>
  )
}

export default Home
