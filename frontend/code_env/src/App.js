import React from 'react';
import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home';
import DetailedView from './pages/detailedView';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreatePost from './pages/createPost';
import UpdatePost from './pages/updatePost';
import MainComponent from './pages/dictionary/mainComponent';
import Contact from './pages/contact';
import AuthenticatedRoute from './common/components/authenticatedRoute';
import About from './pages/about';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/signup" component={Signup} />
                <AuthenticatedRoute path="/home" component={Home} />
                <AuthenticatedRoute path="/dictionary" component={MainComponent} />
                <AuthenticatedRoute path="/details/:id" component={DetailedView} />
                <AuthenticatedRoute path="/create" component={CreatePost} />
                <AuthenticatedRoute path="/edit/:id" component={UpdatePost} />
                <AuthenticatedRoute path="/contact" component={Contact} />
                <AuthenticatedRoute path="/about" component={About} />
            </Switch>
        </Router>
    );
}

export default App;
