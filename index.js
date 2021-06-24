import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  
<div>

  <App.default/>
  <div>
    <p>Sum is {App.addfn(25,10)}</p>
    <br></br>
    <p>Diiference is {App.subfn(25,10)}</p>

    <br/>
    <p>Product is {App.mulfn(25,10)}</p>

    <br/>
    <p>Quoient is {App.divfn(20,10).toFixed(2)}</p>
      
   <br/></div>
</div>
  ,  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


