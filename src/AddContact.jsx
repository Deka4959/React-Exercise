
import React, { useState, useContext } from "react";
import { ContactContext } from "./Contactcontext";

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
    <form
      onSubmit={handleSubmit}
      className="w-96 mx-auto mt-10 p-6 bg-blue-100 rounded-xl shadow-lg"
    >
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="bg-amber-500 p-2 m-2 rounded"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        className="bg-amber-500 p-2 m-2 rounded"
      />

      <input
        type="text"
        name="number"
        placeholder="Phone number"
        value={form.number}
        onChange={handleChange}
        className="bg-amber-500 p-2 m-2 rounded"
      />

      <button
        type="submit"
        className="bg-blue-400 text-white p-2 m-2 rounded"
      >
        Add Contact
      </button>
    </form>
  );
}

export default AddContact;



