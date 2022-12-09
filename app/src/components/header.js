import { Link } from "react-router-dom";
import { useGlobalState } from "../context/GlobalState";

function Header() {
    const [ state, dispatch ] = useGlobalState();

    return(
        <>
            <div className="justify-content-center container">
                <header className="justify-content-center py-3 mb-4 border-bottom">
                    <ul className="nav d-flex flex-wrap justify-content-center">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active link-dark" aria-current="page">Home</Link>
                        </li>
                        {
                            !state.currentUser && (
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link link-dark">Login</Link>
                                </li>
                            )
                        }
                        {
                            !state.currentUser && (
                                <li className="nav-item">
                                    <Link to="/register" className="nav-link link-dark">Register</Link>
                                </li>
                            )
                        }
                        {
                            state.currentUser && (
                                <li className="nav-item">
                                    <Link to="/profile" className="nav-link link-dark">Profile</Link>
                                </li>
                            )
                        }
                        
                    </ul>
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    {/* <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg> */}
                    <span id="appTitle" className="text-center">Why Don't You Take Me Downtown?</span>
                    </a>
                    <p id="pageBio">
                        This is an application you can use to help you figure out where the heck you want to go.
                    </p>

                    
                </header>
            </div>
        </>
    )
}

export default Header;