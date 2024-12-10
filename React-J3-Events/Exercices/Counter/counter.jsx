import React, { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);
  const [warning, setWarning] = useState("");

  const increment = () => {
    setCount((currentCount) => {
      setWarning("");
      return currentCount + 1;
    });
  };

  const decrement = () => {
    count > 0
      ? setCount((currentCount) => {
          setWarning("");
          return currentCount - 1;
        })
      : setWarning("Vous ne pouvez pas descendre en dessous de 0 !");
  };

  return (
    <div className="Counter" style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Compteur : {count}</h1>
      <button onClick={increment}>Incrémenter +1</button>
      <button onClick={decrement}>Décrémenter -1</button>
      {warning && <p style={{ color: "red", marginTop: "10px" }}>{warning}</p>}
    </div>
  );
}

export default CounterApp;
