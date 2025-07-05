import { useForm } from "react-hook-form"
export default function Login() {
   const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-96 border border-black p-6 rounded-md shadow-md bg-white">
        {/* <form>
          <h3 className="text-xl font-semibold mb-4 text-center">Login</h3>
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
              Login
            </button>
            <p className="text-sm">
              Not registered?{' '}
              <span className="text-blue-500 underline cursor-pointer">
                Signup
              </span>
            </p>
          </div>
        </form> */}
        <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <h3 className="text-xl font-semibold mb-4 text-center">Login</h3>
      
<div className="mb-4">
  <label htmlFor="username" className="block mb-1">Username</label>
  <input type="text" id="username" className="w-full px-3 py-2 border rounded-md outline-none" placeholder="Username"  {...register("username",{required:"Username is required"})}/>
  {errors.username && <span  className="text-red-500 text-sm">{errors.message}</span>}
 
</div>
<div className="mb-4">
  <label htmlFor="password" className="block mb-1">Password</label>
  <input type="password" id="password" className="w-full px-3 py-2 border rounded-md outline-none" placeholder="Password" {...register("password",{required:"Password is required"})}/>
  {errors.password && <span  className="text-red-500 text-sm">{errors.message}</span>}
 
</div>
<div className="mt-4 flex justify-between items-center">
            <button
              type="submit"
              className="bg-pink-500 text-white rounded-lg px-4 py-2 hover:bg-pink-700"
            >
              Login
            </button>
            <p className="text-sm">
             Not registered?{' '}
              <span className="text-blue-500 underline cursor-pointer">
                Signup
              </span>
            </p>
          </div>
      
    </form>

      </div>
    </div>
  );
}
