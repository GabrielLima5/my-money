import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getSummary } from './dashboardActions'
import ContentHeader from '../common/template/ContentHeader/ContentHeader'
import Content from '../common/template/Content/Content'
import ValueBox from '../common/widgets/ValueBox/ValueBox'
import Row from '../common/layout/Row/Row'

class Dashboard extends Component{
    componentWillMount(){
      getSummary()
    }

    render(){
      const {credit, debit} = this.props
      
      return(
        <>
          <ContentHeader title="Dashboard" small="Versão 1.0" />
          <Content>
            <Row>
              <ValueBox cols="12 12 6 4" color='success' icon='bank' value={`R$ ${credit}`} text='Créditos' />
              <ValueBox cols="12 12 6 4" color='danger' icon='credit-card' value={`R$ ${debit}`} text='Débitos' />
              <ValueBox cols="12 12 12 4" color='primary' icon='money' value={`R$ ${credit - debit}`} text='Saldo final' />
            </Row>
          </Content>
        </>
      )
    }
}

const mapStateToProps = (state) => {
  return {
    credit: state.dashboard.credit,
    debit: state.dashboard.debit
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({getSummary}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)