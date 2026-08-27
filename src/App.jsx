import UseForm from "./UseForm";

function App() {
  const { form, handleChange, handleSubmit } = UseForm();

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
      />

      <label>Email</label>
      <input
        type="email" name="email" value={form.email} onChange={handleChange}
      />

      <button type="submit">Submit</button>

    </form>
  );
}

export default App;