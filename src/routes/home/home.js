import React, { useState, useEffect } from 'react';
//import searchIcon from '../../../assets/search_icon.svg';
import Spinner from '../../components/spinner/spinner';
import styles from './home.module.css';

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
    <div className={styles.baseContainer}>
      <input type="text" name="bookSearch" onChange={e=>setSearchField(e.target.value)}/>
      <button onClick={performSearch}>search</button>
      { !isLoading ?  <>
        <div>search compleated {books?.numFound} books found</div>
        { books?.docs.map(book => <Book book={book} />) }
      </> : <Spinner /> 
      }
    </div>
  );
};

const Book = (props) => {
  return (
    <div className={styles.bookContainer}>
      <div className={styles.backdrop}>
        <img src={`http://covers.openlibrary.org/b/id/${props.book.cover_i}-M.jpg`} alt="" />
      </div>
      <h3>{props.book?.title}</h3>
      <h4>{props.book?.author_name}</h4>
    </div>
  );
};

export default Home;
