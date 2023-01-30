<template>
    <div class="flex-col space-y-6 pb-8">
        <div class="flex-col space-y-2">
            <h3 class="text-rose-500 font-medium text-xl">1. Go to website</h3>
            <p>Go to <a href="https://fonts.google.com" class="text-rose-500 font-medium">fonts.google.com</a> website and find font you would like to use.</p>
        </div>

        <div class="flex-col space-y-2">
            <h3 class="text-rose-500 font-medium text-xl">2. Copy @import code</h3>
            <p>Click on font you want to use and from right sidebar copy <span class="text-rose-500 font-medium">@import</span> rule so you can paste it next step.</p>
            <img src="/images/configuration/fonts.png" alt="Website copy instruction" class="w-2/5 2xl:w-1/6 rounded-lg">
        </div>

        <div class="flex flex-col space-y-2">
            <h3 class="text-rose-500 font-medium text-xl">3. Generate code to copy</h3>
            <p>Paste link to font and type name of it in the second input.</p>

            <label>Link to font</label>
            <input type="text" v-model="url" class="input-primary" :placeholder="defaultUrl">

            <label>Name of font</label>
            <input type="text" v-model="name" class="input-primary" :placeholder="defaultName">
        </div>

        <div class="flex space-x-4 mt-8">
            <button class="btn btn-primary" @click.prevent="generateNewStyles()">
                Generate code
            </button>

            <button v-if="generated" class="btn btn-secondary" @click.prevent="reset()">
                Reset
            </button>
        </div>

        <div class="flex flex-col space-y-2" v-if="generated">
            <h3 class="text-rose-500 font-medium text-xl">4. Copy code to your file</h3>
            <p>Copy this code and paste it inside your theme file to get new font.</p>
        </div>

        <CodeTemplate v-if="generated">
@import url('https://patrykbielanin.github.io/discord-cyberpunk2077-theme/base.css');
{{url}}

:root{
    --font-family: '{{name}}';
}
        </CodeTemplate>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                defaultUrl: "@import url('https://fonts.googleapis.com/css2?family=Rajdhani');",
                defaultName: 'Rajdhani',
                url: '',
                name: '',
                generated: false
            }
        },
        methods: {
            generateNewStyles(){
                if(this.url != '' && this.name != ''){
                    this.generated = true
                    return
                }

                this.$toast.global.errorCustom();
                return
            },
            reset(){
                this.url = ''
                this.name = ''
                this.generated = false
                return
            }
        }
    }
</script>
