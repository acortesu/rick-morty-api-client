import "./App.css";
import Character from "./Character";
import Dropdowns from "./Dropdowns";

function App() {
  return (
    <div className="background">
      <div className="logo"></div>
      <h1 className="title">CHOOSE AN EPISODE</h1>
      <div className="content">
        <Dropdowns></Dropdowns>
        <Character></Character>
      </div>
    </div>
  );
}

export default App;
