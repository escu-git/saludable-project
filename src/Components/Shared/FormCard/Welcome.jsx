import React from 'react'

const Welcome = ({fn}) => {
    return (
        <div>
            WELCOME!

            <button onClick={()=>fn()}></button>
        </div>
    )
}

export default Welcome
