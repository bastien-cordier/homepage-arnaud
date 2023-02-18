import "./App.scss";
import ButtonAdd from "./components/ButtonAdd.js";
import JokeGenerator from "./components/JokeGenerator.js";
import List from "./components/List.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>
          Hello Arnaud ! <span className="shake">👋🏼</span>
        </h1>
        <List />
        <JokeGenerator />
        <ButtonAdd />
      </div>
    </div>
  );
}

export default App;
