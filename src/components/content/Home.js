import React, { Component } from 'react';
import full from '../../mainPhoto.jpg';
import './styles/Global.css';

class Home extends Component {
    render() {
        return(
            <div className="homeContainer">
                <div className="greyContainer">
                    <img src={full} className="fullPic"></img>
                    <div className="des">
                        I am a aspiring Music Producer from&nbsp;
                        <text className="I1">In</text>
                        <text className="I2">di</text>
                        <text className="I3">a.</text>
                        <br/>
                        I sprinkle Indian culture into my music.
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;