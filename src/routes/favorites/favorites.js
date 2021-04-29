import React, { useState, useEffect } from 'react';

const Favorites = () => {
  const [data, setData] = useState(null);

  useEffect(()=>{
    fetch("/api/favorites")
      .then(data => data.json())
      .then(data => setData(data));
  }, []);
  return (
    <div>
      <div>favorites page</div>
      <div>{data?.user}</div>
      <div>{data?.books.map(book => <>
        <div>favorite book: {book.book_id}</div>
        <img 
          src={`http://covers.openlibrary.org/b/olid/${book.book_id}-M.jpg`} 
          key={book.book_id} 
          alt="book cover"
        />
      </>)}
      </div>
    </div>
  );
};

export default Favorites;
