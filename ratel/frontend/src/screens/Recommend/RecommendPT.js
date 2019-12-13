import React, { useEffect, useState } from "react";
import "./Recommend.scss";
import { useSelector, useDispatch } from "react-redux";
import { requestRecom, requestAddFavor } from "../../store/actions/Recom";

const RecommendPT = props => {
    const dispatch = useDispatch();
    const recoms = useSelector(state => state.recomReducer.recom.Recommand, []);
    const user = JSON.parse(localStorage.getItem("id"));

    const addFavor = (isbn, user) => {
        const info = { isbn: isbn, username: user };
        dispatch(requestAddFavor(info));
    };

    useEffect(() => {
        dispatch(requestRecom(user));
    }, []);

    return (
        <div className="wrap1">
            <div className="head">내 추천 목록</div>
            <div className="content">
                {recoms &&
                    recoms.map(recom => {
                        return (
                            <div className="item" key={recom.isbn}>
                                <div className="title">{recom.bookname.replace(/(<([^>]+)>)/gi, "")}</div>
                                <div className="text">저자: {recom.authors.replace(/(<([^>]+)>)/gi, "")}</div>
                                <div className="text">
                                    <img src={recom.image}></img>
                                </div>
                                <div className="text">
                                    {/* {recom.description
                                        .replace(/(<([^>]+)>)/gi, "")
                                         .replace(/&lt;/g, "<")
                                        .replace(/&gt;/g, ">")
                                        .split("&#x0D;")
                                        .map(line => {
                                            return (
                                                <span>
                                                    {line}
                                                    <br />
                                                </span>
                                            );
                                        })} */}
                                </div>
                                <div className="favor" onClick={() => addFavor(recom.isbn, user)}>
                                    즐겨찾기
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default RecommendPT;
