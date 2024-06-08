/* eslint-disable react/prop-types */
import { useState } from 'react';
import Time from './SetTime';


const UserContextProvider = ({ children }) => {


    const [longBreak, setLongBreak] = useState(900);
    const [shortBrake, setShortBrake] = useState(300);
    const [Pomodoro, setPomodoro] = useState(1500)
    return (
        <>
            <Time.Provider value={{ longBreak, setLongBreak, shortBrake, setShortBrake, Pomodoro, setPomodoro }}>
                {children}
            </Time.Provider>
        </>
    )
}

export default UserContextProvider