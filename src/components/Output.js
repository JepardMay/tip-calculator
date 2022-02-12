import React, {useContext} from 'react';
import CalculatorContext from '../context/calculator/calculatorContext';

const Output = () => {
  const calculatorContext = useContext(CalculatorContext);

  const { bill, numberOfPeople, selectedTip, tipAmount, total, resetForm } = calculatorContext;

  const onResetClick = () => {
    resetForm();
  };

  return (
    <div className="output">
      <div className="output__block">
        <p className="output__label">
          Tip Amount
          <span>/ person</span>
        </p>
        <p className="output__number">
          <span>&#36;</span>
          <span className="output__result">{tipAmount}</span>
        </p>
      </div>
      <div className="output__block">
        <p className="output__label">
          Total
          <span>/ person</span>
        </p>
        <p className="output__number">
          <span>&#36;</span>
          <span className="output__result">{total}</span>
        </p>
      </div>
      <button className="output__btn btn btn--light" type="reset" disabled={bill === '' && numberOfPeople === '' && selectedTip === null} onClick={onResetClick}>Reset</button>
    </div>
  )
}

export default Output
