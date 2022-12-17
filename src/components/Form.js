import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import '../styles/addbook.css';

function Form() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };
  const handleGenreChange = (e) => {
    setCategory(e.target.value);
  };

  const submitBookToStore = () => {
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category,
    };
    dispatch(addBook(newBook));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.children[1].children[0].value = null;
    e.target.children[1].children[1].value = null;
    setTitle('');
    setAuthor('');
  };

  return (
    <>
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form action="#" onSubmit={handleSubmit}>
        <div className="add-form d-flex">
          <input className="input title-input" type="text" placeholder="Book Title .." onChange={(e) => handleTitleChange(e)} />
          <input className="input author-title" placeholder="Author" onChange={(e) => handleAuthorChange(e)} />
          <select className="selector input category-input" id="books" name="books" onChange={(e) => handleGenreChange(e)}>
            <option value="Fiction">Fiction</option>
            <option value="Action">Action</option>
            <option value="Adventure">Adventure</option>
            <option value="Romance">Romance</option>
          </select>
          <button type="button" onClick={(e) => submitBookToStore(e)}>ADD BOOK</button>
        </div>
      </form>
    </>
  );
}

export default Form;
