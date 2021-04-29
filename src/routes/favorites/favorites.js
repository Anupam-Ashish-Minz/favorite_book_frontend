import React, { useState, useEffect } from 'react';

const Favorites = () => {
  const [data, setData] = useState(null);

  useEffect(()=>{
    fetch("/api/favorites")
      .then(data => data.json())
      .then(data => setData(data));
  }, [])
  return (
    <div>
      <div>favorites page</div>
      <div>{data?.user}</div>
      <div>{data?.books.map(book => <div key={book.book_id}> favorite book id: {book.book_id}</div>)}</div>
    </div>
  );
};

export default Favorites;
