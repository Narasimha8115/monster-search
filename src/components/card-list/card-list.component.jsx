import React from 'react';
import './card-list.styles.css';//css importing
import {Card} from '../card/card.component.jsx' // imported card for sending the data to the card component

export const CardList = (props) =>{
    return(
        <div className='card-list'>

            {
                props.monsters.map(monster => 
                     (
                    // sending the card-list to card - component
                    <Card key = {monster.id} monster={monster}/>
                    
                    ))
            }
        </div>
    )
} 