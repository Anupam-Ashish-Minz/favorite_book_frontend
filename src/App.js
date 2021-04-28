import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './routes/home/home';
import About from './routes/about/about';
import Login from './routes/login/login';
import Profile from './routes/profile/profile';
import BookDetail from './routes/bookdetail/bookdetail';
import Favorites from './routes/favorites/favorites';
import Navbar from './components/navbar/navbar';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
      fetch("/api/loginStatus")
          .then(data => data.json())
          .then(data => setIsLoggedIn(data));
  }, []);

  return (
    <div>
      <Router>
        <Navbar isLoggedIn={isLoggedIn} />
        <div className="pageContainer">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/login">
              { isLoggedIn ? <Redirect to="/profile" /> : <Login /> }
            </Route>
            <Route exact path="/profile">
              { !isLoggedIn ? <Redirect to="/login" /> : <Profile /> }
            </Route>
            <Route exact path="/works/:id">
              <BookDetail />
            </Route>
            <Route exact path="/favorites">
              <Favorites />
            </Route>
            <Route path="/" render={()=><h1>404</h1>} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
