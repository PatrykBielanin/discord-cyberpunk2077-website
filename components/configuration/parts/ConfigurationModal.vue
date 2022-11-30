<template>
    <div class="modal" v-if="open">
        <ConfigurationModalHead></ConfigurationModalHead>

        <div class="modal-content flex justify-between h-[95%] mt-4">
            <div class="border-r border-rose-500 pr-4 h-full w-[15%]">
                <ConfigurationModalList></ConfigurationModalList>
            </div>

            <div class="w-full px-12">
                <ConfigurationModalItem></ConfigurationModalItem>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters({
                'open': 'configuration/open'
            })
        }
    }
</script>
