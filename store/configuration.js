export const state = () => ({
    open: false,
    activeItem: 0,
    listItems: [
        {
            component: 'OptionCustomFont',
            name: 'Custom font',
            content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
            component: 'OptionServerList',
            name: 'Server list',
            content: 'xd'
        },
        {
            component: 'OptionProfileAvatars',
            name: 'Profile avatars',
            content: 'asd xd'
        }
    ]
})

export const actions = {
    setActiveItem({commit}, {index}) {
        commit('setActiveItem', {index});
    }
}

export const mutations = {
    setModalOpen(state) {
        state.open = !state.open
    },

    setActiveItem(state, {index}) {
        state.activeItem = index
    }
}

export const getters = {
    open(state) {
        return state.open
    },

    listItems(state) {
        return state.listItems
    },

    activeItem(state) {
        return state.activeItem
    },

    activeItemData(state) {
        return state.listItems[state.activeItem]
    }
}
