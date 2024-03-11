import { useSelector } from "react-redux";
import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { filterSelector } from "../../redux/filtersSlice";

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(filterSelector);
  const visibleContacts = contacts.filter((item) =>
    item.name.toLowerCase().includes(filters.toLowerCase())
  );

  return (
    <ul className={css.contactList}>
      {visibleContacts.map((contact) => {
        return <Contact key={contact.id} item={contact} />;
      })}
    </ul>
  );
};
