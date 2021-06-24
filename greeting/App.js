import React from "react";

const five = "Elite";
const a = "Gilmore";
const b = "Girls";
let tday = new Date();
let greeting = '';
// const d = `${tday.getFullYear()}-${tday.getMonth()}-${tday.getDate()}`;
// const t = `${tday.getHours()}:${tday.getMinutes()}:${tday.getSeconds()}`;
const d = tday.toLocaleDateString();
const t = tday.toLocaleTimeString();
const heading = {
    color: 'red',
    textTransform : 'capitalize',
    textAlign : 'center',

}
const cssStyle={};

const x = tday.getHours();
if(x>=1 && x<12){
  greeting = 'Good Morning';
  cssStyle.color='Green';
}else if(x>=12 && x<19){
  greeting = 'Good Afternoon';
  cssStyle.color='Orange';

}else{
  greeting = 'Good Night';
  cssStyle.color='Black';

}


const App = () =>{
  return(
    <>
      {/* <h1 className="heading">Keerthna's Netflix Pick</h1>
      <p>List of 5 Best series</p>
      <ol>
        <li>Stranger Things</li>
        <li>Friends</li>
        <li>Dark</li>
        <li>Society</li>
        <li>{five}</li>
      
      </ol>

      <p>And i also wanna see {`${a} ${b}`} </p>
    <hr></hr>
      <h4>Todays Date is {d}</h4>
      <h5>Current time is {t}</h5>
      <hr></hr>

      <noscript style={heading}>You need to enable javascript to enable this App</noscript>
      <div>
        <h1 style={heading}>Inline css</h1>
      </div> */}

      <div>
        <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
      </div>
    </>
  )
 }
export default App;
  