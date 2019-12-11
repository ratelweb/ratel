import React, { useEffect, useState } from "react";
import "./Recommend.scss";
import { useSelector, useDispatch } from "react-redux";
import { requestRecom } from "../../store/actions/Recom";

const RecommendPT = props => {
    const dispatch = useDispatch();
    const recoms = useSelector(state => state.recomReducer.recom, []);

    useEffect(() => {
        dispatch(requestRecom());
    }, []);

    return (
        <div className="wrap1">
            <div className="head">내 추천 목록</div>
            <div className="content">
                <div className="item">
                    <div className="title">제목</div>
                    <div className="intro">소개</div>
                </div>

                {/* recoms.map(recom => {
                                    return (
                                        <Link to={`/recommend/${recom.id}`}>
                                            <div
                                                className="item"
                                            >
                                                <div className="title">{recom.title}</div>
                                                <div className="intro">{recom.intro}</div>
                                            </div>
                                        </Link>
                                    );
                                })} */}
            </div>
        </div>
    );
};

export default RecommendPT;
