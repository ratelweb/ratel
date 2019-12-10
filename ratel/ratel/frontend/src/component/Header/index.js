import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = props => {
    return (
        <div className="header">
            <Link to="/" style={{ textDecoration: "none" }}>
                <div className="logo">
                    <div className="logo-text">Ratel</div>
                    <img className="logo-icon" src={require("assets/logo.png")} />
                </div>
            </Link>
            <Link to="/menu1" className="menu">
                <div>Menu</div>
            </Link>
            <Link to="/menu2" className="menu">
                <div>Menu</div>
            </Link>
            <Link to="/menu3" className="menu">
                <div>Menu</div>
            </Link>
            <Link to="/menu4" className="menu">
                <div>Menu</div>
            </Link>
            <div className="user">
                <img className="user-icon" src={require("assets/user.png")} />
            </div>
        </div>
    );
};

export default Header;
