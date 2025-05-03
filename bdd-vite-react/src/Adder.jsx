import React, { useState } from 'react';

export function add(a, b) {
  return a + b;
}

export default function Adder() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  const handleAdd = () => {
    setResult(add(Number(num1), Number(num2)));
  };

  return (
    <div>
      <h2>Adder Component</h2>
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
}