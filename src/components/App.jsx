import { ContactList } from "./ContactList/ContactList";
import { SearchBox } from "./SearchBox/SearchBox";
import { ContactForm } from "./ContactForm/ContactForm";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContact } from '../redux/operations';
import {selectError, selectIsLoading } from "../redux/selectors";

export const App = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
 // console.log(loading)
  const error = useSelector(selectError);

  useEffect(() => {
  dispatch(fetchContact());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {loading && !error && <b>Request in progress...</b>}
    </>
  );
};

export default App;
import "./App.css";

