import { signInWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { auth } from "../components/Firebase";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import Token from "../Config/Token";

const Signin = () => {
  const { setUser } = useContext(Token);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    if (!password) {
      newErrors.password = "Password is required";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Handle logout logic here
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in successfully!");
      setUser(auth.currentUser.accessToken);
      navigate("/");
    } else {
      setErrors(validationErrors);
    }
  };
  const handleCreateAccountClick = (e) => {
    e.preventDefault();
    navigate("/signup");
  };
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className="flex items-center flex-col min-h-screen"
      style={{ backgroundColor: theme }}
    >
      <div className="my-12">
        <p className="text-white text-5xl pt-2">Pomodofocus</p>
        <p className="pt-6 text-xl text-[#fcfbfb]">Login</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md max-w-md w-9/12"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-[#777676] text-sm text-left uppercase font-light  mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="example@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border bg-[#EFEFEF] border-gray-300 text-[#555555] rounded-sm placeholder:text-sm placeholder:font-thin focus:outline-none focus:ring-2 focus:ring-[#548059] placeholder:text-[#C4C4C4]"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-[#777676] text-sm text-left uppercase font-light  mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border bg-[#EFEFEF] border-gray-300 text-[#555555] rounded-sm placeholder:text-sm placeholder:font-thin focus:outline-none focus:ring-2 focus:ring-[#548059]"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-[#222222] text-white p-3 rounded-sm  hover:bg-[#000000] font-normal text-md mt-3 transition-colors duration-300"
        >
          Log in
        </button>
        <p className="font-thin text-sm mt-5 text-slate-400">
          Don't have an account?{" "}
          <a href="" onClick={handleCreateAccountClick} className="underline">
            Create Account
          </a>
        </p>
      </form>
    </div>
  );
};

export default Signin;
