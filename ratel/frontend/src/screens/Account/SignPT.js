import React, { useEffect, useState, useCallback } from "react";
import "./Sign.scss";
import { useSelector, useDispatch } from "react-redux";
import { requestSign } from "../../store/actions/User";
import { Redirect } from "react-router-dom";

const SignPT = props => {
    const dispatch = useDispatch();
    const sign = useSelector(state => state.userReducer.sign);

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
            dispatch(requestSign({ username, password }));
        },
        [username, password]
    );

    return (
        <div className="login-wrap">
            <div className="login-box">
                <div className="form-box">
                    <div className="form">
                        <div className="text">아이디</div>
                        <input type="email" value={username} onChange={onChangeUsername}></input>
                    </div>
                    <div className="form">
                        <div className="text">비밀번호</div>
                        <input type="password" value={password} onChange={onChangePassword}></input>
                    </div>
                    {sign == true ? <div className="notice">회원 가입이 완료 되었습니다.</div> : null}
                </div>
                <button onClick={onSubmit}>회원가입</button>
            </div>
        </div>
    );
};

export default SignPT;
