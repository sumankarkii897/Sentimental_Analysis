
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
// setting states
  const [apiError, setApiError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    try {
      // sending request to server
      const response = await axios.post("http://127.0.0.1:8000/api/login/", data);

      // to save both access and refresh tokens
      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);

      setSuccessMessage("Login successful!");
      setApiError(null);

      // Redirect to home after 2s
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      setApiError(error.response?.data?.error || "An error occurred during login.");
      setSuccessMessage(null);
      console.error("Login error:", error.response?.data);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-96 border border-black p-6 rounded-md shadow-md bg-white">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-xl font-semibold mb-4 text-center">Login</h3>

          <div className="mb-4">
            <label htmlFor="username" className="block mb-1">Username</label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border rounded-md outline-none"
              placeholder="Username"
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && <span className="text-red-500 text-sm">{errors.username.message}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border rounded-md outline-none"
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
          </div>

          {apiError && <div className="mb-4 text-red-500 text-sm">{apiError}</div>}
          {successMessage && <div className="mb-4 text-green-500 text-sm">{successMessage}</div>}

          <div className="mt-4 flex justify-between items-center">
            <button
              type="submit"
              className="bg-pink-500 text-white rounded-lg px-4 py-2 hover:bg-pink-700"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
            <p className="text-sm">
              Not registered?{" "}
              <span className="text-blue-500 underline cursor-pointer">
                <Link to="/signup">Signup</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
