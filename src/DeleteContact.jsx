import React, { useContext } from "react";
import { ContactContext } from "./Contactcontext";

import styles from "./AddContact.module.css";

function DeleteContact({ contact }) {
  const { dispatch } = useContext(ContactContext);

  const handleDelete = () => {
    dispatch({
      type: "DELETE_CONTACT",
      payload: contact.id,
    });
  };




  

  return (
    <button onClick={handleDelete} className="bg-blue-400 text-white p-2 m-2 rounded"> 
      Delete
    </button>
  );
}

export default DeleteContact;