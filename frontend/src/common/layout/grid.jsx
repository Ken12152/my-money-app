import React, { Component } from 'react'

export default class Grid extends Component {

    toCssClass(numbers) {
        const size = ['xs', 'sm', 'md', 'lg']

        const cols = numbers ? numbers.split(' ') : []
        let classes = ''

        for(let i = 0; i < 4; i++) {
            classes += cols[i] ? `col-${size[i]}-${cols[i]} ` : ''
        }

        return classes
    }

    render() {
        const gridClasses = this.toCssClass(this.props.cols || '12')
        return (
            <div className={ gridClasses }>
                { this.props.children }
            </div>
        )
    }
}