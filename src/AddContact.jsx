import React, { useState, useContext } from "react";
import { ContactContext } from "./Contactcontext";
import styles from "./AddContact.module.css";


function AddContact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    number: "",
  });




  

  const { dispatch } = useContext(ContactContext);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: "ADD_CONTACT",
      payload: form,
    });

    setForm({
      name: "",
      email: "",
      number: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
     <input
  type="text"
  name="name"
  placeholder="Name"
  value={form.name}
  onChange={handleChange} className={styles.input}
  
/> <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange} className={styles.input}
      />   <input
        type="text"
        name="number"
        placeholder="Phone number"
        value={form.number}
        onChange={handleChange} className={styles.input}
      />

      <button type="submit"  className={styles.button}>Add Contact</button>
    </form>
  );
}

export default AddContact;