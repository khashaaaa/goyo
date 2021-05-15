import React from 'react'

const design = {
    position: 'fixed',
    width: '500px',
    height: '300px',
    top: '30%',
    left: '40%',
    backgroundColor: 'white',
    zIndex: '1000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '5px solid lightgray'
}

const btn = {
    position: 'absolute',
    right: '1em',
    top: '1em',
    cursor: 'pointer'
}

export const Cart = ({ exit }) => {

    return (
        <div className="cart" style={design}>
            <p onClick={() => exit()} style={btn}>X</p>
            <p>Your Cart is empty</p>
        </div>
    )
}