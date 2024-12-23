import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import CalculatorContext from '../context/calculator/calculatorContext';

const RadioBtn = ({id, max, value,  text, name, type }) => {
  const calculatorContext = useContext(CalculatorContext);

  const { selectedTip, customTip, setSelected, setCustom, setCustomValue, removeCustom } = calculatorContext;

  const onChange = (e) => {
    setSelected(e.target.id, e.target.value);
  };

  const onCustomFocus = (e) => {
    setCustom();
    if (e.target.value !== '') {
      setCustomValue(e.target.value);
    } else {
      setCustomValue('');
    }
  };

  const onCustomBlur = (e) => {
    if (e.target.value.trim() === '') {
      removeCustom();
    }
  }

  const onCustomChange = (e) => {
    let { value, max } = e.target;
    let newValue = max ? Math.min(Number(value), Number(max)).toString() : value;
    setCustomValue(newValue);
  };

  return (
    <div className="radio-btn">
      <label htmlFor={id}>
        {type !== 'input' ? <span className={selectedTip === id ? 'btn btn--light' : 'btn'}>{text}</span> : ''}
        <input type="radio" name={name} id={id} value={value} checked={selectedTip === id} onChange={onChange} />
      </label>
      {type === 'input' ? <Input id={`${id}-input`} max={max} label={text} value={customTip} className={selectedTip === id ? 'input-wrapper--no-label input-wrapper--active' : 'input-wrapper--no-label'} placeholder={text} customOnChange={onCustomChange} onFocus={onCustomFocus} onBlur={onCustomBlur} /> : ''} 
    </div>
  );
};

RadioBtn.propTypes = {
  id: PropTypes.string.isRequired,
  max: PropTypes.number,
  value: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default RadioBtn;
