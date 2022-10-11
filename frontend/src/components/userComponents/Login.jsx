import axios from 'axios';
import { useState } from "react";
import { Navigate } from 'react-router-dom';

const Login = ({ url, setUser }) => {

    const [loginUser, setLoginUser] = useState({
        email: ``,
        password: ``
    });

    const [loggedIn, setLoggedIn] = useState(false);

    const loginHandler = e => {
        const { name, value } = e.target;
        setLoginUser({
            ...loginUser,
            [name]: value
        });
    };

    const submitHandler = e => {
        e.preventDefault();
        postLogin(loginUser);
    };

    const postLogin = async loginUser => {
        const res = await axios.post(`${url}/login`, loginUser);
        alert(res.data.message);
        setUser(res.data.user);
        resetLogin();
        setLoggedIn(res.data.user ? true : false);
    };

    const resetLogin = () => setLoginUser({ email: ``, password: `` });

    return (
        <>
            {loggedIn && <Navigate to={`/`} />}
            <div className="row justify-content-md-center pb-5">
                <h1 className="col-md-auto display-6" style={{ fontSize: "6em" }}>Good to see you again</h1>
            </div>
            <div className="container w-50">
                <form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label htmlFor="emailAddress" className="form-label">Email address</label>
                        <input type="email" className="form-control" name="email" value={loginUser.email} onChange={loginHandler} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" value={loginUser.password} onChange={loginHandler} required />
                    </div>
                    <button type="submit" className="btn py-3 px-3" style={{ backgroundColor: "#F5B506" }}>Log in</button>
                </form>
            </div>
        </>
    )
};

export default Login;