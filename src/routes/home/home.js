import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
        <div className={styles.listOfBooks}>
          { books?.docs.map(book => <Book book={book} key={book.key} />) }
        </div>
      </> : <Spinner /> 
      }
    </div>
  );
};

const Book = (props) => {
  return (
    <div className={styles.bookContainer}>
      <Link to={`${props.book.key}`} className={styles.link}>
        <div className={styles.backdrop}>
          <img src={`https://covers.openlibrary.org/b/id/${props.book.cover_i}-M.jpg`} alt="" />
        </div>
        <p>{props.book?.title}</p>
        <p>{props.book?.author_name}</p>
      </Link>
    </div>
  );
};

export default Home;
