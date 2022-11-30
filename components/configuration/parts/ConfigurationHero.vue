<template>
    <div class="app-container flex justify-between items-center">
        <div class="flex flex-col space-y-4 text-white w-1/2">
            <h2 class="text-2xl">Make your theme <span class="text-rose-500 font-semibold">unique</span></h2>

            <div class="flex-col space-y-4">
                <p>
                    Many people message me to ask if they can change font, color palette or add any popular feature used in other themes. I decided to give you option to make it by <span class="text-rose-500 font-semibold">yourself</span>.
                </p>

                <p>Some options might not be able to edit so please check <span class="text-rose-500 font-semibold">FAQ</span> if i mentioned about it or <span class="text-rose-500 font-semibold">contact</span> me.</p>
            </div>

            <div class="btn btn-primary w-1/2" @click="toggleModal()">
                <p>Configuration tool</p>
            </div>
        </div>

        <img
            src="/images/configuration.png"
            alt="Configuration image"
            class="w-1/3"
        >
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
