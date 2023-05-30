import React from "react";
import { NavLink } from "react-router-dom";
import { BsTelephoneForward } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="logo">
              <img
                src="https://preview.colorlib.com/theme/invest/images/logo.png.webp"
                alt=""
              />
              <h1>INVEST</h1>
            </div>
            <nav>
              <ul className="header-ul">
                <li>
                  <NavLink>BTC $10200</NavLink>
                </li>
                <li>
                  <NavLink>ETH $979</NavLink>
                </li>
                <li>
                  <NavLink>LTC $230</NavLink>
                </li>
                <li>
                  <NavLink style={{ color: "#ffa800" }}>
                    {" "}
                    REGISTER | LOGIN
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <div className="row">
            <ul className="header-ul">
              <li className="bottom-li">
                <NavLink to='/'>HOME</NavLink>
              </li>
              <li className="bottom-li">
                <NavLink>ABOUT US</NavLink>
              </li>
              <li className="bottom-li">
                <NavLink>SERVICES</NavLink>
              </li>
              <li className="bottom-li">
                <NavLink>PORTFOLIO</NavLink>
              </li>
              <li className="bottom-li">
                <NavLink>BLOG</NavLink>
              </li>
              <li className="bottom-li">
                <NavLink to='/admin'>ADD PRODUCT</NavLink>
              </li>
            </ul>

            <ul className="header-ul">
              <li className="bottom-li">
                <NavLink>
                  <BsTelephoneForward style={{margin:"0 5px", color:'black'}}  />
                  +825 25 800 800
                </NavLink>
              </li>
              <li className="bottom-li">
                <NavLink>
                  <AiOutlineMail style={{margin:"0 5px", color:'black'}} />
                  office@invest.com
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
