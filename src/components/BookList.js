import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './BookItem';
import Form from './Form';
import { getBooks } from '../redux/books/books';
import '../styles/bookList.css';

function BookList() {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <ul className="books">
      <li className="">

        {books.map((el) => (
          <Book
            key={el.item_id}
            itemid={el.item_id}
            category={el.category}
            title={el.title}
            author={el.author}
          />
        ))}
      </li>
      <Form />

    </ul>

  );
}

export default BookList;
