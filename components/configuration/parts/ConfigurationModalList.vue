<template>
    <ul class="mt-4">
        <li
            v-for="(i, index) in items"
            class="modal-list-item"
            :class="{'modal-list-item-active': activeItem == index}"
            @click="toggleOption(index)"
        >
            {{ i.name }}
        </li>
    </ul>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters({
                'items': 'configuration/listItems',
                'activeItem': 'configuration/activeItem'
            })
        },
        methods: {
            ...mapActions({
                'setActiveItem': 'configuration/setActiveItem'
            }),
            toggleOption(index) {
                this.setActiveItem({index: index})
            }
        }
    }
</script>
