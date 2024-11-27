import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const elem = (
  <div>
    <h1>Контролируйте свой доход!</h1>

    <div>
      <h2>Сколько сегодня вы потратили?</h2>
      <input type="number"/>
      <button>Клик</button>
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem
);