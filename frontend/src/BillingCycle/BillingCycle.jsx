import React, { Component } from 'react'

import ContentHeader from '../common/template/ContentHeader/ContentHeader'
import Content from '../common/template/Content/Content'

import Tabs from '../common/tab/Tabs'
import TabsHeader from '../common/tab/TabsHeader'
import TabHeader from '../common/tab/TabHeader'
import TabsContent from '../common/tab/TabsContent'
import TabContent from '../common/tab/TabContent'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { init, create, update, remove } from './billingCycleActions'
import List from './BillingCycleList'
import Form from './BillingCycleForm'

class BillingCycle extends Component{

    componentWillMount(){
      this.props.init()
    }

    render(){
      return(
        <div>
          <ContentHeader title="Ciclos de Pagamento" small="Cadastro" />
          <Content>
            <Tabs>
              <TabsHeader>
                <TabHeader label="Listar" icon="bars" target="tabList"></TabHeader>
                <TabHeader label="Incluir" icon="plus" target="tabCreate"></TabHeader>
                <TabHeader label="Alterar" icon="pencil" target="tabUpdate"></TabHeader>
                <TabHeader label="Excluir" icon="trash-o" target="tabDelete"></TabHeader>
              </TabsHeader>
              <TabsContent>
                <TabContent id="tabList">
                  <List />
                </TabContent>
                <TabContent id="tabCreate">
                  <Form method='post' onSubmit={this.props.create} />
                </TabContent>
                <TabContent id="tabUpdate">
                  <Form method='put' onSubmit={this.props.update} />
                </TabContent>
                <TabContent id="tabDelete">
                  <Form method='delete' onSubmit={this.props.remove} />
                </TabContent>
              </TabsContent>
            </Tabs>
          </Content>
        </div>
      )
    }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({create, update, remove, init}, dispatch)
}

export default connect(null, mapDispatchToProps)(BillingCycle)