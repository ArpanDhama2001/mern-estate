import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        return;
      }
      setError(null);
      setLoading(false);
      navigate("/signin");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="my-5 max-w-lg mx-auto p-3">
      <h1 className="text-3xl text-center font-semibold">Sign Up</h1>
      <form onSubmit={handleSubmit} className="my-5 flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg w-full"
          id="username"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg w-full"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg w-full"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="w-full bg-slate-700 uppercase text-white p-3 rounded-lg disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
      </form>
      <div className="flex gap-3">
        <p className="">Already have an account?</p>
        <Link to="/signin">
          <span className="uppercase text-blue-700">Sign In</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
};

export default SignUp;
