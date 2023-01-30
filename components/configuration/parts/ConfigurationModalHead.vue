<template>
    <div class="flex justify-between text-xl border-b border-rose-500 pb-2">
        <h2 class="font-medium">Configuration tool</h2>
        <FontAwesomeIcon
            :icon="['fas', 'angle-up']" @click="toggleModal()"
            class="cursor-pointer rotate-90 text-rose-500"
        >
        </FontAwesomeIcon>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex'

    export default {
        methods: {
            ...mapMutations({
                'setModalOpen': 'configuration/setModalOpen'
            }),
            toggleModal(){
                this.setModalOpen()
            }
        }
    }
</script>
