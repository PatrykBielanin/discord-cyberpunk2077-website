<template>
    <div class="flex-col space-y-6 pb-8">
        <div class="flex-col space-y-2">
            <h3 class="text-rose-500 font-medium text-xl">1. Change default variable value</h3>
            <p>Inside file <span class="text-rose-500 font-medium">cyberpunk2077.theme.css</span> you can find variable called   <span class="text-rose-500 font-medium">--avatar-border</span>. You need to change value of this variable to <span class="text-rose-500 font-medium">none</span>.</p>
            <p>Here's some code how it should look like:</p>
            <CodeTemplate>
:root{
    --avatar-border: none;
}
            </CodeTemplate>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>
