import React, { useState } from "react";
import "./App.css";
import CounterApp from "../Exercices/Counter/counter.jsx";
import Diapo from "../Exercices/Diaporama/Diaporama.jsx";
import Form from "../Exercices/Formulaire/form.jsx";

function App() {
  const Link = () => {
    const handleClick = (event) => {
      event.preventDefault();
      console.log("Clicked");
    };

    return (
      <a href="https://www.google.fr" onClick={handleClick}>
        Envoyer
      </a>
    );
  };

  const SimpleButton = () => {
    const handleClick = () => {
      console.log("Envoyé");
    };

    return <button onClick={handleClick}>Envoyer</button>;
  };

  const ButtonWithAckInto = () => {
    const [hasClicked, setHasClicked] = useState(false);

    const handleClick = () => {
      setHasClicked(true);
    };

    return (
      <button onClick={handleClick}>{hasClicked ? "Envoyé" : "Envoyer"}</button>
    );
  };

  const ButtonWithAckOuto = () => {
    const [hasClicked, setHasClicked] = useState(false);

    const handleClick = () => {
      setHasClicked(true);
    };

    return (
      <div style={{ color: "bisque" }}>
        {hasClicked && <p>C'est envoyé</p>}
        <button onClick={handleClick}>Envoyer</button>
      </div>
    );
  };

  const ButtonWithAckToogle = () => {
    const [hasClicked, setHasClicked] = React.useState(false);

    const handleClick = () => {
      setHasClicked(true);
    };

    return (
      <div style={{ color: "bisque" }}>
        {hasClicked ? (
          <p>C'est envoyé</p>
        ) : (
          <button onClick={handleClick}>Envoyer</button>
        )}
      </div>
    );
  };

  return (
    <div className="App" style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Exemples de Boutons</h1>
      <Link />
      <SimpleButton />
      <ButtonWithAckInto />
      <ButtonWithAckOuto />
      <ButtonWithAckToogle />
      <CounterApp />
      <Diapo />
      <Form />
    </div>
  );
}

export default App;
