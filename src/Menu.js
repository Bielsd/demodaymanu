import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component 
{
    render() {
        return(
            
            <header>  
            <a>
            <img src="https://vignette.wikia.nocookie.net/logopedia/images/8/89/New_Doritos_Logo.png/revision/latest?cb=20130305015621" alt=""/>
            </a>
            <form> 
            <input placeholder="O que deseja?"></input>
            <button>Clique</button>
            </form>
            <nav class="botoes">
            <a>Como fiz esse site</a>          
            <a>Porque fiz esse site</a>          
            <a>Aonde fiz esse site</a>
            </nav>          
            </header>
            
        );
    }
}

export default Menu;
