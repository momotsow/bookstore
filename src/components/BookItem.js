import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import '../styles/book.css';

function Book(props) {
  const dispatch = useDispatch();
  const [removing, setRemoving] = useState(false);
  const {
    itemid, category, title, author,
  } = props;
  return (

    <div className="book">
      <div className="book-content">
        <div className="book-info">
          <h4 className="book-category">{category}</h4>
          <h2 className="book-title">{title}</h2>
          <h3 className="author">{author}</h3>
          <div className="action-buttons">
            <button className="button-outline" type="button">Comments</button>
            <div className="vertical-divider" />
            <button
              className="button-outline"
              type="button"
              onClick={async () => {
                setRemoving(true);
                await dispatch(removeBook(itemid));
              }}
            >
              {removing ? 'Removing...' : 'Remove'}
            </button>
            <div className="vertical-divider" />
            <button className="button-outline" type="button">Edit</button>
          </div>
        </div>

        <div className="progress-container">
          <div className="circular-progress-container"><div className="circular-progress" /></div>
          <div className="progress-stat">
            <p className="percent-complete">0%</p>
            <p className="completed">Completed</p>
          </div>
          <div className="progress-divider" />
          <div className="current-chapter-container">
            <div>
              <p className="current-chapter-label">CURRENT CHAPTER</p>
              <p className="current-chapter">Introduction</p>
            </div>
            <div><button className="primary-button" type="button">UPDATE PROGRESS</button></div>
          </div>
        </div>
      </div>
    </div>

  );
}

Book.propTypes = {
  itemid: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
