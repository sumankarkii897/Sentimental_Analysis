import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [apiError, setApiError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/signup/", data);
      setSuccessMessage("Signup successful! Please log in.");
      setApiError(null);
      setTimeout(() => (window.location.href = "/login"), 2000);
    } catch (error) {
      setApiError(error.response?.data || "An error occurred during signup.");
      setSuccessMessage(null);
      console.error("Signup error:", error.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-96 border border-black p-6 rounded-md shadow-md bg-white">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-xl font-semibold mb-4 text-center">Signup</h3>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-1">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("username", {
                required: "Username is required",
                minLength: { value: 3, message: "Username must be at least 3 characters" },
              })}
            />
            {errors.username && (
              <span className="text-red-500 text-sm">{errors.username.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
              type="email"
              id="email"
              placeholder="ABC@gmail.com"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email.message}</span>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 8, message: "Password must be at least 8 characters" },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
                  message: "Password must include uppercase, lowercase, and a number",
                },
              })}
            />
            {errors.password && (
              <span className="text-red-500 text-sm">{errors.password.message}</span>
            )}
          </div>
          {apiError && (
            <div className="mb-4 text-red-500 text-sm">
              {typeof apiError === "object" ? JSON.stringify(apiError) : apiError}
            </div>
          )}
          {successMessage && (
            <div className="mb-4 text-green-500 text-sm">{successMessage}</div>
          )}
          <div className="mt-4 flex justify-between items-center">
            <button
              type="submit"
              className="bg-pink-500 text-white rounded-lg px-4 py-2 hover:bg-pink-700"
              disabled={isLoading}
            >
              {isLoading ? "Signing up..." : "Signup"}
            </button>
            <p className="text-sm">
              Already Have Account?{" "}
              <span className="text-blue-500 underline cursor-pointer">
                <Link to="/login">Login</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}