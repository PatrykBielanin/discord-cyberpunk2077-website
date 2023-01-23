<template>
    <div class="flex flex-col align-center">
        <Navigation></Navigation>

        <HomeApp></HomeApp>

        <ConfigurationApp class="mt-48"></ConfigurationApp>

        <FaqApp class="mt-48"></FaqApp>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        methods: {
            ...mapActions({
                'repoData': 'app/repoData'
            })
        },
        mounted() {
           this.repoData()
       }
    }
</script>
