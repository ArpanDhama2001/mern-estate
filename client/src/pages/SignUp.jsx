import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="my-5 max-w-lg mx-auto p-3">
      <h1 className="text-3xl text-center font-semibold">Sign Up</h1>
      <form className="my-5 flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg w-full"
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg w-full"
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg w-full"
        />
        <button className="w-full bg-slate-700 uppercase text-white p-3 rounded-lg">
          Sign Up
        </button>
      </form>
      <div className="flex gap-3">
        <p className="">Already have an account?</p>
        <Link to="/signin">
          <span className="uppercase text-blue-700">Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
