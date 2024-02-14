import React from 'react';
import "./Footer.css"

export default function Footer() {
  return (
    <>
      <div className='bootstrap'>
        <div className='col'><h1><em> Let's Blog</em></h1></div>
        <div className='col'>
          <h2>SUBCRIPTION</h2>
          <input type="text" placeholder='email address' />
          <input type="text" placeholder='SUBCRIBE' id='input2' />
        </div>
        <div className='col'>3</div>
        <div className='col'>4</div>
        <hr />
      </div>
    </>
  )
}
