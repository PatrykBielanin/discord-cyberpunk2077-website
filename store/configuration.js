export const state = () => ({
    open: false,
    activeItem: 0,
    listItems: [
        {
            component: 'OptionWelcome',
            name: 'How to use it?',
            content: "This configuration tool is very easy and fast to use. I wanted to make it as simple as possible so you can customize your theme in few mouse clicks."
        },
        {
            component: 'OptionCustomFont',
            name: 'Custom font',
            content: 'Many people ask me how to change font so this is probably most wanted option to customize. You can easily do it by looking up font you would like to use on google fonts.'
        },
        {
            component: 'OptionServerList',
            name: 'Server list',
            content: 'Change your left side server list to X columns - for example 2 or even 4 columns insted of one long scrollable column.'
        },
        {
            component: 'OptionSquareAvatars',
            name: 'Square avatars',
            content: "I saw many people do forks of my repo just to change new square avatars back to their original look- round one. Here's simple solution how to change them back."
        },
        {
            component: 'OptionBorderAvatars',
            name: 'Border avatars',
            content: 'Many people might not like new border around profile avatars so i decided to give you option to delete it.'
        },
        {
            component: 'OptionMessagesDivider',
            name: 'Messages divider',
            content: 'You can easily change color of the divider between new messages on chat.'
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
