import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { findAction } from "../../redux/filterSlice";

import { fetchContacts, addContact, deleteContact } from "../../redux/slice";
import {
  selectContacts,
  selectFilter,
  selectError,
  selectIsLoading,
  selectFilteredContacts,
} from "../../redux/selectors";

import { logout } from "../../redux/authSlice";
import { selectUser, selectIsLoggedIn } from "../../redux/authSelectors";

import PhoneEditor from "../../components/PhoneEditor/PhoneEditor";
import PhoneList from "../../components/PhoneList/PhoneList";
import UserMenu from "../../components/UserMenu/UserMenu";

const ContactsPage = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const user = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    dispatch(fetchContacts());
  }, [dispatch, isLoggedIn, navigate]);

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

  const handleLogout = () => {
    dispatch(logout());
  };

  if (isLoading) {
    return (
      <div className="App">
        <div>
          <h1>Phonebook</h1>
          <UserMenu userEmail={user?.email} onLogout={handleLogout} />
        </div>
        <div>Loading contacts...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="App">
        <div>
          <h1>Phonebook</h1>
          <UserMenu userEmail={user?.email} onLogout={handleLogout} />
          <div>
            Error: {error}
            <button onClick={() => dispatch(fetchContacts())}>Retry</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div>
        <h1>Phonebook</h1>
        <UserMenu userEmail={user?.email} onLogout={handleLogout} />
      </div>
      <div>
        <PhoneEditor
          onChange={handleInputChange}
          name={name}
          number={number}
          onAddContact={handleAddContact}
        />
        <PhoneList
          contacts={filteredContacts}
          filter={filter}
          onFilterChange={handleFilterChange}
          onDelete={handleDeleteContact}
        />
      </div>
    </div>
  );
};

export default ContactsPage;
