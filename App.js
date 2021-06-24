import React from "react";

const addfn  = (a,b) =>{
  return a+b;
}

const subfn = (a,b) =>{
  return Math.abs(a-b);
}
const mulfn = (a,b)=>{
  return a*b;
}

const divfn = (a,b) =>{
    return a/b;
}

const App = () =>{
  return(
    <>
      <h1>The two numbers are 25 and 10</h1>
    </>
  )
 }
export default App;
  
export{
  addfn,subfn,mulfn,divfn
};