export const state = () => ({
    navigationItems: [
        { name: 'Home', id: 'home-app' },
        { name: 'Configuration', id: 'configuration-app' },
        { name: 'FAQ', id: 'faq-app' },
        { name: null, id: null }
    ],
    repo: {
        version: null,
        stars: 10
    },
    website: {}
})

export const actions = {
    scrollToSection({commit}, { id }) {
        let section = document.getElementById(id).offsetTop - 150

        if (id == 'home-app') {
            return window.scrollTo({top: 0, behavior: 'smooth'});
        }

        return window.scrollTo({top: section, behavior: 'smooth'});
    },

    repoData({commit}) {
        this.$axios.get('https://api.github.com/repos/PatrykBielanin/discord-cyberpunk2077-theme').then((data) => {
            commit('setRepoDate', data.data);
        })
    }
}

export const mutations = {
    setRepoDate(state, data) {
        state.repo.stars = data.stargazers_count
    }
}

export const getters = {
    getNavigationItems(state) {
        return state.navigationItems
    },

    getRepoData(state) {
        return state.repo
    }
}
