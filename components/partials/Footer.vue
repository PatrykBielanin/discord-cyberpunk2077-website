<template>
    <footer class="mt-24 w-full flex flex-col lg:flex-row items-start justify-evenly py-6 px-10 text-white bg-rose-500 space-y-10 lg:space-y-0 lg:space-x-10">
        <div class="flex-col">
            <ul class="mb-4">
                <li>
                    <p class="text-md font-extralight select-none">
                        &copy Copyright {{ currentYear }} <b><a class="hover:text-black transition-all" href="https://pbielanin.pl" target="_blank" rel="dofollow">pbielanin</a></b>. All rights reserved.
                    </p>
                </li>
                <li class="mt-6">
                    <p class="text-sm font-extralight select-none">
                        cyberpunk.pbielanin.pl is not affiliated with CD Project Red.
                    </p>
                </li>
                <li class="mt-2">
                    <p class="text-sm font-extralight select-none">
                        All Trademarks referred to are the property of their respective owners.
                    </p>
                </li>
            </ul>

            <h2 class="text-xl mb-4 mt-8">Find me here</h2>
            <FooterSocials></FooterSocials>
        </div>

        <div class="flex-col hidden lg:block">
            <h2 class="text-xl mb-4">Menu</h2>

            <ul class="space-y-4">
                <li v-for="i in navigationItems" @click.prevent="toggleScroll(i.id)" class="cursor-pointer select-none">
                    <template v-if="i.name">
                        {{ i.name }}
                    </template>
                </li>
            </ul>
        </div>

        <div class="flex-col space-y-4">
            <h2 class="text-xl">Support</h2>

            <p>If you like this project buy me a coffee! 😎</p>

            <a href="https://www.buymeacoffee.com/patrykbielanin" target="_blank">
                <img class="w-[300px] lg:w-[200px] 2xl:w-[300px] rounded-xl mt-4 hover:scale-105 transition-all" src="https://img.buymeacoffee.com/api/?url=aHR0cHM6Ly9pbWcuYnV5bWVhY29mZmVlLmNvbS9hcGkvP3VybD1hSFIwY0hNNkx5OWpaRzR1WW5WNWJXVmhZMjltWm1WbExtTnZiUzkxY0d4dllXUnpMM0J5YjJacGJHVmZjR2xqZEhWeVpYTXZNakF5TWk4eE1DOTNRWGMwTURsYWJ6VnFaakU1ZVZCV0xtcHdadz09JnNpemU9MzAwJm5hbWU9UGF0cnlrK0JpZWxhbmlu&creator=Patryk+Bielaninsa&design_code=2&design_color=%23ff813f&slug=patrykbielanin&meta=eyJjcmVhdG9yIjoiUGF0cnlrIEJpZWxhbmluIn0=" alt="Buy me a coffee link">
            </a>
        </div>

    </footer>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        methods: {
            ...mapActions({
                scrollToSection: 'app/scrollToSection'
            }),
            toggleScroll(id) {
                this.scrollToSection({id})
            },
            scrollToTop() {
                window.scrollTo({top: 0, behavior: 'smooth'});
            }
        },
        computed: {
            ...mapGetters({
                navigationItems: 'app/getNavigationItems'
            }),
            currentYear(){
                return new Date().getFullYear()
            }
        }
    }
</script>
