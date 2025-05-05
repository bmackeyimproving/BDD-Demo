import React from 'react';

export default function HelloWorld({ text: defaultText = "Hello World" }) {
  const [count, setCount] = React.useState(0);
  const [text, setText] = React.useState(defaultText);
  return (
    <div>
      <div>{text}</div>
      <button onClick={() => setCount((c) => c + 1)}>
        Clicked {count} times
      </button>
      <button onClick={() => {setCount(0); setText(defaultText); }}>
        Reset
      </button>
    </div>
  );
}
