import { Form } from "./components/Form";
import { Person } from "./components/Person";
import { useState } from "react";
import "./App.css";

const initialPeople = [
  {
    name: "John",
    tel: 122356789,
    city: "Krakow",
  },
  {
    name: "Pork",
    tel: 985436212,
    city: "Krakow",
  },
  {
    name: "Marta",
    tel: 123422789,
    city: "Warszawa",
  },
  {
    name: "Kasia",
    tel: 987411212,
    city: "Warszawa",
  },
  {
    name: "Marek",
    tel: 123458689,
    city: "Wroclaw",
  },
  {
    name: "Zbyszek",
    tel: 987432312,
  },
];

function App() {
  const [isFormShown, setIsFormShown] = useState(false);
  const [people, setPeople] = useState(initialPeople);

  const handleShowFormClick = () => setIsFormShown(true);

  const addPerson = (data) => {
    const newPeople = [...people, data];
    setPeople(newPeople);
    setIsFormShown(false);
  };

  return (
    <>
      <h1>Lista kontakow:</h1>
      {isFormShown ? (
        <Form onAddPerson={addPerson} />
      ) : (
        <button onClick={handleShowFormClick}>Dodaj</button>
      )}
      <ul>
        {people.map((person) => (
          <Person
            key={person.tel}
            name={person.name}
            tel={person.tel}
            city={person.city}
          />
        ))}
      </ul>
    </>
  );
}

export default App;
