<template>
    <div
        id="navigation"
        class="h-[100px] lg:h-[120px] text-xl mt-0 fixed w-full z-10 top-0 left-0 bg-white pb-2 px-8 2xl:px-0 dark:bg-stone-800 border-b transition-all duration-300"
        :class="{'border-rose-300': hasScrolled, 'border-white': !hasScrolled}"
    >
        <div class="container flex justify-center items-center mt-10 mx-auto">
            <ul class="nav-link flex items-center space-x-6 w-full justify-center">
                <li
                    v-for="i in navigationItems"
                    @click.prevent="toggleScroll(i.id)"
                    class="select-none"
                    :class="{'ml-auto hidden sm:flex': !i.name}"
                >
                    <template v-if="i.name">
                        {{ i.name }}
                    </template>

                    <template v-else>
                        <a href="https://www.buymeacoffee.com/patrykbielanin" target="_blank" class="flex justify-end">
                            <img
                                src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=patrykbielanin&button_colour=F43F5E&font_colour=FFFFFF&font_family=Poppins&outline_colour=000000&coffee_colour=ffffff"
                                class="w-[85%] lg:w-full"
                            >
                        </a>
                    </template>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        data() {
            return {
                darkMode: false,
                hasScrolled: false
            }
        },
        methods: {
            ...mapActions({
                scrollToSection: 'app/scrollToSection',
            }),
            toggleDarkMode() {
                this.darkMode = !this.darkMode

                this.$localForage.setItem('darkMode', this.darkMode)
                return
            },
            toggleScroll(id) {
                this.scrollToSection({id})
            },
            checkIfScrolled(offset) {
                return offset > 100 ? this.hasScrolled = true : this.hasScrolled = false
            }
        },
        computed: {
            ...mapGetters({
                navigationItems: 'app/getNavigationItems'
            })
        },
        mounted() {
            window.addEventListener('scroll', () => {
                this.checkIfScrolled(window.scrollY)
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
