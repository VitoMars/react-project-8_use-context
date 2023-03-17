import React, { useState, useContext } from "react";
import { data } from "../data";

const AppContext = React.createContext();

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const removePeople = (id) => setPeople(people.filter((el) => el.id !== id));
  return (
    <AppContext.Provider value={{ people, removePeople }}>
      <div className="text-center mt-3">
        <h3>useContext</h3>
        <Elenco />
      </div>
    </AppContext.Provider>
  );
};

const Elenco = () => {
  const info = useContext(AppContext);
  return (
    <div>
      {info.people.map((el, index) => {
        return <Persona key={index} {...el} />;
      })}
    </div>
  );
};

const Persona = ({ id, name }) => {
  const { removePeople } = useContext(AppContext);
  return (
    <div className="item shadow">
      <h5>{name}</h5>
      <button className="btn btn-danger" onClick={() => removePeople(id)}>
        Elimina
      </button>
    </div>
  );
};

export default PropDrilling;
