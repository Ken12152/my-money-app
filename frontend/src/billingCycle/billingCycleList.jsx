import React, { Component } from 'react'
import { bindAcitonCreators, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showUpdate } from './billingCycleActions'

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
                <td>
                    <button className="btn btn-warning" onClick={ () => this.props.showUpdate(billingCycle) }>
                        <i className="fa fa-pencil"></i>
                    </button>
                </td>
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
                        <th>Action</th>
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
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BillingCycle)