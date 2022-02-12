import React from 'react';
import RadioBtn from './RadioBtn';

const RadioBtns = () => {
  const btnData = [
    {
      text: '5%',
      value: '5',
      id: 'five'
    },
    {
      text: '10%',
      value: '10',
      id: 'ten'
    },
    {
      text: '15%',
      value: '15',
      id: 'fifteen'
    },
    {
      text: '25%',
      value: '25',
      id: 'twenty-five'
    },
    {
      text: '50%',
      value: '50',
      id: 'fifty'
    },
    {
      type: 'input',
      text: 'Custom',
      value: '0',
      id: 'custom'
    },
  ];

  return (
    <div className="radio-btns-wrapper">
      <p className="radio-btns-wrapper__label">Select Tip %</p>
      <ul className="radio-btns-wrapper__list">
        {btnData.map((btn, i) => {
          return <li className="radio-btns-wrapper__item" key={i}>
            <RadioBtn text={btn.text} id={btn.id} value={btn.value} name="persent" type={btn.type}/>
          </li>
        })} 
      </ul>
    </div>
  )
}

export default RadioBtns
