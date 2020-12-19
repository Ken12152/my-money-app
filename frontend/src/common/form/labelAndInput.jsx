import React from 'react'
import Grid from '../layout/grid'

export default props => (
    <Grid cols={ props.cols }>
        <div className="form-group">
            <label htmlFor={ props.name }>{ props.label }</label>
            <input type={ props.type } className="form-control"
                placeholder={ props.placeholder } readOnly={ props.readOnly }
                { ...props.input } />
        </div>
    </Grid>
)
