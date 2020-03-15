import React, { Component } from 'react';
import mus1 from '../../Ananda.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './styles/Global.css';

class Music extends Component {
    render() {
        return(
            <div className="homeContainer">
                <text className="header">My Music</text>
                <div className="blueContainer">
                    <Carousel controls={false} keyboard={true} interval={3500} fade>
                        <Carousel.Item>
                            <img className="musicPic" src={mus1} alt="First slide"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="musicPic" src={mus1} alt="Second slide"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="musicPic" src={mus1} alt="Second slide"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="musicPic" src={mus1} alt="Second slide"/>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        )
    }
}

export default Music;