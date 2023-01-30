<template>
    <div class="flex-col space-y-6 pb-8">
        <div class="flex-col space-y-2">
            <h3 class="text-rose-500 font-medium text-xl">1. Change default variables value</h3>
            <p>Inside file <span class="text-rose-500 font-medium">cyberpunk2077.theme.css</span> you can find 2 variables called   <span class="text-rose-500 font-medium">--avatar-circle</span> and <span class="text-rose-500 font-medium">--avatar-rounded</span>. You need to change theirs values to <span class="text-rose-500 font-medium">50%</span>.</p>
            <p>Here's some code how it should look like:</p>
            <CodeTemplate>
:root{
    --avatar-circle: 50%;
    --avatar-rounded: 50%;
}
            </CodeTemplate>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>
