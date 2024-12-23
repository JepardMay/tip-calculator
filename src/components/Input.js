import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import CalculatorContext from '../context/calculator/calculatorContext';

const Input = ({ label, id, max, value, icon, className, placeholder, customOnChange, onFocus, onBlur }) => {
  const calculatorContext = useContext(CalculatorContext);

  const { setInputValue, error } = calculatorContext;

  const onChange = (e) => {
    let { value, max } = e.target;
    let newValue = max ? Math.min(Number(value), Number(max)).toString() : value;
    setInputValue(newValue, e.target.id);
  };

  return (
    <div className={`input-wrapper ${className} ${error && error[id] ? 'input-wrapper--error' : ''}`}>
      <div className="input-wrapper__header">
        <label htmlFor={id}>{label}</label>
      {error && error[id] ? <span className='input-wrapper__error'>{error[id]}</span> : ''}
      </div>
      {icon ? <Icon icon={icon} /> : ''}
      <input type="number" id={id} max={max} value={value} placeholder={placeholder} onChange={customOnChange ? customOnChange : onChange} onFocus={onFocus} onBlur={onBlur} />
    </div>
  )
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  max: PropTypes.number,
  value: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  customOnChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

export default Input;
