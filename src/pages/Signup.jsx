import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState, useContext, useEffect } from 'react';
import { auth, db } from '../components/Firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import Token from '../Config/Token';

const Signup = () => {

    const navigate = useNavigate();
    const { setUser } = useContext(Token)
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(()=>{

    },[])

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
        if (!username) newErrors.username = 'Username is required';
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!password) newErrors.password = 'Password is required';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            // Form submission logic
            try {
                await createUserWithEmailAndPassword(auth, email, password)
                const user = auth.currentUser;
                setUser(user.accessToken);
                console.log(user.accessToken);
                console.log("User created successfully!");
                if (user) {
                    await setDoc(doc(db, "users", user.uid), {
                        name: username,
                        email: user.email,
                        password: password
                    })
                }
                navigate('/')
            }
            catch (error) {
                console.error(error.message);
            }
            console.log({ username, email, password });
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-900 to-green-700">
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-12 max-w-2xl">
                <h2 className="text-2xl font-bold mb-6 text-center text-white">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block mb-1 text-white">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            className="w-full bg-transparent text-white placeholder-gray-400 py-2 px-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                            placeholder="Enter your username"
                            value={username}
                            onChange={handleUsernameChange}
                        />
                        {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-1 text-white">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full bg-transparent text-white placeholder-gray-400 py-2 px-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                            placeholder="Enter your email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-1 text-white">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full bg-transparent text-white placeholder-gray-400 py-2 px-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                            placeholder="Enter your password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition-colors duration-300"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
            
        </div>
    );
};

export default Signup;
