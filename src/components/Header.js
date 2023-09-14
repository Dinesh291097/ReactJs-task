import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className=' container-fluid'>
      <div className='row header'>
        <div className=' d-flex justify-content-between header'>
          <div>
            <Link to={'/'} className=' text-decoration-none'>
            <p className='logo'>Dinesh</p>
            </Link>
            </div>
          <div className='logo1 '>
            <ul style={{ listStyleType: 'none' }} className=' d-flex items'>
              <Link to={"/form"} className=' text-decoration-none '>
                <li className=' pe-3 logo1'>Login</li>
              </Link>
              <Link to={'/card'} className=' text-decoration-none'>
                <li className='pe-3 logo1'>card</li>
              </Link>
              
              
              

            </ul>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Header