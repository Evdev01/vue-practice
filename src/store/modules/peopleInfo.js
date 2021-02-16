export default {
    state: {
        people: [],
        person: []
    },
    mutations: {
        updatePeople(state, people) {
            state.people = people
        },
        updatePerson(state, person) {
            state.person = person
        },
    },
    actions: {
        async fetchPeople(ctx, limit = 3) {
            const res = await fetch(
                'https://jsonplaceholder.typicode.com/users?_limit=' + limit
            )
            const people = await res.json()

            ctx.commit('updatePeople', people)
        },
        async loadPerson(ctx, userId = 1) {
            const res = await fetch(
                'https://jsonplaceholder.typicode.com/users/' + userId
            )
            const person = await res.json()

            ctx.commit('updatePerson', person)
        }
    },
    getters: {
        allPeople(state) {
            return state.people
        },
        MoreInfoPerson(state) {
            return state.person
        }
    }
}