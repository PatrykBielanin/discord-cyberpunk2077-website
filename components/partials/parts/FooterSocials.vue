<template>
    <ul class="flex text-white space-x-6 footer-link">
        <li>
            <a href="https://github.com/PatrykBielanin" target="_blank" class="outline-none">
                <FontAwesomeIcon :icon="['fab', 'github']"></FontAwesomeIcon>
            </a>
        </li>
        <li @click="copyToClipboard()">
            <FontAwesomeIcon :icon="['fab', 'discord']" v-tooltip.bottom="'bielak#2500'" class="outline-none"></FontAwesomeIcon>
        </li>
        <li>
            <a href="https://twitter.com/PatrykBielanin" target="_blank" class="outline-none">
                <FontAwesomeIcon :icon="['fab', 'twitter']"></FontAwesomeIcon>
            </a>
        </li>
        <li>
            <a href="mailto:patrykbielanin@gmail.com" target="_blank" class="outline-none">
                <FontAwesomeIcon :icon="['fas', 'at']"></FontAwesomeIcon>
            </a>
        </li>
    </ul>
</template>

<script>
    export default {
        data(){
            return {
                discord: 'bielak#2500'
            }
        },
        methods: {
            copyToClipboard(){
                if (!navigator.clipboard) {
                    this.$toast.global.errorCustom();
                    return;
                }

                navigator.clipboard.writeText(this.discord)
                this.$toast.global.coppiedText();
            }
        }
    }
</script>
