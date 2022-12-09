import React from 'react';
import PropTypes from 'prop-types';

const BookItem = ({ book }) => {
  const {
    booktitle, author, id,
  } = book;
  return (
    <li key={id}>
      <p>
        Book:
        {booktitle}
      </p>
      <p>
        Author:
        {author}
      </p>
      <button type="button" itemID={id}>
        Remove
      </button>
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    booktitle: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;
