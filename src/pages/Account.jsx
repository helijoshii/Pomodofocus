/* eslint-disable react/jsx-no-duplicate-props */
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../components/Firebase";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";


const Account = () => {

    const navigate = useNavigate();
    const [userdata, setUserdata] = useState('');

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
        }
        );
    }

    function handleLogout(){
        auth.signOut().then(() => {
            console.log("User signed out successfully");
            navigate("/signup")
        }).catch((error) => {
            console.error("Error signing out:", error);
        });
    
    }

    useEffect(() => {
        fetchData();
    },[]);

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#548059] text-white font-sans">
            <div className="w-80 p-8 rounded-2xl shadow-md flex flex-col items-center">
                <h2 className="text-3xl mb-3 font-bold">{userdata.name}</h2>
                <p className="text-lg mb-6 opacity-80">{userdata.email}</p>
                <button
                    className="px-6 py-3 text-lg bg-[#000] rounded-lg cursor-pointer transition duration-300 ease-in-out hover:bg-[#9d4edd] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
                    onClick={handleLogout}
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Account;