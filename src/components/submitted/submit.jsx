import React from 'react'
import "./submit.css"

function Submit() {
  return (
    <div className="success-container">
        <img src="../../src/assets/images/icon-thank-you.svg" alt="" />
        <h1 style={{color: 'var(--Marine-blue)'}}>Thank you!</h1>
        <p style={{color: 'var(--Cool-gray)'}}>
  Thanks for confirming your subscription! We hope you have fun 
  using our platform. If you ever need support, please feel free 
  to email us at support@loremgaming.com.</p>
    </div>
  )
}

export default Submit