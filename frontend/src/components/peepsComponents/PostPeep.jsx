import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import PeepModel from "../../utils/PeepModel";

const PostPeep = ({ setPeeps, getPeeps, user, url }) => {

    const [peepBody, setPeepBody] = useState(``);
    const [postError, setPostError] = useState({ message: `` });
    const [postedPeep, setPostedPeep] = useState(false);
    const peeperName = user.peeperName;
    const peeperLastName = user.peeperLastName;
    const userName = user.userName;

    const bodyHandler = e => {
        setPeepBody(e.target.value);
    };

    const submitHandler = e => {
        e.preventDefault();
        const date = new Date().toISOString();
        let peepToPost = new PeepModel(peeperName, peeperLastName, userName, date, peepBody);
        postPeep(peepToPost);
    };

    const postPeep = async peep => {
        try {
            await axios.post(`${url}/post`, peep);
            setPostedPeep(true);
            resetPeep();
        }
        catch (err) {
            setPostError({ message: `Something went wrong: ${err.message}` });
            alert(postError);
        }
        finally {
            setPeeps(await getPeeps());
        }
    };

    const resetPeep = () => setPeepBody(``);

    return (
        <>
            {postedPeep && <Navigate to={`/`} />}
            <div className="row justify-content-md-center pb-5">
                <h1 className="col-md-auto display-6" style={{ fontSize: "6em" }}>Get peeping!</h1>
            </div>
            <div className="container w-50">
                <form onSubmit={submitHandler}>
                    <div className="form-floating ps-5 pe-5">
                        <textarea onChange={bodyHandler} className="form-control" placeholder="Type your peep here" id="floatingTextarea2" style={{ height: '300px' }} required></textarea>
                    </div>
                    <div className="pt-3 ps-5 ms-1 row">
                        <button type="submit" className="btn col-md-auto py-3 px-3" style={{ backgroundColor: "#F5B506" }}>Post</button>
                    </div>
                </form>
            </div>
        </>
    )
};

export default PostPeep;