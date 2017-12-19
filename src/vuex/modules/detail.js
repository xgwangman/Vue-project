import api from '../../fetch/api'
import * as types from '../types'


const state = {
    detail: ''
}

const actions = {

    /**
     * 获取活动详情
     */
    getDetail({ commit }, palyload) {
        commit(types.COM_LOADING_STATUS, true)
        if (palyload.router == 'sport') {
            api.SportsDetail(palyload.id)
                .then(res => {
                    commit(types.COM_LOADING_STATUS, false)
                    commit(types.GET_SPORTS_DETAIL, res)
                }).catch(b => { console.log(b) })
        } else if (palyload.router == 'travel') {
            api.TravelsDetail(palyload.id)
                .then(res => {
                    commit(types.COM_LOADING_STATUS, false)
                    commit(types.GET_TRAVELS_DETAIL, res)
                }).catch(a => { console.log(a) })
        }
    },
    /**
     * 活动点击次数
     */
    travelClicks({ commit }, id) {
        api.travelClicks(id)
            .then(res => {
                console.log(res)
            }).catch({})
    },
    sportClicks({ commit }, id) {
        api.sportClicks(id)
            .then(res => {
                console.log(res)
            }).catch({})
    }
}

const getters = {
    getDetail: state => state.detail
}

const mutations = {
    [types.GET_SPORTS_DETAIL](state, res) {
        state.detail = res.data
    },
    [types.GET_TRAVELS_DETAIL](state, res) {
        state.detail = res.data
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}