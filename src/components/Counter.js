import { useState } from "react";

const Counter = () => {
  const[number, increment] = useState(0)

  return (
    <div>
      <p>Nilai counter saat ini: {number}</p>
      <button onClick={() => increment(number+1)}> + </button>
    </div>
  );
};

export default Counter;
