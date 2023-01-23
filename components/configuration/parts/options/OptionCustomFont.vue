<template>
    <div>
        <div class="flex flex-col">
            <label>Link to font</label>
            <input type="text" v-model="link">

            <label>Name of font</label>
            <input type="text" v-model="name">

            <button class="btn btn-primary">
                Save
            </button>
        </div>

        <NuxtExampleLayout example="mdc/inline-component" repo="nuxt/content">
            <ContentDoc path="/" class="prose text-left" />
        </Nuxtexamplelayout>

        <!-- <ConfigurationModalSnippet>
            <p>xdddd</p>
        </ConfigurationModalSnippet> -->
    </div>
</template>

<script>
    export default {
        async asyncData ({ $content }) {
            const page = await $content('home').fetch()
            return {
              page,
              link: '',
              name: ''
            }
        },
        // data() {
        //     return {
        //         link: '',
        //         name: ''
        //     }
        // }
    }
</script>
