import React from 'react';
import Logo from './components/Logo';
import Form from './components/Form';

import CalculatorState from './context/calculator/CalculatorState';

function Main() {
  return (
    <CalculatorState>
      <main className="main">
        <Logo />
        <Form />
        <footer className="attribution">
          Challenge by <a className="attribution__link" href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>. Coded by <a className="attribution__link" href="https://github.com/JepardMay" target="_blank" rel="noopener noreferrer">JepardMay</a>.
        </footer>
      </main>
    </CalculatorState>
  );
}

export default Main;
