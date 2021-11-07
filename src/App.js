import "./App.css";
import Hello from "./Hello";

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
      </header>
    </div>
  );
}

export default App;
