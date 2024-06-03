import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState, useContext, useEffect } from "react";
import { auth, db } from "../components/Firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Token from "../Config/Token";

const Signup = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(Token);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {}, []);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validate = () => {
    const newErrors = {};
    if (!username) newErrors.username = "Username is required";
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    if (!password) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      // Form submission logic
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        const user = auth.currentUser;
        setUser(user.accessToken);
        console.log(user.accessToken);
        console.log("User created successfully!");
        if (user) {
          await setDoc(doc(db, "users", user.uid), {
            name: username,
            email: user.email,
            password: password,
          });
        }
        navigate("/");
      } catch (error) {
        console.error(error.message);
      }
      console.log({ username, email, password });
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="flex items-center flex-col min-h-screen bg-[#518a58]">
      <div className="my-7">
        <p className="text-white text-5xl pt-2">Pomodofocus</p>
        <p className="pt-6 text-xl text-[#e2e1e1]">Create Account</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md max-w-md w-9/12"
      >
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-[#777676] text-sm text-left uppercase font-light  mb-1"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="username"
            value={username}
            onChange={handleUsernameChange}
            className="w-full px-4 py-2 border bg-[#EFEFEF] border-gray-300 text-[#555555] rounded-sm placeholder:text-sm placeholder:font-thin focus:outline-none focus:ring-2 focus:ring-[#548059] placeholder:text-[#C4C4C4]"
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">{errors.username}</p>
          )}
        </div>

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
            onChange={handleEmailChange}
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
            onChange={handlePasswordChange}
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
          Sign Up
        </button>
        <p className="font-thin text-sm mt-5 text-slate-400">
          Already have an account?{" "}
          <a href="" className="underline">
            Log in
          </a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
