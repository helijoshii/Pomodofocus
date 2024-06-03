import { signInWithEmailAndPassword } from 'firebase/auth';
import { useContext, useState } from 'react';
import { auth } from '../components/Firebase';
import { useNavigate } from 'react-router-dom';
import Token from '../Config/Token';


const Signin = () => {

    const {setUser} = useContext(Token);
    const navigate = useNavigate();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!password) {
            newErrors.password = 'Password is required';
        }
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            // Handle logout logic here
            await signInWithEmailAndPassword(auth, email, password);
            console.log('User signed in successfully!');
            setUser(auth.currentUser.accessToken);
            navigate('/');

        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#548059]">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-md max-w-md w-9/12"
            >
                <h2 className="text-2xl font-bold mb-6">LogIn</h2>
                <div className="mb-4">
                    <label htmlFor="email" className="block font-medium mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#548059]"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block font-medium mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#548059]"
                    />
                    {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#548059] text-white py-2 rounded-md hover:bg-[#3e5e43] transition-colors duration-300"
                >
                    LogIn
                </button>
            </form>

        </div>
    );
};

export default Signin;
