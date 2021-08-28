import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./contacts-actions";

const contacts = createReducer([], {
  [actions.addContacts]: (state, { payload }) => {
    const repeatСontact = state.some(
      (contact) => contact.name === payload.name
    );
    if (repeatСontact) {
      alert(`${payload.name} is already in contacts.`);
      return state;
    }
    const contactsState = [...state, payload];
    return contactsState;
  },

  [actions.deleteContacts]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer("", {
  [actions.changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  contacts,
  filter,
});

// const contacts = (state = [], {type, payload}) => {
//     switch (type) {
//         case exportTypesContacts.ADD:
//             return [...state, payload];

//         case exportTypesContacts.DELETE:
//             return state.filter(({id}) =>id !== payload)

//         default:
//             return state;
//     }
// };

// const filter = (state = '', {type, payload}) => {
//     switch (type) {
//         case  exportTypesContacts.CHANGE_FILTER:
//             return payload ;

//         default:
//             return state;
//     }
// }
