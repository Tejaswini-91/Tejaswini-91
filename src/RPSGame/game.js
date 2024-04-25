import React,{useState,useEffect} from "react";
import './game.css';



const Game = () =>{
  const[userChoice,setUserChoice]= useState(null);
  const[computerChoice,setComputerChoice]= useState(null);
  const[result,setResult]=useState(null);
  
  const handleChoice =(choice) =>{
    const choices =['rock','paper','scissors'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(computerChoice);
    //determine the result
    if(choice===computerChoice) setResult('draw');
    else if(
      (choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice ==='rock') ||
      (choice === 'scissors' && computerChoice ==='paper')
    ){
      setResult('Win');
    } else{
      setResult('Loose');
    }
  }
  return(
    <div>
      <div className="container">
        <button onClick={()=>{handleChoice('rock')}}>Rock</button>
        <button onClick={()=>{handleChoice('paper')}}>Paper</button>
        <button onClick={()=>{handleChoice('scissors')}}>Scissors</button>

      </div>
      <div className="container2">
      <p className="text">Your choice: {userChoice}</p>
      <p>Computer's Choice: {computerChoice}</p>
      </div>
      <div>
        <h1 className={"score"}>You are : {result}</h1>
        <h1 className="score">Computer : {result}</h1>
     </div>
     </div>
  )
}
export default Game;