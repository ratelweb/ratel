import React, { useEffect, useState, useCallback } from "react";
import "./Sign.scss";
import { useSelector, useDispatch } from "react-redux";

const SignPT = props => {
    // const dispatch = useDispatch();
    //const me = useSelector(state => state.userReducer.userInfo);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const onChangeUsername = useCallback(e => {
        setUsername(e.target.value);
    });
    const onChangePassword = useCallback(e => {
        setPassword(e.target.value);
    });
    const onChangePassword2 = useCallback(e => {
        setPassword2(e.target.value);
    });
    // const onSubmit = useCallback(
    //     e => {
    //         e.preventDefault();
    //         dispatch(loginRequestAction({ username, password }));
    //     },
    //     [username, password]
    // );

    return (
        <div className="login-wrap">
            {/* {me && <Redirect to="/"></Redirect>} */}
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
                    <div className="form">
                        <div className="text">비밀번호 확인</div>
                        <input type="password" value={password2} onChange={onChangePassword2}></input>
                    </div>
                </div>
                <button>회원가입</button>
            </div>
        </div>
    );
};

export default SignPT;
