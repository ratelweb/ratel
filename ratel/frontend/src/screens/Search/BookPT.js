import React, { useEffect, useState, useCallback, shallowEqual } from "react";
import "./Book.scss";
import search from "assets/search.png";
import { useSelector, useDispatch } from "react-redux";
import { requestBook } from "../../store/actions/Book";
import { requestAddFavor } from "../../store/actions/Recom";
import { Link } from "react-router-dom";

const BookPT = props => {
    const dispatch = useDispatch();
    let books = useSelector(state => state.bookReducer.book.search);
    const user = useSelector(state => state.userReducer.user);

    const [keyword, setKeyword] = useState("");

    const searchBook = keyword => {
        dispatch(requestBook(keyword));
    };

    const addFavor = (isbn, user) => {
        const info = { isbn: isbn, username: "min" };
        console.log("info: ", info);
        dispatch(requestAddFavor(info));
    };

    const onChangeKeyword = useCallback(e => {
        setKeyword(e.target.value);
    });

    useEffect(() => {
        dispatch(requestBook(keyword));
    }, []);

    return (
        <div className="wrap">
            <div className="search-bar">
                <input type="text" className="input" placeholder="도서 검색" onChange={onChangeKeyword}></input>
                <img src={search} onClick={() => searchBook(keyword)}></img>
            </div>
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
                                <div className="favor" onClick={() => addFavor(book.isbn, user)}>
                                    즐겨찾기
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default BookPT;
