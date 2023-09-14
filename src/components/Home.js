import React from 'react'
import banner from '../images/modern-sales-banner-template_23-2148995448.avif'

const Home = () => {
  return (
    <div className=' container-fluid'>
        <div className='row'><marquee behavior="scroll" direction="left">
        <h2 className=' text-uppercase' style={{color:'red'}}>welcome to shopping cart!</h2>
        </marquee>
        
        <img src={banner} alt=""  className=' img-fluid'/>

        </div>
        

    </div>
  )
}

export default Home