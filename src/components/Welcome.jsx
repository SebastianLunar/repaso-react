import React from 'react'

const Welcome = ({name, edad, objeto}) => {
    let numero = 1

    // console.log(...objeto);

    return (
        <div>
            <h1>Welcome visitante {numero}, {name}, {edad}</h1>
        </div>
    )
}

export default Welcome
