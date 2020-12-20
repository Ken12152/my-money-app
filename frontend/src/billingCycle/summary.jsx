import React from 'react'
import ValueBox from '../common/widget/valueBox'

export default props => (
    <div>
        <ValueBox cols="12 4" color="green" icon="bank"
            value={`R$ ${props.credits}`} text="Credits" />
        <ValueBox cols="12 4" color="red" icon="credit-card"
            value={`R$ ${props.debts}`} text="Debts" />
        <ValueBox cols="12 4" color="blue" icon="money"
            value={`R$ ${props.credits - props.debts}`} text="Consolidado" />
    </div>
)
