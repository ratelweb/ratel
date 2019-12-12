import React, { useEffect, useState } from "react";
import "./Mypage.scss";
import { useSelector, useDispatch } from "react-redux";
import { requestGetFavor } from "../../store/actions/Recom";

const MypagePT = props => {
    const dispatch = useDispatch();
    const favors = useSelector(state => state.recomReducer.favor.favors, []);
    const user = useSelector(state => state.userReducer.user, []);
    const user1 = localStorage.getItem("id");

    useEffect(() => {
        
        dispatch(requestGetFavor(user));
    }, []);

    return (
        <div className="wrap1">
            <div className="head">{user1} 님의 즐겨찾기 목록</div>
            <div className="content">
                {favors &&
                    favors.map(favor => {
                        return (
                            <div className="item" key={favor.isbn}>
                                <div className="title">{favor.bookname.replace(/(<([^>]+)>)/gi, "")}</div>
                                <div className="text">저자: {favor.author.replace(/(<([^>]+)>)/gi, "")}</div>
                                <div className="text">
                                    <img src={favor.bookImageURL}></img>
                                </div>
                                <div className="text">
                                    {favor.description
                                        .replace(/(<([^>]+)>)/gi, "")
                                        .split("&#x0D;")
                                        .map(line => {
                                            return (
                                                <span>
                                                    {line}
                                                    <br />
                                                </span>
                                            );
                                        })}
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default MypagePT;
