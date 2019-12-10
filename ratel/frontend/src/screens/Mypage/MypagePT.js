import React, { useEffect, useState } from "react";
import "./Mypage.scss";
import { useSelector, useDispatch } from "react-redux";
import { requestGetFavor } from "../../store/actions/Recom";

const MypagePT = props => {
    // const dispatch = useDispatch();
    //const favors = useSelector(state => state.recomReducer.favor, []);
    //const user = useSelector(state => state.userReducer.user, []);

    useEffect(() => {
        //dispatch(requestGetFavor());
    }, []);

    return (
        <div className="wrap1">
            {/* <div className="head">{user.id}님의 즐겨찾기 목록</div> */}
            <div className="head">님의 즐겨찾기 목록</div>
            <div className="content">
                <div className="item">
                    <div className="title">제목</div>
                    <div className="intro">소개</div>
                </div>

                {/* favors.map(favor => {
                                    return (
                                        <Link to={`/recommend/${recom.id}`}>
                                            <div
                                                className="item"
                                            >
                                                <div className="title">{favor.title}</div>
                                                <div className="intro">{favor.intro}</div>
                                            </div>
                                        </Link>
                                    );
                                })} */}
            </div>
        </div>
    );
};

export default MypagePT;
