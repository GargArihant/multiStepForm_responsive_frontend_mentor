import React, { useContext } from 'react'
import "./StepFour.css"
import { FormContext,IndexContext } from '../../App';
import { DevTool } from '@hookform/devtools';
import { useNavigate } from 'react-router-dom';
function StepFour() {
    const [register, control, formState, watch, handleSubmit] = useContext(FormContext);
    const [setIndex] = useContext(IndexContext);
    const plan = watch('plan');
    const Yearly = watch('Yearly');
    const onlineServices = watch('onlineServices');
    const largerStorage = watch('largerStorage');
    const customizableProfile = watch('customizableProfile');
    const x = onlineServices?1:0;
    const y = largerStorage?2:0;
    const z = customizableProfile?2:0;
    const perkCost = x + y + z;
    const planCost = plan == 'Arcade'?9:plan == 'Advanced'?12:15;
    const total = (perkCost + planCost)*(Yearly?10:1);
    const navigate = useNavigate();
    function prevPage() {
        setIndex(3);
        navigate("/addons", { replace: true });
      }
      function changePlan() {
        setIndex(2);
        navigate("/Select-plan", { replace: true });
      }
      const onSubmit = (data) => {
            console.log(data);
            navigate("/summary", { replace: true });
      }
  return (
    <>
    <div className="form">
        <h1>Finishing up</h1>
        <p>Double check everything looks OK before confirming.</p>
        <div className="bill">
            <div className="card" style={{borderBottom: 'var(--Cool-gray) solid 1px'}}>
                <div className="card-left">
                <span className="head" style={{color: 'var(--Marine-blue)', fontWeight: '700', fontSize: '1.1rem'
            }}>{plan == 'Arcade'?'Arcade':plan == 'Advanced'?'Advanced':'Pro'}{Yearly?'(Yearly)':'(Monthly)'}</span>
                <span><a onClick={changePlan}  style={{color: 'var(--Cool-gray)'}}>change</a></span>
                </div>
                <span>{plan == 'Arcade'?'$9':plan == 'Advanced'?'$12':'$15'}{Yearly?'0/yr':'/mo'}</span>
            </div>
            {onlineServices?<div className="card">
                <span className="head" style={{color: 'var(--Cool-gray)'}}>Online service</span>
                <span>$1/mo</span>
            </div>:''}
            {largerStorage?<div className="card">
                <span className="head" style={{color: 'var(--Cool-gray)'}}>Larger storage</span>
                <span>$2/mo</span>
            </div>:''}
            {customizableProfile?<div className="card">
                <span className="head" style={{color: 'var(--Cool-gray)'}}>Customizable profile</span>
                <span>$2/mo</span>
            </div>:''}
            <div className="card" style={{backgroundColor: 'var(--Alabaster)'}}>
                    <span style={{color: 'var(--Cool-gray)'}}>Total {Yearly?'(per year)':'(per month)'}</span>
                    <span style={{color: 'var(--Purplish-blue)', fontSize: '1.3rem' }}>${total}{Yearly?'/yr':'/mo'}</span>
                </div>         
        </div>
        <div className="btns" style={{marginTop: '500px'}}>
        <button className='Prev' onClick={prevPage}>Go Back</button>
        <button className="Next" onClick={handleSubmit(onSubmit)} style={{backgroundColor: 'var(--Purplish-blue)', fontWeight: '500'}}>Submit</button>
        </div>
    </div>
    {/* <DevTool control={control}/> */}
    </>
  )
}

export default StepFour