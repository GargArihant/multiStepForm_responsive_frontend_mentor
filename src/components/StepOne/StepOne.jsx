import React, { useContext } from 'react'
import './StepOne.css'
import { DevTool } from "@hookform/devtools";
import { FormContext, IndexContext } from '../../App';
import { useNavigate } from 'react-router-dom';
function StepOne() {
  const [register, control] = useContext(FormContext);
  const [setIndex] = useContext(IndexContext);
  const navigate = useNavigate();
  function nextStep() {
    setIndex(2);
    navigate("/Select-plan", { replace: true })
  }
  return (
    <>
    <div className='form'>
      <h1>Personal info</h1>
  <p>Please provide your name, email address, and phone number.</p>
    <form action="" className='info-form'>
  <span>Name</span>
  <input type="text" name="name" id="name" {...register('name',{required : true})} placeholder='e.g. Stephen King'/>

  <span>Email Address</span>
  <input type="email" name="email" id="email" {...register('email')} placeholder='e.g. stephenking@lorem.com' />

  <span>Phone Number</span>
  <input type="number" name="number" id="number" {...register('number')} placeholder='e.g. +1 234 567 890' />
  </form>
  <button className='nxt' onClick={nextStep}>Next Step</button>
    </div>
    {/* // <DevTool control={control} /> */}
    </>
  )
}

export default StepOne