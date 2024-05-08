import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setheight] = useState(0);
  const [bmi, setbmi] = useState('');
  const [message, setmessage] = useState('');
  //const [reload, setreload] = useState('');

  //LOGIC
  let calcBmi=(e)=>{
    e.preventDefault();
    if(weight===0 || height===0){
      alert('Enter valid weight & height')
    }

    else{
      let bmi=(weight/(height*height)*703)
      setbmi(bmi.toFixed(1))

      if(bmi<25){
        setmessage('You are underweight')
      }
      else if(bmi>=25 && bmi<30){
        setmessage('You have a healthy weight')
      }
      else{
        setmessage('Your are overweight')
      }
    }
  }

  let reload=()=>{
    window.location.reload()
  }


  return (
    <div className="container">
      <h1 align="center">BMI calculator</h1>
      <h2 align="center">Calculate your BMI here</h2>
      <form onSubmit={calcBmi}>
        <div>
          <label>Weight(lbs)</label>
          <input type="text" placeholder="Enter your weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
        <div>
          <label>Height(in)</label>
          <input type="text" placeholder="Enter your height" value={height} onChange={(e) => setheight(e.target.value)}/>
        </div>
        <div>
          <button className="btn">Submit</button>
          <button className="btn btn-outline" onclick={reload} type='submit'>Reload</button>
        </div>
        <div className="center">
          <h3>Your BMI is:{bmi}</h3>
          <p>{message}</p>
        </div>
      </form>
    </div>
  );
}

export default App;
