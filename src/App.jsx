import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    Email: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};

    if (!formData.userName.trim()) {
      errors.fullName = "User name is required";
    }

    if (!formData.Email.trim()) {
      errors.Email = "Email is required";
    }

    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length === 0) {
      console.log("Success");
      setErrors({});
    } else {
      setErrors(validationErrors);
    }

    console.log("FormData:", formData);
  };

  const hanleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-md space-y-4 rounded-xl bg-white p-6 shadow-md"
      >
        <h2 className="mb-5 text-2xl font-bold text-gray-800">
          Create Account
        </h2>

        {/* Username */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            fullName
          </label>

          <input
            type="text"
            name="userName"
            value={formData.fullName}
            onChange={hanleChange}
            placeholder="Enter your username"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
          />

          {errors.fullName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Email
          </label>

          <input
            type="text"
            name="Email"
            value={formData.Email}
            onChange={hanleChange}
            placeholder="Enter your email"
            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
          />

          {errors.Email && (
            <p className="mt-1 text-sm text-red-500">
              {errors.Email}
            </p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full rounded-lg bg-amber-300 px-4 py-3 font-semibold text-gray-800 transition hover:bg-amber-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;