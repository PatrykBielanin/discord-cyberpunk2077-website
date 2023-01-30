<template>
   <div class="app-container flex flex-col items-center justify-center min-h-screen mt-[120px] px-10 pt-10 lg:pt-24">
       <div class="text-center">
           <p class="text-[30px] md:text-[44px] lg:text-[52px] 2xl:text-[64px]">Improve your Discord experience</p>
           <p class="text-[30px] md:text-[44px] lg:text-[52px] 2xl:text-[64px] font-semibold text-gradient">Cyberpunk 2077 Theme</p>
       </div>

       <div class="flex flex-col md:flex-row justify-center items-center mt-10 md:mt-20 md:space-x-8">
           <a href="https://betterdiscord.app/Download?id=752">
               <div class="btn btn-primary">
                   <p>Download</p>
                   <FontAwesomeIcon :icon="['fas', 'download']"></FontAwesomeIcon>
               </div>
           </a>

           <div class="btn btn-secondary mt-6 md:mt-0" @click="toggleModal()">
               <p>Configuration tool</p>
               <FontAwesomeIcon :icon="['fas', 'gear']"></FontAwesomeIcon>
           </div>
       </div>

       <HomeStatistics></HomeStatistics>

       <div class="relative w-[90%]">
           <img
                class="mx-auto mt-16 md:mt-24 lg:mt-36 rounded-t-xl"
                src="/images/preview.png"
                alt="Discord theme preview"
           >
           <div class="absolute-center-x w-screen bg-rose-500 -z-10 h-[100px] bottom-[-50px] lg:h-[200px] lg:bottom-[-100px]"></div>
       </div>
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

                this.setModalOpen();
            }
        }
    }
</script>
