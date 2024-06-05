import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../components/Firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../ThemeContext";
import React, { useContext } from "react";

const Account = () => {
  const navigate = useNavigate();
  const [userdata, setUserdata] = useState("");

  async function fetchData() {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserdata(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } else {
        console.log("User is not logged in");
      }
    });
  }

  function handleLogout() {
    auth
      .signOut()
      .then(() => {
        console.log("User signed out successfully");
        navigate("/signup");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex justify-center items-center min-h-screen font-sans"
    style={{ backgroundColor: theme }}
    >
      <div className="w-80 p-8 rounded-lg shadow-md flex bg-white text-gray-500 flex-col items-center">
        <h2 className="text-3xl mb-3 font-bold">{userdata.name}</h2>
        <p className="text-lg mb-6 opacity-80">{userdata.email}</p>
        <button
          className="py-2 w-full mt-3 bg-[#222222] hover:bg-[#000000] text-white rounded-md  text-lg  transition-colors duration-300 ease-in-out font-normal"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Account;
