import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Field, arrayInsert, arrayRemove } from 'redux-form'

import Grid from '../common/layout/grid'
import If from '../common/opertor/if'
import Input from '../common/form/Input'

class ItemList extends Component {

    add(index, item = {}) {
        if(!this.props.readOnly) {
            this.props.arrayInsert('billingCycleForm', this.props.field, index, item)
        }
    }

    remove(index) {
        if(!this.props.readOnly && this.props.list.length > 1) {
            this.props.arrayRemove('billingCycleForm', this.props.field, index)
        }
    }

    renderRows() {
        const list = this.props.list || []

        return list.map((item, index) => {
            return (
                <tr key={ index }>
                    <td>
                        <Field name={`${this.props.field}[${index}].name`} component={ Input } 
                            placeholder="Informe o nome" readOnly={ this.props.readOnly } />
                    </td>
                    <td>
                        <Field name={`${this.props.field}[${index}].value`} component={ Input } 
                            placeholder="Informe o valor" readOnly={ this.props.readOnly } />
                    </td>
                    <If test={ this.props.showStatus }>
                        <td>
                            <Field name={`${this.props.field}[${index}].status`} component="select" 
                                className="form-control" placeholder="Informe o status" readOnly={ this.props.readOnly }>
                                <option value="">---</option>
                                <option value="PAGO">PAGO</option>
                                <option value="PENDENTE">PENDENTE</option>
                                <option value="AGENDADO">AGENDADO</option>
                            </Field>
                        </td>
                    </If>
                    <td>
                        <button type="button" className="btn btn-primary" onClick={ () => this.add(index + 1) }>
                            <i className="fa fa-plus"></i>
                        </button>
                        <button type="button" className="btn btn-info" onClick={ () => this.add(index + 1, item)}>
                            <i className="fa fa-clone"></i>
                        </button>
                        <button type="button" className="btn btn-danger" onClick={ () => this.remove(index)}>
                            <i className="fa fa-trash-o"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <Grid cols={ this.props.cols }>
                <fieldset>
                    <legend>{ this.props.legend }</legend>
                </fieldset>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Value</th>
                            <If test={ this.props.showStatus }>
                                <th>Status</th>
                            </If>
                            <th className="table-action">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.renderRows() }
                    </tbody>
                </table>
            </Grid>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch )

export default connect(null, mapDispatchToProps)(ItemList)