import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import PeopleList from '@/components/People/PeopleList'
import Person from '@/components/People/Person'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/users',
            component: PeopleList
        },
        {
            path: '/users/:id',
            name: 'user',
            component: Person
        },
    ]
})