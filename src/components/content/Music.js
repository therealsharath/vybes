import React, { Component } from 'react';
import mus1 from '../../Ananda.jpg';
import './styles/Global.css';

class Music extends Component {
    render() {
        return(
            <div className="homeContainer">
                <text className="header">My Music</text>
                <div className="blueContainer">
                    <img src={mus1} className="musicPic" />
                </div>
            </div>
        )
    }
}

export default Music;