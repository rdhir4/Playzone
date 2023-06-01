import GameController from "./Components/controller";
import "./styles.css";
import "./App.css";

export default function App() {
function newgame (){
window.location.reload(true);
}

  return (
    <div className="App  p-5" style={{backgroundColor:"black"}}>
      
      <GameController />
      <button title="Start a New game"onClick={newgame} className="btn btn-lg btn-danger p-3 m-4">New Game</button>
    </div>
  );
}
