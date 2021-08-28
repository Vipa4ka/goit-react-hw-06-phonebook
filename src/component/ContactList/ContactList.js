import React from "react";
import PropTypes from "prop-types";
import styles from "./ContactList.module.scss";
import { connect } from "react-redux";
import contactsActions from "../../redux/contacts-actions";

const ContactList = ({ contacts, onDeleteContacts }) => {
  return (
    <ul className={styles.ul}>
      {contacts.map(({ id, name, number }) => (
        <li className={styles.li} name={name} key={id}>
          {name}: {number}
          <button
            className={styles.button}
            type="button"
            onClick={() => onDeleteContacts(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDeleteContacts: PropTypes.func.isRequired,
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = ({ state: { contacts, filter } }) => ({
  contacts: getVisibleContacts(contacts, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContacts: (contactId) =>
    dispatch(contactsActions.deleteContacts(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
