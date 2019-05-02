import React from 'react'

import './styles/characters-list.css'

import Character from './Character.jsx'

function Characters(props) {
    return(
        <div className="Characters">
            { props.characters && 
                props.characters.map((item) => {
                    return(
                        <Character 
                            key={ item.id }
                            comics={ item.comics }
                            name={ item.name }
                            description={ item.description }
                            src={ `${ item.thumbnail.path }.${ item.thumbnail.extension }` }
                            handleOpenDetails={ props.handleOpenDetails }
                        />
                    )
                })
            }
        </div>
    )
}

export default Characters