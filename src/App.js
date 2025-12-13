import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { findAction } from "./redux/filterSlice";
import { fetchContacts, addContact, deleteContact } from "./redux/slice";
import { selectContacts, selectFilter, selectError, selectIsLoading, selectFilteredContacts } from "./redux/selectors";

import PhoneEditor from "./components/PhoneEditor/PhoneEditor";
import PhoneList from "./components/PhoneList/PhoneList";

import "./App.css";

const App = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleInputChange = (field, value) => {
    if (field === "name") {
      setName(value);
    } else if (field === "number") {
      setNumber(value);
    }
  };

  const handleAddContact = (name, number) => {
    if (!name || !number || name.trim() === "" || number.trim() === "") {
      return;
    }

    const isNameExists = contacts.some(
      (contact) => contact.name.toLowerCase() === name.trim().toLowerCase()
    );

    if (isNameExists) {
      alert(`${name} вже є в телефонній книзі!`);
      return;
    }

    dispatch(addContact({ name: name.trim(), number: number.trim() }));
    setName("");
    setNumber("");
  };

  const handleFilterChange = (e) => {
    dispatch(findAction(e.target.value));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <div>
        <PhoneEditor onChange={handleInputChange} name={name} number={number} onAddContact={handleAddContact} />
        <PhoneList contacts={filteredContacts} filter={filter} onFilterChange={handleFilterChange} onDelete={handleDeleteContact} />
      </div>
    </div>
  );
};

export default App;