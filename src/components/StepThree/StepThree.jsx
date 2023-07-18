import React, { useContext } from 'react'
import "./StepThree.css"
import { DevTool } from "@hookform/devtools";
import { FormContext, IndexContext } from '../../App';
import { useNavigate } from 'react-router-dom'
function StepThree() {
  const [register, control, formState, watch] = useContext(FormContext);
  const [setIndex] = useContext(IndexContext);
  const Yearly = watch('Yearly');
  const navigate = useNavigate();
  function prevPage() {
    setIndex(2);
    navigate('/Select-plan', { replace: true })
  }
  function nextPage() {
    setIndex(4);
    navigate('/finishing-up', { replace: true })
  }
  return (
    <>
    <div className="form">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>
      <div className="add-ons">
        <label htmlFor="onlineServices">
          <input type="checkbox" name="onlineServices" id="onlineServices" {...register('onlineServices')}/>
          <div className="centre">
          <span  className="centre-top">Online service</span>
          <span  className='centre-bottom'>Access to multiplayer games</span>
          </div>
          <span>+1{Yearly?'0$/yr':'$/mo'}</span>
        </label>
        <label htmlFor="largerStorage">
          <input type="checkbox" name="largerStorage" id="largerStorage" {...register('largerStorage')}/>
          <div className="centre">
          <span className="centre-top">Larger storage</span>
          <span className='centre-bottom'>Extra 1TB of cloud save</span>
          </div>
          <span>+2{Yearly?'0$/yr':'$/mo'}</span>
        </label>
        <label htmlFor="customizableProfile">
          <input type="checkbox" name="customizableProfile" id="customizableProfile" {...register('customizableProfile')} />
          <div className="centre">
          <span className="centre-top">Customizable profile</span>
          <span className='centre-bottom'>Custom theme on your profile</span>
          </div>
          <span>+2{Yearly?'0$/yr':'$/mo'}</span>
        </label>
      </div>
      <div className="buttons">
        <button className='Prev' onClick={prevPage}>Go Back</button>
        <button className='Next' onClick={nextPage}>Next Step</button>
       
        </div>
    </div>
    {/* <DevTool control={control}/> */}
    </>
  )
}

export default StepThree