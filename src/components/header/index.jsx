import React,{ useState } from "react";
import {  useNavigate ,NavLink} from "react-router-dom";
import bklogo from "../../asset/images/BK - Logo.png";
import Ikirenga from "../../asset/images/Ikirenga.png";
const Header = () => {
  let navigate = useNavigate();
  const loggedInUser = () => {
    return false;
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <div className="d-flex container">
        <ul className="col-6 nav-bar m-0">
          <li>
            <NavLink className="nav-link" to={"/about"}>
              About Us
            </NavLink>
          </li>
          <li>
            <a className="nav-link" href="#0">
              Earn
            </a>
          </li>
          <li>
            <a className="nav-link" href="#0">
              Redeem
            </a>
          </li>
          <li>
            <a className="nav-link" href="#0">
              My Account
            </a>
          </li>
        </ul>
        <div className="col-6 text-end py-1 header-color">
          <span className="border-right-pipe px-3">Welcome Mr Chidi Mbulu</span>
          <span className="border-right-pipe px-3">Points 65,708</span>
          <span className="px-3">En</span>
        </div>
      </div>
      <div className="header2">
        <div className="d-flex container">
          <NavLink className="p-1 col-6" to={"/"}>
            <img className="mx-4" src={bklogo} alt="" />
            <img src={Ikirenga} alt="" />
          </NavLink>
          <div className="col-6 text-end">
            {isLoggedIn ? (
              <button
                className="my-3 logout-btn"
                onClick={() => setIsLoggedIn(false)}
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => setIsLoggedIn(true)}
                className="my-3 login-btn"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
