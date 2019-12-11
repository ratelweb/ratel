import React, { useEffect, useState, useCallback } from "react";
import "./Login.scss";
import { useSelector, useDispatch } from "react-redux";
import { requestLogin } from "../../store/actions/User";
import { Redirect } from "react-router-dom";

const LoginPT = props => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.userReducer.user);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onChangeUsername = useCallback(e => {
        setUsername(e.target.value);
    });
    const onChangePassword = useCallback(e => {
        setPassword(e.target.value);
    });
    const onSubmit = useCallback(
        e => {
            e.preventDefault();
            dispatch(requestLogin({ username, password }));
        },
        [username, password]
    );

    return (
        <div className="login-wrap">
            {user == username && <Redirect to="/"></Redirect>}
            <div className="login-box">
                <form onSubmit={onSubmit}>
                    <div className="form-box">
                        <div className="form">
                            <div className="text">아이디</div>
                            <input type="text" value={username} onChange={onChangeUsername}></input>
                        </div>
                        <div className="form">
                            <div className="text">비밀번호</div>
                            <input type="password" value={password} onChange={onChangePassword}></input>
                        </div>
                    </div>
                    <button>로그인</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPT;
