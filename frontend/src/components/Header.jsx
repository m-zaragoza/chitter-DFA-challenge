import { NavLink } from "react-router-dom";

const Header = ({ user }) => {
    if (user && user._id) {
        return (
            <>
                <div className="container mb-5">
                    <nav className="navbar fixed-top px-5">
                        <div className="container mb-5-fluid mb-2 mb-lg-0">
                            <NavLink className="nav-link links" to="/post">Get peeping</NavLink>
                            <NavLink className="nav-link" to="/"><div className="logo"><p> Ch</p></div></NavLink>
                            <NavLink className="nav-link links" to="/logout">Log out</NavLink>
                        </div>
                    </nav>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="container mb-5">
                    <nav className="navbar fixed-top px-5">
                        <div className="container-fluid mb-2 mb-lg-0">
                            <NavLink className="nav-link links" to="/register">Sign up</NavLink>
                            <NavLink className="nav-link" to="/"><div className="logo"><p> Ch</p></div></NavLink>
                            <NavLink className="nav-link links" to="/login"> Log in</NavLink>
                        </div>
                    </nav>
                </div>
            </>
        )
    };
}
export default Header;