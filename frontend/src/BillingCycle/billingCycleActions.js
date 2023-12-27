import axios from 'axios'
import { toast } from 'react-toastify'
import { initialize, reset as resetForm } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'
import '../../node_modules/react-toastify/dist/ReactToastify.css'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUES = {credits: [{}], debits: [{}]}

export const getList = () => {
    const request = axios.get(`${BASE_URL}/billingcycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export const create = (values) => {
    return submit(values, 'post')
}

export const showUpdate = (billingCycle) => {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export const init = () => {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}

export const update = (values) => {
    return submit(values, 'put')
}

const submit = (values, method) => {
    return (dispatch) => {
        const id = values._id || ''

        axios[method](`${BASE_URL}/billingcycles/${id}`, values)
        .then(resp => {
            toast.success('Operação realizada com sucesso!')
            dispatch([
                resetForm('billingCycleForm'),
                init()
            ])
        })
        .catch(e => {
            e.response.data.errors.forEach(e => toast.error(e))
        })
    }
}

export const showDelete = (billingCycle) => {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export const remove = (values) => {
    return (dispatch) => {
        const id = values._id

        axios.delete(`${BASE_URL}/billingcycles/${id}`)
            .then(resp => {
                toast.success('Ciclo deletado com sucesso.')
                dispatch([
                    resetForm('billingCycleForm'),
                    init()
                ])
            })
            .catch(e => {
                e.response.data.errors.forEach(e => toast.error(e))
            })
    }
}