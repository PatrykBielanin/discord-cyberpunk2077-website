export const state = () => ({
    navigationItems: [
        { name: 'Home', id: 'home-app' },
        { name: 'Configuration', id: 'configuration-app' },
        { name: 'FAQ', id: 'faq-app' },
        { name: null, id: null }
    ]
})

export const actions = {
  scrollToSection({commit}, { id }) {
      let section = document.getElementById(id).offsetTop - 150

      if (id == 'home-app') {
          return window.scrollTo({top: 0, behavior: 'smooth'});
      }

      return window.scrollTo({top: section, behavior: 'smooth'});
  }
}

export const mutations = {
}

export const getters = {
    getNavigationItems(state) {
        return state.navigationItems
    }
}
