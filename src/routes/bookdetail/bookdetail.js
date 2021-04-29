import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/spinner/spinner';
import SlideShow from '../../components/slideshow/slideshow';

const BookDetail = () => {
  const bookId = useParams();
  const [book, setBook] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [authors, setAuthors] = useState([]);
  const [cover, setCover] = useState(null);

  const addBook = () => {
    fetch("/api/favorites/add_book", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ "book_id": bookId.id })
    });
  }

  useEffect(()=>{
    setIsLoading(true);
    fetch(`https://openlibrary.org/works/${bookId.id}.json`)
      .then(data => data.json())
      .then(data => {
        setBook(data)
        setIsLoading(false);
      });
  }, []);

  useEffect(()=>{
    if (book?.authors) {
      setIsLoading(true);
      for (let author of book.authors) {
        fetch(`https://openlibrary.org${author.author.key}.json`)
          .then(data => data.json())
          .then(data => { 
            setAuthors(data);
            setIsLoading(false);
          });
      }
    }
  }, [book])

  return (
    <>
      { isLoading ? <Spinner /> :
      <div>
        <div>book details</div>
        <div>{book?.title}</div>
        <div>{authors.name}</div>
        <SlideShow covers={book.covers} />
        <div>
        <button onClick={addBook}>add to favorites</button>
        </div>
      </div>
      }
    </>
  )
};

export default BookDetail;
