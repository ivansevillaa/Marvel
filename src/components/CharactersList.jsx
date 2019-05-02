import React from 'react'

import './styles/characters-list.css'

import Character from './Character.jsx'

function Characters(props) {
    console.log(props.characters)
    return(
        <div className="Characters">
            { props.characters && 
                props.characters.map((item) => {
                    return(
                        <Character 
                            key={ item.id }
                            name={ item.name }
                            description={ item.description }
                            src={ `${ item.thumbnail.path }.${ item.thumbnail.extension }` }
                        />
                    )
                })
            }
        </div>
    )
}

export default Characters