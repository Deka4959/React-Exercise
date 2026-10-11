import { useForm } from "react-hook-form";





function App() {

  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Registration successful!");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
          Register Form
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          
          <label className="mb-1 block font-semibold">Name</label>

          <input
            type="text"
            placeholder="Enter your name"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            })}
            className="mb-2 w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
          />

          {errors.name && (
            <p className="mb-4 text-sm text-red-500">
              {errors.name.message}
            </p>
          )}

          
          <label className="mb-1 block font-semibold">Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
            className="mb-2 w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
          />

          {errors.email && (
            <p className="mb-4 text-sm text-red-500">
              {errors.email.message}
            </p>
          )}

          
          <label className="mb-1 block font-semibold">Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className="mb-2 w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
          />

          {errors.password && (
            <p className="mb-4 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}

          <button type="submit"
            className="mt-4 w-full rounded-lg bg-blue-600 p-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;