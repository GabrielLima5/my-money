import React, { Component } from 'react'
import Grid from '../common/layout/Grid/Grid'
import { Field, arrayInsert, arrayRemove } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import If from '../common/if/If'
import Input from '../common/form/Input'
import './ItemList.css'

class ItemList extends Component{
    add(index, item = {}){
        if (!this.props.readOnly){
            this.props.arrayInsert('billingCycleForm', this.props.field, index, item)
        }
    }

    remove(index){
        if (!this.props.readOnly && this.props.list.length > 1){
            this.props.arrayRemove('billingCycleForm', this.props.field, index)
        }
    }

    renderRows(){
        const list = this.props.list || []
        return list.map((item, index) => (
            <tr key={index}>
                <td>
                    <label className='label'>Nome</label>
                    <Field name={`${this.props.field}[${index}].name`} component={Input} 
                    placeholder='Informe o nome' readOnly={this.props.readOnly} />
                </td>
                <td>
                    <label className='label'>Valor</label>
                    <Field name={`${this.props.field}[${index}].value`} component={Input} 
                    placeholder='Informe o valor' readOnly={this.props.readOnly} />
                </td>
                <If test={this.props.showStatus}>
                    <td>
                        <label className='label'>Status</label>
                        <Field name={`${this.props.field}[${index}].status`} component={Input} 
                        placeholder='Informe o status' readOnly={this.props.readOnly} />
                    </td>
                </If>
                <td>
                    <button type="button" className="mx-2 btn btn-success" onClick={() => this.add(index+1)}>
                        <i className='fa fa-plus'></i>
                    </button>
                    <button type="button" className="mx-2 btn btn-warning" onClick={() => this.add(index+1, item)}>
                        <i className='fa fa-clone'></i>
                    </button>
                    <button className="mx-2 btn btn-danger" onClick={() => this.remove(index)}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render(){
        return(
            <Grid cols={this.props.cols}>
                <fieldset className="my-5 mx-3">
                    <legend>{this.props.legend}</legend>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <If test={this.props.showStatus}>
                                    <th>Status</th>
                                </If>
                                <th className='table-actions'>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        )
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({arrayInsert, arrayRemove}, dispatch)
export default connect(null, mapDispatchToProps)(ItemList)