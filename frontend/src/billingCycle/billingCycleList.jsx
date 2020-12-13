import React, { Component } from 'react'
import { bindAcitonCreators, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList } from './billingCycleActions'

class BillingCycle extends Component {

    componentWillMount() {
        this.props.getList()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(billingCycle => (
            <tr key={ billingCycle._id }>
                <td>{ billingCycle.name }</td>
                <td>{ billingCycle.month }</td>
                <td>{ billingCycle.year }</td>
            </tr>
        ))
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Month</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    { this.renderRows() }
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = state => ({ list: state.billingCycles.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BillingCycle)