<template>
   <div class="rounded-md bg-neutral-200 mt-4" :class="{'bg-gray-200': index % 2 != 0}">
       <h5
            @click="isOpen = !isOpen"
            class="text-rose-600 cursor-pointer px-6 py-4 select-none hover:text-rose-800 transition-all"
       >
           {{ item.q }}
           <FontAwesomeIcon :icon="['fas', 'angle-up']" class="ml-2 rotate-180 hover:scale-125"></FontAwesomeIcon>
       </h5>

       <p
            v-if="isOpen"
            class="bg-white px-6 py-4 border border-gray-200 border-t-0 rounded-md rounded-t-none"
        >
           {{ item.a }}
       </p>

   </div>
</template>

<script>
    export default {
        props: {
            item: {
                type: Object,
                default: {},
                required: true
            },
            index: {
                type: Number,
                required: true
            }
        },
        data() {
            return {
                isOpen: false
            }
        }
    }
</script>
