import React from 'react'

import './styles/character.css'

function Character(props) {
    return(
        <div className="Character">
            <div className="Character-left">
                <img 
                    src={ props.src } 
                    alt={ props.name }
                    width={ 100 }
                    height={ 100 }    
                />
            </div>
            <div className="Character-rigth">
                <h3>{ props.name }</h3>
                { props.description && <hr /> }
                { props.description.length > 50 
                    ? props.description.substr(0, 50) + ' ...'
                    : props.description
                }
            </div>
        </div>
    )
}

export default Character