import React, { Component } from 'react';
import video from "../../bgVideo.mp4";
import './styles/Global.css';

class Body extends Component {
    render() {
        return(
            <div>
                <video autoPlay loop muted className="bgVideo">
                    <source src={video} type="video/mp4"/>
                </video>
            </div>
        )
    }
}

export default Body;