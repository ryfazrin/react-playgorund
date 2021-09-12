import { useState } from 'react';
import './App.css';

function App() {
  const [title, setTitle] = useState("Hello World");

  const changeTitle = () => {
    setTitle("Title Changed");
  }

  return (
    <div>
      <h2>{ title }</h2>
      <button onClick={ changeTitle }>Change Title</button>
    </div>
  );
}

export default App;
