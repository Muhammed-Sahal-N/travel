

import React from 'react'




function Footer() {
  return (
    <>
    <footer className='mt-5 shadow bg-dark' >
      <div className="row ms-5 mt-3 shadow">
        <div className="col" style={{fontFamily:'Lobster'}}>
         <div className='d-flex mt-3'>
         
          <h5  className='ms-2  fw-bold travel'style={{color:"lightskyblue",fontSize:'30px'}}>TRAVEL GUIDE</h5>
         </div>
        <p style={{color:'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est non itaque labore tempora id atque optio perferendis aspernatur neque magni. Maxime qui aut eos ad, quis voluptate eius nulla! Nihil!</p></div>
      <div className="col mt-3 fw-bold  " style={{fontFamily:'Lobster',marginLeft:'20%'}}><h5 style={{color:'lightskyblue'}}>Links</h5>
      <h6 style={{color:'white'}}>Home</h6>
     <h6 style={{color:'white'}}>About</h6>
      <h6 style={{color:'white'}}>Locations</h6>
      </div>
     
      <div className="col mt-3"style={{fontFamily:'Lobster'}}><h5 style={{color:'lightskyblue'}}>Contact Us</h5>
      <div>
      <input type="text"  placeholder='enter your email'/>
      <button style={{backgroundColor:'lightskyblue',color:"white"}}><i class="fa-solid fa-arrow-right"></i>submit</button>
      </div>
      <div className='mt-1 d-flex text-light' >
            <div style={{color:'white'}} className='p-2 '><i class="fa-brands fa-facebook text-white"></i></div>
            <div className='p-2'><i class="fa-brands fa-instagram"></i></div>
            <div className='p-2'><i class="fa-solid fa-phone"></i></div>



           
         </div>
      </div>
      </div>
      <div className='d-flex  align-items-center justify-content-center'style={{fontFamily:'Lobster',color:'white'}}><p>Copyright &copy; TRAVEL GUIDE 2024, Built with </p></div>
    </footer>
    </>
  )
}

export default Footer