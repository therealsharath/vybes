import React, { Component } from 'react';
import Home from './Home';
import Music from './Music';
import './styles/Global.css';

class Content extends Component {
    render() {
        return(
            <div>
                <Home id="home"/>
                <Music id="music"/>
            </div>
        )
    }
}

export default Content;