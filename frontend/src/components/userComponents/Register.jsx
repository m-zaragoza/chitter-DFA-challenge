import axios from 'axios';
import { useState } from "react";
import { Navigate } from 'react-router-dom';

const Register = ({ url }) => {

    const [user, setUser] = useState({
        peeperName: ``,
        peeperLastName: ``,
        userName: ``,
        email: ``,
        password: ``
    });

    const [registered, setRegistered] = useState(false);

    const userHandler = e => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const submitHandler = e => {
        e.preventDefault();
        postUser(user);
    };

    const postUser = async user => {
        try {
            const res = await axios.post(`${url}/register`, user);
            alert(res.data.message);
            setRegistered(true);
            resetUser();
        }
        catch (err) {
            alert(`Something went wrong: ${err.message}`);
            resetUser();
        }
    };

    const resetUser = () => setUser({ peeperName: ``, peeperLastName: ``, userName: ``, email: ``, password: `` });

    return (
        <>
            {registered && <Navigate to={`/login`} />}
            <div className="row justify-content-md-center pb-5">
                <h1 className="col-md-auto display-6 pb-5" style={{ fontSize: "6em" }}>Register and get peeping!</h1>
            </div>
            <div className="container w-50">
                <form onSubmit={submitHandler}>
                    <div className="mb-3">
                        <label htmlFor="firstName" className="form-label">First name</label>
                        <input type="text" className="form-control" name="peeperName" value={user.peeperName} onChange={userHandler} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="lastName" className="form-label">Last name</label>
                        <input type="text" className="form-control" name="peeperLastName" value={user.peeperLastName} onChange={userHandler} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="userName" className="form-label">User name</label>
                        <input type="text" className="form-control" name="userName" value={user.userName} onChange={userHandler} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="emailAddress" className="form-label">Email address</label>
                        <input type="email" className="form-control" name="email" value={user.email} onChange={userHandler} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" value={user.password} onChange={userHandler} required />
                    </div>
                    <button type="submit" className="btn py-3 px-3" style={{ backgroundColor: "#F5B506" }}>Register</button>
                </form>
            </div>
        </>
    )
};

export default Register;