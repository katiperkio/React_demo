import "./App.css";
import { useState } from "react";
import Box from "./Box";

function App() {
  const [counter, setCounter] = useState(0);
  const [persons, setPersons] = useState([
    { id: 1, name: "Kati", title: "CEO", location: "Vantaa" },
    { id: 2, name: "Joni", title: "CTO", location: "Helsinki" },
    { id: 3, name: "Heli", title: "designer", location: "Tampere" },
  ]);

  const addHandler = () => {
    console.log("Foxes forever");
    setCounter(counter + 1);
  };

  const removeHandler = () => {
    setCounter(counter - 1);
  };

  const resetHandler = () => {
    setCounter(0);
  };

  return (
    <>
      <p>Counter: {counter}</p>
      <button onClick={addHandler}>+</button>
      <button onClick={removeHandler}>-</button>
      <button onClick={resetHandler}>reset</button>
      {persons.map((person) => (
        <Box
          key={person.id} //has to be unique
          name={person.name}
          title={person.title}
          location={person.location}
        />
      ))}
    </>
  );
}

export default App;
