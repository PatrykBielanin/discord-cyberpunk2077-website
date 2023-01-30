<template>
    <div class="flex-col space-y-6 pb-8">
        <div class="flex-col space-y-2">
            <h3 class="text-rose-500 font-medium text-xl">1. Copy link to styles</h3>
            <p>Copy this code.</p>

            <CodeTemplate>
@import url('https://mwittrien.github.io/BetterDiscordAddons/Themes/ServerColumns/ServerColumns.css');
            </CodeTemplate>
        </div>

        <div class="flex-col space-y-2">
            <h3 class="text-rose-500 font-medium text-xl">2. Paste link to styles</h3>
            <p>Paste copied link and copy this code so you can paste it in the <span class="text-rose-500 font-medium">13th</span> line of your theme file.</p>

            <CodeTemplate>
@import url('https://fonts.googleapis.com/css2?family=Rajdhani');
@import url('https://patrykbielanin.github.io/discord-cyberpunk2077-theme/base.css');
@import url('https://mwittrien.github.io/BetterDiscordAddons/Themes/ServerColumns/ServerColumns.css');
            </CodeTemplate>
        </div>

        <div class="flex-col space-y-2">
            <h3 class="text-rose-500 font-medium text-xl">3. Adjust how many columns you want</h3>
            <p>You need to choose how many columns you want to have - for example if you want two columns you need to add variable <span class="text-rose-500 font-medium">--columns</span> to :root class of your theme file.</p>

            <CodeTemplate>
:root {
    /* others default variables */
    
    --columns: 2;
}
            </CodeTemplate>
        </div>

    </div>
</template>

<script>
    export default {

    }
</script>
