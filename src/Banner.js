import React, { Component } from 'react';
import BannerCss from './Banner.css';
import roda from './img/roda.png';
class Banner extends Component{
    render(){
        return(
            <div class="Banner">
                <div class="roda">
                <img src={roda}/></div>
            </div>

        );
    }
}

export default Banner;