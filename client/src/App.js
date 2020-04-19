import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register'
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import AddExperience from './components/profile-forms/AddExperience';
import AddEducation from './components/profile-forms/AddEducation';
import Profiles from './components/Profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import Post from './components/post/Post';
import PrivateRoute from './components/routing/PrivateRoute';
// Redux
import { Provider } from 'react-redux'
import store from './store'
import './App.css';

if(localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store={store}>
      <>
        <Router>
            <Navbar />
            <Route exact path='/' component={Landing} />
            <section className="container">
              <Alert />
              <Switch>
                <Route path='/register' component={Register} />
                <Route path='/login' component={Login} />
                <Route path='/developers' component={Profiles} />
                <Route path='/developer/:id' component={Profile} />
                <PrivateRoute path='/dashboard' component={Dashboard} />
                <PrivateRoute path='/create-profile' component={CreateProfile} />
                <PrivateRoute path='/edit-profile' component={EditProfile} />
                <PrivateRoute path='/add-experience' component={AddExperience} />
                <PrivateRoute path='/add-education' component={AddEducation} />
                <PrivateRoute path='/posts' component={Posts} />
                <PrivateRoute path='/post/:id' component={Post} />
              </Switch>
            </section>
        </Router>
      </>
    </Provider>
)}

export default App;
