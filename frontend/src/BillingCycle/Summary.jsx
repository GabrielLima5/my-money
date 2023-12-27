import React from 'react'
import Grid from '../common/layout/Grid/Grid'
import Row from '../common/layout/Row/Row'
import ValueBox from '../common/widgets/ValueBox/ValueBox'

const Summary = ({credit, debit}) => {
  return (
    <Grid cols='12'>
        <fieldset className='my-5'>
            <legend>Resumo</legend>
            <Row>
                <ValueBox 
                    cols='12 12 12 4' 
                    color='success' 
                    icon='bank' 
                    value={`R$ ${credit}`} 
                    text='Total de créditos'
                />
                <ValueBox 
                    cols='12 12 12 4' 
                    color='danger' 
                    icon='credit-card' 
                    value={`R$ ${debit}`} 
                    text='Total de déditos'
                />
                <ValueBox 
                    cols='12 12 12 4' 
                    color='primary' 
                    icon='money' 
                    value={`R$ ${credit - debit}`} 
                    text='Saldo final'
                />
            </Row>
        </fieldset>
    </Grid>
  )
}

export default Summary