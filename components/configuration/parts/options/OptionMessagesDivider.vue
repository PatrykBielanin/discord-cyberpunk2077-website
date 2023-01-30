<template>
    <div class="flex-col space-y-6 pb-8">
        <div class="flex-col space-y-2">
            <p>Preview of divider you are going to edit:</p>
            <img src="/images/configuration/divider.png" alt="Divider preview" class="w-auto rounded-lg">

            <h3 class="text-rose-500 font-medium text-xl">1. Change default variable value</h3>
            <p>Inside file <span class="text-rose-500 font-medium">cyberpunk2077.theme.css</span> you need to add new class with styles for divider color. You can choose which color the divider should have (by default it's red).</p>
            <p>Colors and variables names you can pick:</p>
            <ul>
                <li class="text-rose-500">--neon-green-color <span class="text-black">(green)</span> </li>
                <li class="text-rose-500">--neon-blue-color <span class="text-black">(blue)</span> </li>
                <li class="text-rose-500">--neon-yellow-color <span class="text-black">(yellow)</span> </li>
                <li class="text-rose-500">--neon-red-color <span class="text-black">(red - default)</span> </li>
            </ul>

            <p>Here's some code how it should look like:</p>
            <CodeTemplate>
:root{
    /* variables */
}

.divider-2rZFJK {
    --divider-color: var(--neon-green-color) !important;
}
            </CodeTemplate>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>
