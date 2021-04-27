import React, { useState, useEffect } from 'react';
//import searchIcon from '../../../assets/search_icon.svg';
import Spinner from '../../components/spinner/spinner';

const Home = () => {
  const [books, setBooks] = useState(null);
  const [searchField, setSearchField] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const performSearch = () => {
    if(searchField) {
      const searchQuery = searchField.split('').map(e => e===' ' ? '+' : e).join('');
      setIsLoading(true);
      fetch("https://openlibrary.org/search.json?q="+searchQuery)
        .then(data => data.json())
        .then(data => { 
          setIsLoading(false);
          setBooks(data);
        })
    }
  }

  useEffect(()=>{
  }, []);

  return (
    <>
      <div>
        <input type="text" name="bookSearch" onChange={e=>setSearchField(e.target.value)}/>
        <button onClick={performSearch}>search</button>
        { !isLoading ?  <>
          <div>search compleated {books?.numFound} books found</div>
          { books?.docs.map(book => <Book book={book} />) }
          </> : <Spinner /> 
        }
      </div>
    </>
  );
};

const Book = (props) => {
  return (
    <div>
      <h2>Book</h2>
      <img src={`http://covers.openlibrary.org/b/id/${props.book.cover_i}-M.jpg`} alt="" />
      <div> cover id: {props.book?.cover_i} </div>
      <div> title: {props.book?.title}</div>
    </div>
  );
};

export default Home;
