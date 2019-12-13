import React, { useEffect, useState, useCallback } from "react";
import "./Book.scss";
import search from "assets/search.png";
import { useSelector, useDispatch } from "react-redux";
import { requestPaper } from "../../store/actions/Book";
import { Link } from "react-router-dom";

const PaperPT = props => {
    const dispatch = useDispatch();
    let papers = useSelector(state => state.bookReducer.paper);

    const [keyword, setKeyword] = useState("");

    const searchPaper = keyword => {
        dispatch(requestPaper(keyword));
    };

    const onChangeKeyword = useCallback(e => {
        setKeyword(e.target.value);
    });

    useEffect(() => {
        dispatch(requestPaper(keyword));
    }, []);

    return (
        <div className="wrap">
            <div className="search-bar">
                <input type="text" className="input" placeholder="논문 검색" onChange={onChangeKeyword}></input>
                <img src={search} onClick={() => searchPaper(keyword)}></img>
            </div>
            <div className="content">
                {papers && papers == {} ? (
                    <div>영어로 입력해주세요</div>
                ) : (
                    papers &&
                    papers.paper &&
                    papers.paper.map(paper => {
                        return (
                            <div className="item">
                                <div className="title">{paper.title.replace(/(<([^>]+)>)/gi, "")}</div>
                                <div className="text">저자: {paper.author.replace(/(<([^>]+)>)/gi, "")}</div>
                                <div className="text">발행기관: {paper.publisher.replace(/(<([^>]+)>)/gi, "")}</div>
                                <div className="text">
                                    <img src={paper.preview}></img>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default PaperPT;
