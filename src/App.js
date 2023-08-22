import "./App.css";
import Dropdowns from "./Dropdowns";
import logo from "./img/logo-rick-and-morty.png";

function App() {
  return (
    <div className="background">
      <div className="logo">
        <img src={logo} alt="Rick and Morty Logo" />
      </div>
      <h1 className="title">CHOOSE AN EPISODE</h1>
      <div className="content">
        <Dropdowns></Dropdowns>
      </div>
    </div>
  );
}

export default App;
