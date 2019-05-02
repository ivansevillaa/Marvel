import React from 'react'

import './styles/details.css'

function Details(props) {
    if (!props.character) {
        return <p>Loading...</p>
    }
    return(
        <div className="Details">
            <h2 className="Details-title">{ props.character.name }</h2>
            <img 
                className="Details-image"
                src={ props.character.src } 
                alt={ props.character.name }
                width={ 300 }
                height={ 300 }    
            />
            <p className="Details-description">{ props.character.description }</p>
            <div className="Details-comics">
                <h4>Comics in which it appears({ props.character.comics.available })</h4>
                { props.character.comics.items.map((item) => {
                    return(
                        <li key={ item.resourceURI }>{ item.name }</li>
                    )
                })}
            </div>
        </div>
    )
}

export default Details