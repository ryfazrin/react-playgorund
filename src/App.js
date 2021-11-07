import "./App.css";
import Counter from "./components/Counter";
import Hello from "./components/Hello";
import Rendering from "./components/Rendering";

function App() {
  const Title = ({ text }) => {
    let variableLain = "🎉";
    return (
      <h1>
        {text} {variableLain}
      </h1>
    );
  };
  return (
    <div className="App">
      <header className="App-header">
        <Title text="hai" />
        <Hello name="Ryan" gretting="Nice to meet you" />
        <Rendering />
        <Counter />
      </header>
    </div>
  );
}

export default App;
