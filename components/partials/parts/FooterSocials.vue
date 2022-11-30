<template>
    <ul class="flex text-white space-x-6 footer-link">
        <li>
            <a href="https://github.com/PatrykBielanin" target="_blank">
                <FontAwesomeIcon :icon="['fab', 'github']"></FontAwesomeIcon>
            </a>
        </li>
        <li>
            <FontAwesomeIcon :icon="['fab', 'discord']" v-tooltip.bottom="'bielak#2500'"></FontAwesomeIcon>
        </li>
        <li>
            <a href="https://twitter.com/PatrykBielanin" target="_blank">
                <FontAwesomeIcon :icon="['fab', 'twitter']"></FontAwesomeIcon>
            </a>
        </li>
        <li>
            <a href="mailto:patrykbielanin@gmail.com" target="_blank">
                <FontAwesomeIcon :icon="['fas', 'at']"></FontAwesomeIcon>
            </a>
        </li>
    </ul>
</template>

<script>
    export default {
    }
</script>
