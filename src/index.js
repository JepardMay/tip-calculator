import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';

import './style.scss';

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

if (module.hot) {
	module.hot.accept();
}
 