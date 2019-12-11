import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { requestLogout } from "store/actions/User";

const Header = props => {
    const dispatch = useDispatch();

    //const [id, setId] = useState(localStorage.getItem("id"));

    const user = useSelector(state => state.userReducer.user);

    const onLogout = useCallback(e => {
        // e.preventDefault();
        dispatch(requestLogout());
        //setUsername(localStorage.getItem("id"));
    }, []);

    return (
        <div className="header">
            <div className="logo">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <div className="logo-text">Ratel</div>
                    <img className="logo-icon" src={require("assets/logo.png")} />
                </Link>
            </div>

            <Link to="/book" className="menu">
                <div>도서 검색</div>
            </Link>
            <Link to="/paper" className="menu">
                <div>논문 검색</div>
            </Link>
            <Link to="/recommend" className="menu">
                <div>추천 도서</div>
            </Link>
            {user ? (
                <div className="account">
                    <Link to="/mypage" className="login">
                        마이페이지
                    </Link>
                    <Link to="/" className="sign" onClick={() => onLogout()}>
                        로그아웃
                    </Link>
                </div>
            ) : (
                <div className="account">
                    <Link to="/login" className="login">
                        로그인
                    </Link>
                    <Link to="/sign" className="sign">
                        회원가입
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Header;
