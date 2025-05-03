import React from 'react';

export default function HelloWorld({ text = "Hello World" }) {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <div>{text}</div>
      <button onClick={() => setCount((c) => c + 1)}>
        Clicked {count} times
      </button>
    </div>
  );
}
