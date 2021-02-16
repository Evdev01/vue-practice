import Vue from 'vue'
import Vuex from 'vuex'
import peopleInfo from '@/store/modules/peopleInfo'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        peopleInfo
    }
})