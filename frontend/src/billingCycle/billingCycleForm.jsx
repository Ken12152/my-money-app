import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'

import LabelAndInput from '../common/form/LabelAndInput'
import ItemList from './itemList'
import Summary from './summary'
import { init } from './billingCycleActions'

class BillingCycleForm extends Component {

    calculateSummary() {
        const sum = (t, v) => t + v
        return {
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
        }
    }

    render() {
        const { handleSubmit, readOnly, credits, debts } = this.props
        const { sumOfCredits, sumOfDebts } = this.calculateSummary()

        return (
            <form role="form" onSubmit={ handleSubmit }>
                <div className="box-body">
                    <Field name="name" component={ LabelAndInput } 
                        label="Nome" cols="12 4" placeholder="Informe o nome" readOnly={ readOnly } />
                    <Field name="month" component={ LabelAndInput } type="number"
                        label="Mes" cols="12 4" placeholder="Informe o mes" readOnly={ readOnly } />
                    <Field name="year" component={ LabelAndInput } type="number"
                        label="Ano" cols="12 4" placeholder="Informe o ano" readOnly={ readOnly } />

                    <Summary credits={ sumOfCredits } debts={ sumOfDebts } />

                    <ItemList cols="12 12 12 6" list={ credits } 
                        field="credits" legend="Credits" />
                    <ItemList cols="12 12 12 6" list={ debts } 
                        field="debts" legend="Debts" showStatus />
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>
                        { this.props.submitLabel }
                    </button>
                    <button type="button" className="btn btn-secondary"
                        onClick={ this.props.init }>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)

const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({ credits: selector(state, 'credits'), debts: selector(state, 'debts') })

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)