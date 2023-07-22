<template>
    <div class="flex justify-center items-center mt-5 mb-15 space-x-8">
        <div class="flex justify-center items-center space-x-2">
            <HomeCounter :to="100000"></HomeCounter>
            <FontAwesomeIcon :icon="['fas', 'download']" class="text-rose-500"></FontAwesomeIcon>
        </div>

        <div class="flex justify-center items-center space-x-2">
            <HomeCounter :to="100"></HomeCounter>
            <FontAwesomeIcon :icon="['fas', 'thumbs-up']" class="text-sky-600"></FontAwesomeIcon>
        </div>

        <div class="flex justify-center items-center space-x-2" v-if="repoData">
            <HomeCounter v-if="stars" :to="stars" :external="external"></HomeCounter>
            <FontAwesomeIcon :icon="['fas', 'star']" class="text-amber-400"></FontAwesomeIcon>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                stars: null,
                external: true
            }
        },
        methods: {
            repoData(){
                this.$axios.get('https://api.github.com/repos/PatrykBielanin/discord-cyberpunk2077-theme').then((data) => {
                    this.stars = data.data.stargazers_count
                }).catch(() => {
                    this.stars = 10
                    this.external = false
                })
            }
        },
        mounted(){
            this.repoData()
        }
    }
</script>
