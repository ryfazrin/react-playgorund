const Counter = () => {
  let number = 0;
  const increment = () => {
    number += 1;
    console.log(number);
  };

  return (
    <div>
      <p>Nilai counter saat ini: {number}</p>
      <button onClick={increment}> + </button>
    </div>
  );
};

export default Counter;
