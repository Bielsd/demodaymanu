import React, { Component } from 'react';
import './Menu.css';

class Menu extends Component 
{
    render() {
        return(
            
            <header>  
            
             <nav class="botoes">
                
                <div>
                    <img src="" alt="logo"/>
                    <input placeholder="O que deseja?"></input>
                    <button>Clique</button>
                </div> 
            
                 <div>
                    <a>Como fiz esse site</a>          
                    <a>Porque fiz esse site</a>          
                    <a>Aonde fiz esse site</a>
                </div>

             </nav>          
           
            </header>
            
        );
    }
}

export default Menu;
