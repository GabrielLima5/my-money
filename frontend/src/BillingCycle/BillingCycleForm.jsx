import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field, formValueSelector } from 'redux-form'
import LabelAndInput from '../common/form/LabelAndInput'
import { bindActionCreators } from "redux";
import { init } from "./billingCycleActions";
import ItemList from "./ItemList";
import Summary from "./Summary";

class BillingCycleForm extends Component{
    calculateSummary(){
        const sum = (t, v) => t + v
        
        return {
            creditsSum: this.props.credits.map(c => +c.value || 0).reduce(sum),
            debitsSum: this.props.debits.map(d => +d.value || 0).reduce(sum),
        }
    }
    
    render(){
        const { handleSubmit, method, credits, debits } = this.props
        const { creditsSum, debitsSum } = this.calculateSummary()

        const btnClassName = (method) => {
            let className = {
                post: 'primary',
                put: 'warning',
                delete: 'danger'
            }

            return className[method]
        }

        const btnName = (method) => {
            let btnName = {
                post: 'Enviar',
                put: 'Alterar',
                delete: 'Deletar'
            }

            return btnName[method]
        }

        return(
            <form role="form" onSubmit={handleSubmit}>
                <div className="box-body row">
                    <Field name='name' component={LabelAndInput} label='Nome' cols='12 4' placeholder='Informe o nome' readOnly={method === 'delete'} />
                    <Field name='month' component={LabelAndInput} label='Mês' cols='12 4' placeholder='Informe o mês' readOnly={method === 'delete'} />
                    <Field name='year' component={LabelAndInput} label='Ano' cols='12 4' placeholder='Informe o ano' readOnly={method === 'delete'} />
                    <Summary credit={creditsSum} debit={debitsSum} />
                    <ItemList cols='12 12 12 12 6' list={credits} readOnly={method === 'delete'} legend='Créditos' field='credits' showStatus={false} />
                    <ItemList cols='12 12 12 12 6' list={debits} readOnly={method === 'delete'} legend='Débitos' field='debits' showStatus={true} />
                </div>
                <div className="box-footer d-flex align-items-start p-2">
                    <button type="submit" className={`btn btn-${btnClassName(method)} my-2`}>{btnName(method)}</button>
                    <button type="button" className="btn btn-light my-2 mx-3" onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({credits: selector(state, 'credits'), debits: selector(state, 'debits')})
const mapDispatchToProps = (dispatch) => bindActionCreators({init}, dispatch)
BillingCycleForm = reduxForm({form: 'billingCycleForm', destroyOnUnmount: false})(BillingCycleForm)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)