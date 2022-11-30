<template>
   <div class="app-container">
       <h2 class="text-3xl mb-4 font-semibold text-gradient">FAQ</h2>
       <FaqItem v-for="(i, index) in questions" :item="i" :index="index" :key="index"></FaqItem>
   </div>
</template>

<script>
    export default {
        data() {
            return {
                questions: [
                    {
                        q: "Do you still support this theme?",
                        a: "Yes i do. Whenever discord releases new update with design changes i'm updating this theme (as soon as i have some free time)."
                    },
                    {
                        q: "Can i change square profile avatar back to the original round one?",
                        a: "Yes you can - check configuration tool."
                    },
                    {
                        q: "Can i change servers list layout to X columns? ",
                        a: "Yes you can - check configuration tool."
                    },
                    {
                        q: "I want to change colors palette, how do i do it?",
                        a: "You can easily do it with configuration tool."
                    },
                    {
                        q: "How do i change the font?",
                        a: "Go to https://fonts.google.com/ and pick font you would like to use then copy @import code and check configuration tool how to apply it to your theme."
                    },
                    {
                        q: "Letter 'a' is very similar to 'o', can i change it with css style?",
                        a: "No you can't. It's font made by someone else. The only thing you can do is to find free font and use configuration tool to import it to your theme."
                    },
                    {
                        q: "Can i change background to custom image?",
                        a: "Unfortunately you can't but i'm working on it to make it possible."
                    },
                    {
                        q: "Can i contribute to this theme?",
                        a: "Of course you can, go to theme github repository, fork it and create pull request with your changes. I will look into this and if everything works it will be accepted."
                    },
                    {
                        q: "I found a bug in your theme, how can i report it?",
                        a: "Feel free to message me on discord (bielak#2500) or create github issue in theme github repository."
                    }
                ]
            }
        }
    }
</script>
