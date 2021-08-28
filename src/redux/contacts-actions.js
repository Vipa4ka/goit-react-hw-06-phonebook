import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const addContacts = createAction("contacts/addContacts", (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

const deleteContacts = createAction("contacts/deleteContacts");

const changeFilter = createAction("contacts/changeFilter");

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContacts, deleteContacts, changeFilter };
