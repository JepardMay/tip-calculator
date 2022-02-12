import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';
import CalculatorContext from '../context/calculator/calculatorContext';

const Input = ({ label, id, value, icon, className, placeholder, customOnChange, onFocus, onBlur }) => {
  const calculatorContext = useContext(CalculatorContext);

  const { setInputValue, error } = calculatorContext;

  const onChange = (e) => {
    setInputValue(e.target.value, e.target.id);
  };

  return (
    <div className={`input-wrapper ${className} ${error && error[id] ? 'input-wrapper--error' : ''}`}>
      {label ?
        <div className="input-wrapper__header">
          <label htmlFor={id}>{label}</label>
        {error && error[id] ? <span className='input-wrapper__error'>{error[id]}</span> : ''}
        </div>
      : ''}
      {icon ? <Icon icon={icon} /> : ''}
      <input type="number" id={id && id} value={value} placeholder={placeholder} onChange={customOnChange ? customOnChange : onChange} onFocus={onFocus} onBlur={onBlur} />
    </div>
  )
};

Input.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  icon: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  customOnChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

export default Input;
