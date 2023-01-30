<template>
    <div class="flex-col space-y-6 pb-8">
        <div class="flex-col space-y-2">
            <p>Here's quick explanation how you can do it.</p>
            <button class="btn" @click.prevent="show = !show" :class="{'btn-primary': !show, 'btn-secondary': show}">
                {{ !show ? 'Click to expand' : 'Click to hide' }}
            </button>
        </div>

        <template v-if="show">
            <div class="flex-col space-y-2">
                <h3 class="text-rose-500 font-medium text-xl">1. Find directory</h3>
                <p>Find directory with your better discord themes. You need to localize <span class="text-rose-500 font-medium">"cyberpunk2077.theme.css"</span> file so you can edit your theme.</p>
                <p>By default path to this file should be: <span class="text-rose-500 font-medium">C:\Users\User\AppData\Roaming\BetterDiscord\themes</span> </p>
                <img src="/images/configuration/file.png" alt="File localization" class="w-auto rounded-lg">
            </div>

            <div class="flex-col space-y-2">
                <h3 class="text-rose-500 font-medium text-xl">2. Edit theme file</h3>
                <p>Click on <span class="text-rose-500 font-medium">"cyberpunk2077.theme.css"</span> file and open it with any text editor you like.</p>
                <CodeTemplate>
@import url('https://fonts.googleapis.com/css2?family=Rajdhani');
@import url('https://patrykbielanin.github.io/discord-cyberpunk2077-theme/base.css');

:root {
    --background-primary: linear-gradient(180deg, rgba(23,0,5,.75) 10%, rgba(0,0,0,1) 65%); /* Background gradient */
    --background-secondary: linear-gradient(180deg, rgba(23,0,5,.75) 10%, rgba(0,0,0,1) 65%); /* Background gradient */
    --font-primary: 'Rajdhani'; /* Font */
    --primary-text-color: lightgray; /* Font color */

    /* Rest of the variables */
}
                </CodeTemplate>
            </div>

            <div class="flex-col space-y-2">
                <h3 class="text-rose-500 font-medium text-xl">3. Use this configuration tool to generate code</h3>
                <p>Choose which option you want to use in your theme (from sidebar on the left side of the screen) and generate css code which you will copy and paste to your theme file in text editor.</p>
            </div>

            <div class="flex-col space-y-2">
                <h3 class="text-rose-500 font-medium text-xl">4. Save you changes</h3>
                <p>Whenever you are done with editing your theme just press save to keep your changes and better discord should reload by himself. If it's not working try to press Ctrl + R (while focusing on discord app) to restart it.</p>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                show: false
            }
        }
    }
</script>
