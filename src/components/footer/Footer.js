import React, { Component } from 'react';
import { FaInstagram, FaTwitter, FaYoutube, FaSoundcloud, FaApple, FaSpotify } from 'react-icons/fa';
import { Icon } from '@iconify/react';
import tiktokIcon from '@iconify/icons-simple-icons/tiktok';
import './styles/Global.css';

class Footer extends Component {
    render() {
        return(
            <section id="socials" className="barBody">
                <div className="barItems">
                    <a href="https://open.spotify.com/artist/4y6wVyxekLvpVeZI2KMNaV/" target="_blank"><FaSpotify /></a>
                    <a href="https://soundcloud.com/vvyybes/" target="_blank"><FaSoundcloud /></a>
                    <a href="https://music.apple.com/us/artist/vybes/1458516125/" target="_blank"><FaApple /></a>
                    <a href="https://www.instagram.com/vvyybes/" target="_blank"><FaInstagram /></a>
                    <a href="https://twitter.com/vvyybes/" target="_blank"><FaTwitter /></a>
                    <a target="_blank"><Icon icon={tiktokIcon} /></a>
                    <a href="https://www.youtube.com/channel/UCMJhrjre0gCBmgGu7HTNJnQ/" target="_blank"><FaYoutube /></a>
                </div>
            </section>
        )
    }
}

export default Footer;