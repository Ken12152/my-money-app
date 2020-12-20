import React, { Component } from 'react'
import { bindAcitonCreators, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList, showTabWithData } from './billingCycleActions'

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
                    <button className="btn btn-warning" onClick={ () => this.props.showTabWithData('tabUpdate', billingCycle) }>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className="btn btn-danger" onClick={ () => this.props.showTabWithData('tabDelete', billingCycle) }>
                        <i className="fa fa-trash"></i>
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
                        <th className="table-action">Action</th>
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
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showTabWithData }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BillingCycle)