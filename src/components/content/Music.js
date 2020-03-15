import React, { Component } from 'react';
import mus1 from '../../Ananda.jpg';
import mus2 from '../../serenedreams.jpg'
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
                            <a href="http://hyperurl.co/1rgth9" target="_blank">
                                <img className="musicPic" src={mus1} alt="First slide"/>
                            </a>
                        </Carousel.Item>
                        <Carousel.Item>
                            <a href="http://hyperurl.co/ahsxhh" target="_blank">
                                <img className="musicPic" src={mus2} alt="Second slide"/>
                            </a>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        )
    }
}

export default Music;