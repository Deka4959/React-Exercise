import { useState } from "react";

function UseForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
  };

  return {
    form,
    handleChange,
    handleSubmit,
  };
}

export default UseForm;