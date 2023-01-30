<template>
    <div class="modal" v-if="open">
        <ConfigurationModalHead></ConfigurationModalHead>

        <div class="modal-content flex justify-between h-[95%] mt-4 overflow-y-auto w-full">
            <div class="pr-4 min-h-full h-auto w-[15%]">
                <ConfigurationModalList></ConfigurationModalList>
            </div>

            <div class="w-full px-6 max-h-full border-l border-rose-500 overflow-x-clip">
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
