import React, { Component } from 'react'

import './styles/character.css'

class Character extends Component {
    handleClick = () => {
        this.props.handleOpenDetails(this.props)
    }

    render() {
        return(
            <div 
                className="Character"
                onClick={ this.handleClick }
            >
                <div className="Character-left">
                    <img 
                        src={ this.props.src } 
                        alt={ this.props.name }
                        width={ 100 }
                        height={ 100 }    
                    />
                </div>
                <div className="Character-rigth">
                    <h3>{ this.props.name }</h3>
                    { this.props.description && <hr /> }
                    { this.props.description.length > 50 
                        ? this.props.description.substr(0, 50) + ' ...'
                        : this.props.description
                    }
                </div>
            </div>
        )
    }  
}

export default Character