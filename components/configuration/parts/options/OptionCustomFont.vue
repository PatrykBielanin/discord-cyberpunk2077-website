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

        <!-- <ConfigurationModalSnippet>
            <p>xdddd</p>
        </ConfigurationModalSnippet> -->
    </div>
</template>

<script>
    export default {
        data() {
            return {
                link: '',
                name: ''
            }
        }
    }
</script>
