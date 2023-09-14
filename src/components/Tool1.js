import React, { useState } from 'react'
import { RiLockPasswordFill } from "react-icons/ri";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import {  FiMail} from "react-icons/fi";


const Tool1 = () => {
  const [name, setName]=useState();
  const [mail, setMail]=useState();
  const [password, setPassword]=useState();
  const handleclick = () => {
    alert(
    `Name: ${name} 
    mail:${mail}`)
    setName('');
    setMail('');
    setPassword('') 


    localStorage.setItem('user',JSON.stringify([...JSON.parse(localStorage.getItem(`user`))|| [],
    {
      uname:name,
      umail:mail,
      upass:password
    }]))

  

   
  }
  
  
  return (
   <main className=' container col-md-4 mt-2 '>
    <div className='row w-70 d-grid justify-content-center align-content-center text-bg-info'>
      <div className='row m-3'>
        <h2>LOGIN USER</h2>
      </div>
      <form id='form'> 

      <label for='username' className=' form-label text-uppercase'>User Name </label>
        <div className=' mb-2 input-group'>
          <input type='text' className=' form-control' placeholder='Enter a Name' id='username' required autoFocus onChange={(e)=>setName(e.target.value)} value={name}></input>
          <span class="input-group-text"><MdOutlineAdminPanelSettings/></span>
        </div> 
 
        <label form='email' className=' form-label text-uppercase'>Email</label>
        <div className='mb-2 input-group'>
          <input type='email' className=' form-control' placeholder='Enter a Mail id' id='email' required onChange={(e)=>setMail(e.target.value)} value={mail}></input>
          <span class="input-group-text"><FiMail/></span>
        </div>

        <label form='password' className=' form-label text-uppercase'>Password</label>
        <div className='mb-2 input-group'>
           <input type='password' className=' form-control' placeholder='Enter password' id='password' required onChange={(e)=>setPassword(e.target.value)} value={password}></input>
          <span className=' input-group-text'><RiLockPasswordFill/></span>
        </div> 
        
        <div className='mb-2 d-flex justify-content-center '>
        <button type='button' className='btn btn-warning' onClick={handleclick}>submit it!</button>
        </div>
       
      </form>
    </div>
   </main>
  )
}



export default Tool1;
