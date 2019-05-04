import React from 'react'

import './styles/details.css'

function Details(props) {
    //En caso de que todavia no se haya seleccionado ningun character
    if (!props.character && props.lengthArrayCharacter) {
        return <p>Click in any card to see a character details or search your favourite character</p>
    } else if (!props.lengthArrayCharacter) {
        return <p>Character not found. Please try again</p>
    }
    
    //A partir de que ya se haya seleccionado de un character y que la busqueda sea exitosa

    //A partir de que ya se haya seleccionado un character y que la busqueda no encuentre nada
    if (props.lengthArrayCharacter) {
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
    } else {
        return <p>Character not found. Please try again</p>
    }
    
    
    
}

export default Details