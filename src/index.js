import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
//components
import Home from './components/home';
import Posts from './components/posts';
import Profiles from './components/profiles'
import Post_item from './components/post_item';

const App = ()=>{
    return(
        <BrowserRouter>
            <header>   
                <Link to='/'>Home</Link><br/>
                <Link to='/posts'>Posts</Link><br/>
                <Link to={
                    {
                        pathname:'/profiles',
                    }
                }>Profiles</Link>
                <hr/>
            </header>
            
            <Switch>
                <Route path="/profiles" component={Profiles}/>
                <Route path="/posts/1" component={Post_item}/>
                <Route path="/posts" component={Posts}/>
                <Route path="/" exact component={Home}/>
            </Switch>

            
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

