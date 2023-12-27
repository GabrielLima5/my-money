import React, {Component} from 'react'

import axios from 'axios'
import ContentHeader from '../common/template/ContentHeader/ContentHeader'
import Content from '../common/template/Content/Content'
import ValueBox from '../common/widgets/ValueBox/ValueBox'
import Row from '../common/layout/Row/Row'

class Dashboard2 extends Component{
    constructor(props){
      super(props)
      this.state = {
        credit: 0,
        debit: 0
      }
    }

    componentWillMount(){
      const BASE_URL = 'http://localhost:3003/api'
      axios.get(`${BASE_URL}/billingcycles/summary`)
        .then((resp) => this.setState(resp.data))
    }

    render(){
      const {credit, debit} = this.state
      return(
        <>
          <ContentHeader title="Dashboard" small="Versão 1.0" />
          <Content>
            <Row>
              <ValueBox cols="12 12 6 4 4" color='success' icon='bank' value={`R$ ${credit}`} text='Créditos' />
              <ValueBox cols="12 12 6 4 4" color='danger' icon='credit-card' value={`R$ ${debit}`} text='Débitos' />
              <ValueBox cols="12 12 12 4 4" color='primary' icon='money' value={`R$ ${credit - debit}`} text='Saldo final' />
            </Row>
          </Content>
        </>
      )
    }
}

export default Dashboard2