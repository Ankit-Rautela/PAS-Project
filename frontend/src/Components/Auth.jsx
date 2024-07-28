import { useState } from "react";
import "../App.css";
import "../index.css";
import AuthPopup from "./AuthPopup";


const Auth = () => {

    const [showLogin, setShowLogin] = useState(false);

    return (
        <>
            <h1 className="text-7xl text-center text-black-400">Auth Page</h1>
            <button onClick={() => setShowLogin(true)} className="bg-violet-500 px-4 py-2 rounded-lg text-lg">Click me!</button>
            {showLogin && <AuthPopup onClose={() => setShowLogin(false)} />}
        </>
    );
};

export default Auth;
