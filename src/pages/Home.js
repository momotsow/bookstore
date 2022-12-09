import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const HomePage = () => {
  const bookList = [
    {
      booktitle: ' Rich dad Poor dad',
      author: ' Robert Kiyosaki',
      id: uuidv4(),
    },
  ];

  return (
    <div className="container">
      <div className="inner">
        <BookList bookList={bookList} />
        <InputBook />
      </div>
    </div>
  );
};
export default HomePage;
