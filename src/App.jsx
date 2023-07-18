import { createContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import './App.css'
import Hero from './components/hero/hero.jsx';
import StepOne from './components/StepOne/StepOne';
import { Routes, Route } from "react-router-dom";
import StepTwo from './components/StepTwo/StepTwo';
import StepThree from './components/StepThree/StepThree';
import StepFour from './components/StepFour/StepFour';
import Submit from './components/submitted/submit';
export const FormContext = createContext();
export const IndexContext = createContext();

function App() {
  const form = useForm();
  const { register, control, formState, watch, handleSubmit } = form;
  const [index, setIndex] = useState(1);
  return (
    <>
     <div className="container">
      
      <FormContext.Provider value={[register, control, formState, watch, handleSubmit]}>
        <IndexContext.Provider value={[setIndex, index]} >
      <Routes>
        <Route path='/' element={<Hero />}>
          <Route index element={ <StepOne />}/> 
          <Route path='/Select-plan' element={<StepTwo />} />
          <Route path='/addons' element={<StepThree />} />
          <Route path='/finishing-up' element={<StepFour />} />
          <Route path='/summary' element={<Submit />} />
      </Route>
      </Routes>
      </IndexContext.Provider>
      </FormContext.Provider>
     </div>
    </>
  )
}

export default App
