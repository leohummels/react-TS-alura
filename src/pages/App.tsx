import React from 'react';
import Button from '../components/button';
import Formulario from '../components/forms';
import List from '../components/list';
import style from './App.module.scss'
import Cronometro from '../components/cronometro';


function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario/>
      <List/>
      <Cronometro/>
    </div>
  );
}

export default App;
