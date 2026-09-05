import React, { createContext, useReducer } from "react";

export const ContactContext = createContext();

const initialState = {
  contacts: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [
          ...state.contacts,
          {
            ...action.payload,
            id: Date.now(),
          },
        ],
      };

    case "EDIT_CONTACT":
      return {
        ...state,
        contacts: state.contacts.map((contact) =>
          contact.id === action.payload.id
            ? action.payload
            : contact
        ),
      };

    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };

    default:
      return state;
  }
}

function ContactProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        dispatch: dispatch,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
}

export default ContactProvider;