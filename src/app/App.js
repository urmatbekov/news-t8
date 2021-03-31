import React from 'react';
import { Route } from 'react-router';
import Navbar from '../components/Navbar';
import CreatePost from '../screens/CreatePost';
import Home from '../screens/Home';
import PostDetail from '../screens/PostDetail';

const App = () => {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <div className="container shadow-sm border">
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/create" exact>
                        <CreatePost />
                    </Route>
                    <Route path="/post/:id" exact>
                        <PostDetail />
                    </Route>
                </div>
            </main>
        </div>
    );
};

export default App;