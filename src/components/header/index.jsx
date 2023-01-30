import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import bklogo from "../../asset/images/BK - Logo.png";
import Ikirenga from "../../asset/images/Ikirenga.png";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  function changeLanguage(e) {
    // i18n.changeLanguage(e.target.value);
  }

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
              {t('navigation-about-us')}
            </NavLink>
          </li>
          <li>
            <a className="nav-link" href="#0">
            {t('navigation-earn')}
            </a>
          </li>
          <li>
            <a className="nav-link" href="#0">
            {t('navigation-redeem')}
            </a>
          </li>
          <li>
            <a className="nav-link" href="#0">
            {t('navigation-my-account')}
            </a>
          </li>
        </ul>
        <div className="col-6 text-end py-1 header-color d-flex justify-content-end">
          <p className="border-right-pipe px-3">{t('navigation-welcome')} Mr Chidi Mbulu</p>
          <p className="border-right-pipe px-3">{t("navigation-points")} 65,708</p>
          <p className="px-3">
            <select
              name=""
              id=""
              className="border-0"
              onChange={changeLanguage}
            >
              <option value="en">EN</option>
              <option value="fr">FR</option>
              <option value="rw">RW</option>
            </select>
          </p>
        </div>
      </div>
      <div className="header2">
        <div className="d-flex container">
          <NavLink className="pt-2 col-6" to={"/"}>
            <img className="mx-4" src={bklogo} alt="" />
            <img src={Ikirenga} alt="" />
          </NavLink>
          <div className="col-6 text-end">
            {isLoggedIn ? (
              <button
                className="my-3 logout-btn"
                onClick={() => setIsLoggedIn(false)}
              >
                {t('navigation-logout')}
              </button>
            ) : (
              <button
                onClick={() => setIsLoggedIn(true)}
                className="my-3 login-btn"
              >
                {t('navigation-login')}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
