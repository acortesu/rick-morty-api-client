import "./App.css";
import Character from "./Character";
import Dropdowns from "./Dropdowns";
import logo from "./img/logo-rick-and-morty.png";

function App() {
  return (
    <div className="background">
      <div className="logo" style={{ backgroundImage: `url(${logo})` }}></div>
      <h1 className="title">CHOOSE AN EPISODE</h1>
      <div className="content">
        <Dropdowns></Dropdowns>
        <Character></Character>
      </div>
    </div>
  );
}

export default App;
