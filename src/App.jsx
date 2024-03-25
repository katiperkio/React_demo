import "./App.css";
import { useState } from "react";
import Box from "./Box";

function App() {
  const [counter, setCounter] = useState(100);
  const [persons, setPersons] = useState([
    { name: "Kati", title: "CEO", location: "Vantaa" },
    { name: "Joni", title: "CTO", location: "Helsinki" },
    { name: "Heli", title: "designer", location: "Tampere" },
  ]);

  return (
    <>
      <p>Counter: {counter}</p>
      {persons.map((person) => (
        <Box
          name={person.name}
          title={person.title}
          location={person.location}
        />
      ))}
    </>
  );
}

export default App;
