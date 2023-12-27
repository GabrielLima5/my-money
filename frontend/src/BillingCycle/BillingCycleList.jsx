import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getList, showUpdate, showDelete } from './billingCycleActions'
import './BillingCycleList.css'

class BillingCycleList extends Component{
    componentWillMount(){
        this.props.getList()
    }

    renderRows(){
        const list = this.props.list || []
        return list.map(cycle => (
            <>
                <div className="responsive">
                    <span>Nome</span>
                    <span>Mês</span>
                    <span>Ano</span>
                </div>
                <tr key={cycle.id}>
                    <td>{cycle.name}</td>
                    <td>{cycle.month}</td>
                    <td>{cycle.year}</td>
                    <td>
                        <button className="btn btn-warning mx-2" onClick={() => this.props.showUpdate(cycle)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger mx-2" onClick={() => this.props.showDelete(cycle)}>
                            <i className="fa fa-trash-o"></i>
                        </button>
                    </td>
                </tr>
            </>
            
        ))
    }
    
    render(){
        return(
            <div className='cycle-list'>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th className='table-actions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({list: state.billingCycle.list})
const mapDispatchToProps = (dispatch) => bindActionCreators({getList, showUpdate, showDelete}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)