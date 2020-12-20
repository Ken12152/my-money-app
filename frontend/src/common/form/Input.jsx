import React from 'react'

export default props => (
    <input className="form-control" 
        type={ props.type } readOnly={ props.readOnly } 
        placeholder={ props.placeholder } { ...props.input } />
)
