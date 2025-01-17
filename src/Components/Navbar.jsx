import { Link } from "react-router-dom";
import './Footer.css';

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg py-3 px-5">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src="./Images/Background/logo (6).png" alt="" /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ms-5" id="navbarSupportedContent">
                        <ul className="navbar-nav me-5 ms-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-3 ">
                                <Link className="text-decoration-none  fw-semibold m " to={"/"}>Home</Link>
                            </li>
                            <li class="nav-item mx-3">
                                <Link className="  fw-semibold m " to={"/About"}>About Us</Link>
                            </li>
                            <li class="nav-item mx-3">
                               <Link className="fw-semibold m" to={"/Couses"}>Couses</Link>
                            </li>
                           
                            <li class="nav-item mx-3">
                                <Link className="  fw-semibold m" to={"/Contact"}>Contact Us</Link>
                            </li>
                        </ul>
                       
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;