<template>
    <div class="flex justify-evenly pt-10">
        <img class="hidden xl:block xl:w-1/3" src="@/static/images/programming.png" alt="hero image">
        <div class="flex flex-col justify-center space-y-6 w-full px-8 xl:w-1/3 xl:px-0">
            <h1>Hello!</h1>

            <p class="text-stone-600 dark:text-gray-50">This site is still <span class="font-semibold">under development</span>. For now you can find some of my current projects im working on.</p>
            <p class="text-stone-600 dark:text-gray-50">If you have any feedback or you need some help, please reach out to me at github, discord, twitter or via email.</p>

            <button class="btn w-2/3 sm:w-1/2" @click="scrollToProjects()">My projects</button>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            scrollToProjects() {
                let projects = document.getElementById("projects-container").offsetTop

                window.scrollTo({top: projects, behavior: 'smooth'});
            }
        }
    }
</script>
