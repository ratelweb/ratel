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
            
            <Link to="/search" className="menu">
                <div>도서/논문 검색</div>
            </Link>
            <Link to="/recommend" className="menu">
                <div>추천 도서</div>
            </Link>
            <Link to="/login" className="menu">
                <div className="user">
                    <div>로그인/회원가입</div>
                    {/* <img className="user-icon" src={require("assets/user.png")} /> */}
                </div>
            </Link>
        </div>
    );
};

export default Header;
