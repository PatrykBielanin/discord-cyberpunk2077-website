<template>
    <div class="flex justify-center items-center mt-5 mb-15 space-x-8">
        <div class="flex justify-center items-center space-x-2">
            <HomeCounter :to="45000"></HomeCounter>
            <FontAwesomeIcon :icon="['fas', 'download']" class="text-rose-500"></FontAwesomeIcon>
        </div>
        
        <div class="flex justify-center items-center space-x-2">
            <HomeCounter :to="50"></HomeCounter>
            <FontAwesomeIcon :icon="['fas', 'thumbs-up']" class="text-sky-600"></FontAwesomeIcon>
        </div>
        
        <div class="flex justify-center items-center space-x-2" v-if="repoData">
            <HomeCounter :to="repoData.stars" :external="true"></HomeCounter>
            <FontAwesomeIcon :icon="['fas', 'star']" class="text-amber-400"></FontAwesomeIcon>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    
    export default {
        data(){
            return {
                stars: null
            }
        },
        computed: {
            ...mapGetters({
                getRepoData: 'app/getRepoData'
            }),
            repoData(){
                return this.getRepoData
            }
        }
    }
</script>
