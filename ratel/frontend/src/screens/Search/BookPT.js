import React, { useEffect, useState, useCallback } from "react";
import "./Book.scss";
import search from "assets/search.png";
import { useSelector, useDispatch } from "react-redux";
import { requestBook } from "../../store/actions/Book";
import { Link } from "react-router-dom";

const BookPT = props => {
    const dispatch = useDispatch();
    const books = useSelector(state => state.bookReducer.book, []);

    const [keyword, setKeyword] = useState("");

    // useEffect(() => {}, []);

    const searchBook = keyword => {
        dispatch(requestBook(keyword));
    };

    const onChangeKeyword = useCallback(e => {
        setKeyword(e.target.value);
    });

    return (
        <div className="wrap">
            <div className="search-bar">
                <input type="text" className="input" placeholder="도서 검색" onChange={onChangeKeyword}></input>
                <img src={search} onClick={() => searchBook(keyword)}></img>
            </div>
            <div className="content">
                {books.search &&
                    books.search.map(book => {
                        return (
                            <div className="item" key={book.isbn}>
                                <div className="title">{book.bookname.replace(/(<([^>]+)>)/gi, "")}</div>
                                <div className="author">{book.author}</div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default BookPT;
