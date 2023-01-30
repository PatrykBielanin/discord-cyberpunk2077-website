<template>
    <div class="app-container flex flex-col justify-between items-center px-10 lg:px-8 lg:flex-row">
        <div class="flex flex-col space-y-4 text-white w-full lg:w-1/2">
            <h2 class="text-2xl">Make your theme <span class="text-rose-500 font-semibold">unique</span></h2>

            <div class="flex-col space-y-4">
                <p>
                    Many people message me to ask if they can change font, color palette or add any popular feature used in other themes. I decided to give you option to make it by <span class="text-rose-500 font-semibold">yourself</span>.
                </p>

                <p>Some options might not be able to edit so please check <span class="text-rose-500 font-semibold">FAQ</span> if i mentioned about it or <span class="text-rose-500 font-semibold">contact</span> me.</p>
            </div>

            <div class="btn btn-primary w-1/2" @click="toggleModal()">
                <p>Configuration tool</p>
                <FontAwesomeIcon :icon="['fas', 'gear']"></FontAwesomeIcon>
            </div>
        </div>

        <img
            src="/images/configuration.png"
            alt="Configuration image"
            class="mt-20 w-3/4 lg:mt-0 lg:w-1/3"
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
                if(window.innerWidth <= 983){
                    return this.$toast.global.configurationTool();
                }

                this.setModalOpen()
            }
        }
    }
</script>
