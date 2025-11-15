import { useState } from "react";

const Counter = ({ incrementValue, buttonColor }) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    const newCount = count + incrementValue;
    setCount(newCount > 10 ? 0 : newCount);
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <p>Count: {count}</p>
      <button
        onClick={handleIncrement}
        style={{
          backgroundColor: buttonColor,
          color: "white",
          border: "none",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Increment by {incrementValue}
      </button>
    </div>
  );
};

export default Counter;
