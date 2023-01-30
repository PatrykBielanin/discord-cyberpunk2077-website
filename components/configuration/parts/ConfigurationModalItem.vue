<template>
    <div class="modal-item space-y-4 pt-4 w-full max-w-full" v-if="item">
        <h2 class="text-2xl text-rose-600 font-semibold">{{item.name}}</h2>

        <p>{{item.content}}</p>

        <ConfigurationModalOption>
            <template #options>
                 <component :is="item.component"></component>
            </template>
        </ConfigurationModalOption>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters({
                'item': 'configuration/activeItemData'
            })
        },
        methods: {
            ...mapActions({
                'setActiveItem': 'configuration/setActiveItem'
            })
        }
    }
</script>
