import React, { useContext } from "react";
import { ContactContext } from "./Contactcontext";

function DeleteContact({ contact }) {
  const { dispatch } = useContext(ContactContext);

  const handleDelete = () => {
    dispatch({
      type: "DELETE_CONTACT",
      payload: contact.id,
    });
  };




  

  return (
    <button onClick={handleDelete}>
      Delete
    </button>
  );
}

export default DeleteContact;