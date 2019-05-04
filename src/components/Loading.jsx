import React from 'react'

import './styles/loading.css'

function Loading(props) {
    return(
        <div className="Loading">
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loading