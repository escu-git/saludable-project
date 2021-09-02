import React from 'react'

const Welcome = ({fn}) => {
    return (
        <div>
            <h2>WELCOME!</h2>
            <button onClick={()=>fn(true)}>CONTINUE</button>
        </div>
    )
}

export default Welcome
