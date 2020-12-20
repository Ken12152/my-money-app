import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { create, update, remove, init } from './billingCycleActions'

import Content from '../common/template/content'
import ContentHeader from '../common/template/contentHeader'
import Tabs from '../common/tab/tabs'
import TabsContent from '../common/tab/tabsContent'
import TabsHeader from '../common/tab/tabsHeader'
import TabHeader from '../common/tab/tabHeader'
import TabContent from '../common/tab/tabContent'
import BillingCycleList from './billingCycleList'
import BillingCycleForm from './billingCycleForm'

class BillingCycle extends Component {

    componentWillMount() {
        this.props.init()
    }

    render() {
        return (
            <div>
                <ContentHeader title="Ciclos de Pagamentos" small="Cadastro" />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label="Listar" icon="bars" target="tabList" />
                            <TabHeader label="Incluir" icon="plus" target="tabCreate" />
                            <TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
                            <TabHeader label="Excluir" icon="trash-o" target="tabDelete" />
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id="tabList">
                                <BillingCycleList />
                            </TabContent>

                            <TabContent id="tabCreate">
                                <BillingCycleForm onSubmit={ this.props.create } 
                                    submitLabel="Incluir" submitClass="info" />
                            </TabContent>

                            <TabContent id="tabUpdate">
                                <BillingCycleForm onSubmit={ this.props.update } 
                                    submitLabel="Atualizar" submitClass="warning" />
                            </TabContent>

                            <TabContent id="tabDelete">
                                <BillingCycleForm onSubmit={ this.props.remove } 
                                    submitLabel="Remover" submitClass="danger" readOnly />
                            </TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({ tab: state.tab })

const mapDispatchToProps = dispatch => bindActionCreators(
    { init, create, update, remove }, dispatch
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BillingCycle)