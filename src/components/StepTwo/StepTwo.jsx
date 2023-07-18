import React, { useContext } from 'react'
import "./StepTwo.css";
import { DevTool } from "@hookform/devtools";
import { FormContext, IndexContext } from '../../App';
import { useNavigate } from 'react-router-dom';

const StepTwo = () => {
    const [register, control, formState, watch] = useContext(FormContext);
    const [setIndex] = useContext(IndexContext);
    const Yearly = watch('Yearly');
    const navigate = useNavigate();
    function nextPage() {
      setIndex(3);
      navigate("/addons", { replace: true });
    }
    function prevPage() {
      setIndex(1);
      navigate("/", { replace: true });
    }
  return (
    <>
    <div className="form">
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing</p>
        <div className="form-container">
        <label htmlFor="Arcade" className="plan1">
        <input type="radio" id="Arcade" name="plan" {...register('plan')} value="Arcade" />
          <div className="input-container">
                <img src="../../assets/images/icon-arcade.svg" alt="" /><br />
            <div className="span-box">
            <span className="span">Arcade</span>
            <span className='rate'>$9{!Yearly?'/mo':'0/yr'}</span>
            <span className='offer'>{Yearly?'2 months free':''}</span>
            </div>
          </div>
            </label>
            
            <label htmlFor="Advanced" className="plan1">
            <input type="radio" id="Advanced" name="plan" {...register('plan')} value="Advanced" />
            <div className="input-container">
            <img src="../../assets/images/icon-advanced.svg" alt="" /><br /> 

            <div className="span-box">
            <span className="span">Advanced</span>
            <span className='rate'>$12{!Yearly?'/mo':'0/yr'}</span>
            <span className='offer'>{Yearly?'2 months free':''}</span>
            </div>
            </div>        
            </label>
            <label htmlFor="Pro" className="plan1">
            <input type="radio" id="Pro" name="plan" {...register('plan')} value="Pro"/>
            <div className="input-container">
            <img src="../../assets/images/icon-pro.svg" alt="" /><br />
           <div className="span-box">
            <span className="span">Pro</span>
            <span className='rate'>$15{!Yearly?'/mo':'0/yr'}</span>
            <span className='offer'>{Yearly?'2 months free':''}</span>
            </div>
              </div>
            </label>
            </div>
        <div className="form2-container">
          <span className='Monthly' style={!Yearly?{color: 'var(--Marine-Blue)'}:{}}>Monthly</span>
        <label className="switch">
        <input type="checkbox" {...register('Yearly')} />
          <span className="slider round"></span>
         </label>
         <span className='Yearly' style={Yearly?{color: 'var(--Marine-Blue)'}:{}}>Yearly</span>
        </div>
        <div className="btns">
        <button className='Prev' onClick={prevPage}>Go Back</button>
        <button className='Next' onClick={nextPage}>Next Step</button>
       
        </div>
        
    </div>
    {/* <DevTool control={control} />  */}
    </>
  )
}

export default StepTwo