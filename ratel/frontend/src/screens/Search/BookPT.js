import React, { useEffect, useState, useCallback, shallowEqual } from "react";
import "./Book.scss";
import search from "assets/search.png";
import { useSelector, useDispatch } from "react-redux";
import { requestBook } from "../../store/actions/Book";
import { Link } from "react-router-dom";

const BookPT = props => {
    const dispatch = useDispatch();
    let books = useSelector(state => state.bookReducer.book.search);

    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        // books = null;
        //dispatch(requestBook(keyword));
        //dispatch(requestBook(keyword));
        // books = useSelector(state => state.bookReducer.book.search, []);
    });

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
            {books ? <div className="result">"{keyword}"에 관한 검색 결과</div> : null}
            <div className="content">
                {books &&
                    books.map(book => {
                        return (
                            <div className="item" key={book.isbn}>
                                <div className="title">{book.bookname.replace(/(<([^>]+)>)/gi, "")}</div>
                                <div className="text">저자: {book.author.replace(/(<([^>]+)>)/gi, "")}</div>
                                <div className="text">
                                    <img src={book.image}></img>
                                </div>
                                <div className="text">
                                    {book.description
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

export default BookPT;
