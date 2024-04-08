import "./App.css";
import { useState } from "react";
import Box from "./Box";
import Header from "./Header";
import Counter from "./Counter";
import Footer from "./Footer";

function App() {
  const [persons, setPersons] = useState([
    { id: 1, name: "Kati", title: "CEO", location: "Vantaa" },
    { id: 2, name: "Joni", title: "CTO", location: "Helsinki" },
    { id: 3, name: "Heli", title: "designer", location: "Tampere" },
  ]);

  return (
    <>
      <Header></Header>
      <Counter></Counter>
      {persons.map((person) => (
        <Box
          key={person.id} //has to be unique
          name={person.name}
          title={person.title}
          location={person.location}
        />
      ))}
      <Footer></Footer>
    </>
  );
}

export default App;
