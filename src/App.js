
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import About from './components/About';
import Users from './components/Users';
import Search from './components/Search';
import UserDetail from './components/UserDetail'
import {useState, useEffect} from 'react';
import axios from 'axios';

function App() {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);

  // useEffect( async() => {
  //   // axios always returns a promise --> async op'n
  //   // the api can be anything written by the backend developer
  //   const res = await axios.get('https://api.github.com/users') //api call
  //   setUsers(res.data)
  // }, [] )

  const searchName = async(name) => {
    const res = await axios.get(`https://api.github.com/search/users?q=${name}`)
    setUsers(res.data.items)
  }


  const clearUser = () => {
    return setUsers([])
  }


  // to get the details of the individual user
  const getDetails = async(login) => {
    const res = await axios.get(`https://api.github.com/users/${login}`)
    setUser(res.data)
    console.log(res)
  }


  //to get 5 repos of an individual user
  const getRepos = async(userName) => {
    const res = await axios.get(`https://api.github.com/users/${userName}/repos?per_page=5&sort=asc`)
    setRepos(res.data)
    console.log(res)
  }


  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route exact path= "/" render={ props => (
            <>
            <Search searchName={searchName} showClear={users.length>0 ? true: false} clearUser={clearUser} />
            <Users users={users} />
            </>
            
          )} />
        
        <Route exact path= "/about" component= {About} />
        <Route exact path= "/user/:anything" render={ props => (
          <UserDetail getDetails={getDetails} user={user} {...props} getRepos={getRepos} repos={repos} />
        )} />
        </Switch>
      </div>
      
    </Router>
  );
}

export default App;
