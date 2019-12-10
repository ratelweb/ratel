import React, { useEffect, useState } from "react";
import "./Book.scss";
import search from "assets/search.png";
import { useSelector, useDispatch } from "react-redux";
import { requestBook } from "../../store/actions/Book";
import { Link } from "react-router-dom";

const BookPT = props => {
    const dispatch = useDispatch();
    const books = useSelector(state => state.bookReducer.book, []);

    useEffect(() => {
        dispatch(requestBook());
    }, []);

    return (
        <div className="wrap">
            <div className="search-bar">
                <input type="text" className="input"></input>
                <img src={search}></img>
            </div>
            <div className="content">
                <div className="item">
                    <div className="title">제목</div>
                    <div className="intro">소개</div>
                </div>
                {books.map(book => {
                    return (
                        <Link to={`/book/${book.id}`}>
                            <div className="item">
                                <div className="title">{book.text}</div>
                            </div>
                        </Link>
                    );
                })}
                }
            </div>
        </div>
    );
};

export default BookPT;
