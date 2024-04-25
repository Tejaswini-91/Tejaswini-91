import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import Game from './RPSGame/game';


function App() {

  return (
    <>
    <div>
      <h1>WELOCEME TO ROCK, PAPER, SEISSORS GAME</h1>
    </div>
     <div>
      <Game />
     </div>
    </>
  );
}

export default App;