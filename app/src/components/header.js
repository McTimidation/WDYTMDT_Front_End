import { Link } from "react-router-dom";
import { useGlobalState } from "../context/GlobalState";
import cheers from '../icons/cheers.png';
import dish from '../icons/dish.png';
import authService from "../services/auth.service";

function Header(props) {
    const [ state, dispatch ] = useGlobalState();

    return(
        <>

        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        {/* <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg> */}
            <span id="appTitle" className="text-center">Take Me Downtown!</span>
        </a>
        <p id="pageBio">
            This is an application you can use to help you figure out where to take a special someone for a meal.<br></br>
            Just answer a few of the questions below and you'll see some relevant recommendations. <br></br>
            You can even register a profile and save the recommendations that you like for the time and day you want to go!

        </p>
        </>
    )
    }
    // const Logout = () => {
    //     localStorage.removeItem("user");
    //     // dispatch({
    //     //     currentUserToken: resp.access,
    //     //     currentUser: data
    //     // })
        
    //     props.setPage('generate');
    // }
    
    // return(
    //     <>
    //         <div id="headerDiv" className="justify-content-center container">
                
    //             <header id="mainHeader" className="justify-content-center py-1 mb-4 border-bottom">
                
    //                 <ul className="nav d-flex flex-wrap justify-content-center">
    //                     <li className="nav-item">
    //                         <Link to="/" className="nav-link active link-dark" onClick={() => {props.setPage('generate')}} aria-current="page">Home</Link>
    //                     </li>
    //                     {
    //                         !state.currentUser && (
    //                             <li className="nav-item">
    //                                 <Link to="/login" className="nav-link link-dark">Login</Link>
    //                             </li>
    //                         )
    //                     }
    //                     {
    //                         !state.currentUser && (
    //                             <li className="nav-item">
    //                                 <Link to="/register" className="nav-link link-dark">Register</Link>
    //                             </li>
    //                         )
    //                     }
    //                     {
    //                         state.currentUser && (
    //                             <li className="nav-item">
    //                                 <Link to="/profile" className="nav-link link-dark">Profile</Link>
    //                             </li>
    //                         )
    //                     }
    //                     {
    //                         state.currentUser && (
    //                             <li className="nav-item">
    //                                 <Link to="/" onClick={Logout} className="nav-link link-dark">Logout</Link>
    //                             </li>
    //                         )
    //                     }
    //                 </ul>
    //                 {
    //                     props.page === 'generate' ? headlines : null
    //                 }
                    
    //             </header>
    //         </div>
    //     </>
    // )


export default Header;