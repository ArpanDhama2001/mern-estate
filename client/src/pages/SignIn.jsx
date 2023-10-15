import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="my-5 max-w-lg mx-auto p-3">
      <h1 className="text-3xl text-center font-semibold">Sign In</h1>
      <form className="my-5 flex flex-col gap-4">
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
          Sign In
        </button>
      </form>
      <div className="flex gap-3">
        <p className="">{`Don't have an account?`}</p>
        <Link to="/signup">
          <span className="uppercase text-blue-700">Sign Up</span>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
