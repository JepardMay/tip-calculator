import React, {useContext} from 'react';
import Input from './Input';
import RadioBtns from './RadioBtns';
import Output from './Output';
import CalculatorContext from '../context/calculator/calculatorContext';

const Form = () => {
  const calculatorContext = useContext(CalculatorContext);

  const { bill, numberOfPeople } = calculatorContext;

  return (
    <div className="form">
      <div className="form__wrapper">
        <div className="form__column">
          <Input label="Bill" id="bill" value={bill} icon="dollar" placeholder="0"/>
          <RadioBtns />
          <Input label="Number of People" id="numberOfPeople" value={numberOfPeople} icon="person" placeholder="0"/>
        </div>
        <div className="form__column">
          <Output/>
        </div>
      </div>
    </div>
  )
}

export default Form
