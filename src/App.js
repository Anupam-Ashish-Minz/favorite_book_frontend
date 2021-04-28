import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './routes/home/home';
import About from './routes/about/about';
import Login from './routes/login/login';
import BookDetail from './routes/bookdetail/bookdetail';
import Navbar from './components/navbar/navbar';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <div className="pageContainer">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/works/:id">
              <BookDetail />
            </Route>
            <Route path="/" render={()=><h1>404</h1>} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
