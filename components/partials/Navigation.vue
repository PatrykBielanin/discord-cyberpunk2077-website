<template>
    <div class="text-xl mt-0 fixed w-full z-10 top-0 bg-white pb-2 px-8 xl:px-0 dark:bg-stone-800">
        <div class="container flex justify-center items-center flex-col sm:flex-row sm:justify-between mt-10 flex-wrap">
            <div class="flex justify-center items-center cursor-pointer dark:text-white" @click="toggleDarkMode()">
                <h2 class="mr-4 select-none">pbielanin.pl</h2>
                <FontAwesomeIcon v-if="!darkMode" :icon="['fas', 'moon']"></FontAwesomeIcon>

                <FontAwesomeIcon v-else :icon="['fas', 'sun']"></FontAwesomeIcon>
            </div>
            <ul class="nav-link flex items-center space-x-6 mt-6 sm:mt-0">
                <p class="text-sm text-lime-600">
                    Contact
                    <FontAwesomeIcon :icon="['fas', 'angle-up']" class="rotate-90"></FontAwesomeIcon>
                </p>
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
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                darkMode: false
            }
        },
        methods: {
            toggleDarkMode() {
                this.darkMode = !this.darkMode

                this.$localForage.setItem('darkMode', this.darkMode)
                return
            }
        },
        mounted() {
            this.$localForage.getItem('darkMode').then((value) => {
                if (value !== false) {
                    this.darkMode = true
                }
            })
        },
        head() {
            return {
                htmlAttrs: {
                    class: this.darkMode ? 'dark' : ''
                }
            }
        }
    }
</script>
