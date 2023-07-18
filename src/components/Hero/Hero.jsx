import React, { useContext, useEffect, useRef } from 'react'
import './Hero.css'
import { Outlet } from 'react-router-dom'
import { IndexContext } from '../../App';

function Hero() {
  const [setIndex, index] = useContext(IndexContext);
  const refOne = useRef(null);
  const refTwo = useRef(null);
  const refThree = useRef(null);
  const refFour = useRef(null);
  useEffect(() => {
  if (index == 1) {
    refOne.current.style.backgroundColor = 'var(--Light-blue)';
    refTwo.current.style.backgroundColor = 'transparent';
    refThree.current.style.backgroundColor = 'transparent';
    refFour.current.style.backgroundColor = 'transparent';
    refOne.current.style.color = 'var(--Marine-blue)';
    refTwo.current.style.color = 'var(--Alabaster)';
    refThree.current.style.color = 'var(--Alabaster)';
    refFour.current.style.color = 'var(--Alabaster)';
  } else if (index == 2) {
    refOne.current.style.backgroundColor = 'transparent';
    refTwo.current.style.backgroundColor = 'var(--Light-blue)';
    refThree.current.style.backgroundColor = 'transparent';
    refFour.current.style.backgroundColor = 'transparent';
    refOne.current.style.color = 'var(--Alabaster)';
    refTwo.current.style.color = 'var(--Marine-blue)';
    refThree.current.style.color = 'var(--Alabaster)';
    refFour.current.style.color = 'var(--Alabaster)';
  } else if (index == 3) {
    refOne.current.style.backgroundColor = 'transparent';
    refTwo.current.style.backgroundColor = 'transparent';
    refThree.current.style.backgroundColor = 'var(--Light-blue)';
    refFour.current.style.backgroundColor = 'transparent';
    refOne.current.style.color = 'var(--Alabaster)';
    refTwo.current.style.color = 'var(--Alabaster)';
    refThree.current.style.color = 'var(--Marine-blue)';
    refFour.current.style.color = 'var(--Alabaster)';
  } else {
    refOne.current.style.backgroundColor = 'transparent';
    refTwo.current.style.backgroundColor = 'transparent';
    refThree.current.style.backgroundColor = 'transparent';
    refFour.current.style.backgroundColor = 'var(--Light-blue)';
    refOne.current.style.color = 'var(--Alabaster)';
    refTwo.current.style.color = 'var(--Alabaster)';
    refThree.current.style.color = 'var(--Alabaster)';
    refFour.current.style.color = 'var(--Marine-blue)';
  }
},[index])
  return (
    <>
    <img className='pc' src={"../../src/assets/images/bg-sidebar-desktop.svg"} alt="" />
    <img src="../../src/assets/images/bg-sidebar-mobile.svg" className='mob' alt="" />
    <div className="index">
      <div className="step1">
        <div className="one" ref={refOne}>1</div>
        <div className="info">
               <span>STEP 1</span>
               <span>YOUR INFO</span>
        </div>
      </div>
      <div className="step1">
        <div className="one" ref={refTwo}>2</div>
        <div className="info">
               <span>STEP 2</span>
               <span>SELECT PLAN</span>
        </div>
      </div>
      <div className="step1">
        <div className="one" ref={refThree}>3</div>
        <div className="info">
               <span>STEP 3</span>
               <span>ADD-ONS</span>
        </div>
      </div>
      <div className="step1">
        <div className="one" ref={refFour}>4</div>
        <div className="info">
               <span>STEP 4</span>
               <span>SUMMARY</span>
        </div>
      </div>
    </div>
    <Outlet />
    </>
  )
}

export default Hero