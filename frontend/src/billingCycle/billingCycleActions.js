import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { selectTab, showTabs } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3003/api'
const INITIAL_VALUE = {}

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return dispatch => {
        axios.post(`${BASE_URL}/billingCycles`, values)
            .then(response => {
                toastr.success('Success', 'Operacao Realizada com Sucesso')
                
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Error', error))
            })
    }
}

export function showUpdate(billingCycle) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function update(values) {
    return dispatch => {
        axios.put(`${BASE_URL}/billingCycles/${values._id}`, values)
            .then(response => {
                toastr.success('Success', 'Alterado')

                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Error', error))
            })
    }
}

export function init() {
    return [
        getList(),
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        initialize('billingCycleForm', INITIAL_VALUE)
    ]
}