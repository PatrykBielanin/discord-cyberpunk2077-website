<template>
    <div class="flex flex-col items-center justify-center pb-6 text-stone-600">
        <div class="w-full pb-6 select-none">
            <p class="text-center text-lime-600 ml-auto cursor-pointer sm:text-right" @click="scrollToTop()">
                Back to top &nbsp
                <FontAwesomeIcon :icon="['fas', 'angle-up']"></FontAwesomeIcon>
            </p>
        </div>

        <p class="w-full text-center select-none">&copy Copyright {{ currentYear }} pbielanin. All rights reserved.</p>
    </div>
</template>

<script>
    export default {
        computed:{
            currentYear(){
                let year = new Date()
                return year.getFullYear()
            }
        },
        methods: {
            scrollToTop() {
                window.scrollTo({top: 0, behavior: 'smooth'});
            }
        }
    }
</script>
