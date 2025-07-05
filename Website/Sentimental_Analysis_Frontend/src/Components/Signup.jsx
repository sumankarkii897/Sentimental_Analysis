import React from 'react'
import { useForm } from "react-hook-form"
function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  
  return (
    <>


    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-96 border border-black p-6 rounded-md shadow-md bg-white">
        {/* <form>
          <h3 className="text-xl font-semibold mb-4 text-center">Signup</h3>
          <div className="mb-4">
            <label htmlFor="txtUsername" className="block mb-1">Username</label>
            <input
              type="text"
              id="txtUsername"
              placeholder="Username"
              className="w-full px-3 py-2 border rounded-md outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
              type="email"
              id="email"
              placeholder="ABC@gmail.com"
              className="w-full px-3 py-2 border rounded-md outline-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full px-3 py-2 border rounded-md outline-none"
            />
          </div>
          <div className="mt-4 flex justify-between items-center">
            <button className="bg-pink-500 text-white rounded-lg px-4 py-2 hover:bg-pink-700" onClick={()=>{alert(" login Button clicked")}}>
              Signin
            </button>
            <p className="text-sm">
              Already Have Account?{' '}
              <span className="text-blue-500 underline cursor-pointer">
                Login
              </span>
            </p>
          </div>
        </form> */}
          <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-xl font-semibold mb-4 text-center">Signup</h3>

          <div className="mb-4">
            <label htmlFor="username" className="block mb-1">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("username", { required: "Username is required" })}
            />
            {errors.username && <span className="text-red-500 text-sm">{errors.username.message}</span>}
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
                }
              })}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block mb-1">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
          </div>

          <div className="mt-4 flex justify-between items-center">
            <button
              type="submit"
              className="bg-pink-500 text-white rounded-lg px-4 py-2 hover:bg-pink-700"
            >
              Signup
            </button>
            <p className="text-sm">
              Already Have Account?{' '}
              <span className="text-blue-500 underline cursor-pointer">
                Login
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default Signup