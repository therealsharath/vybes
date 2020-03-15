import React, { Component } from 'react';
import Home from './Home';
import Music from './Music';
import './styles/Global.css';

class Content extends Component {
    render() {
        return(
            <div>
                <section id="home">
                    <Home/>
                </section>
                <section id="music">
                    <Music/>
                </section>
            </div>
        )
    }
}

export default Content;