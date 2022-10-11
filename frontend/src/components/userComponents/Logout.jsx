import { useState } from "react";
import { Navigate } from "react-router-dom"

const Logout = ({ setUser }) => {

    const [loggedOut, setLoggedOut] = useState(false);

    const submitHandler = e => {
        e.preventDefault();
        setUser({});
        setLoggedOut(true);
    };

    return (
        <>
            {loggedOut && <Navigate to={`/`} />}
            <div className="container text-center">
                <form onSubmit={submitHandler}>
                    <h1 className="col-md-auto display-6 pb-5" style={{ fontSize: "6em" }}>Are you sure you want to log out?</h1>
                    <button type="submit" className="btn py-3 px-3" style={{ backgroundColor: "#F5B506" }}>I'm sure</button>
                </form>
            </div>
        </>
    )
};

export default Logout;