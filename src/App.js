import ContactForm from "./component/ContactForm";
import Filter from "./component/Filter";
import ContactList from "./component/ContactList";

export default function App() {
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
}
