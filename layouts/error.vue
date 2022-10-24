<template>
    <div class="container mx-auto" v-if="error.statusCode === 404">
        <div class="flex flex-col justify-center items-center h-screen space-y-6 text-center px-8 sm:px-0">
          <img src="/images/error.png" alt="error 404 image" class="w-3/5 lg:w-1/4">
          <h1 class="text-rose-500">This site doesn't exist!</h1>

          <nuxt-link to="/">
                <button class="btn btn-danger">
                    Go to main page.pl
                    <FontAwesomeIcon :icon="['fas', 'angle-up']" class="rotate-90 ml-2"></FontAwesomeIcon>
                </button>
          </nuxt-link>
        </div>
    </div>
</template>

<script>
  export default {
    props: ['error'],
    layout: 'errorLayout'
  }
</script>
