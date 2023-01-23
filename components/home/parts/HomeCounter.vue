<template>
    <div>
        <number
            class="bold transition"
            ref="number"
            :from="from"
            :format="format"
            animationPaused
            :to="to"
            :duration="duration"
            easing="Circ.easeInOut"
            @complete="animationCompleted"
        />

        <span v-if="completed && !external">+</span>
        <span v-else-if="!completed && !external">&nbsp</span>
    </div>
</template>

<script>
    export default {
        props: {
            to: {
                type: Number,
                required: true
            },
            external: {
                type: Boolean,
                required: false,
                default: false
            }
        },
        data(){
            return {
                from: 0,
                duration: 4,
                completed: false
            }
        },
        methods: {
            format(number) {
              return number.toFixed(0);
            },
            playAnimation() {
                this.completed = false
                this.$refs.number.play()
            },
            animationCompleted(){
                this.completed = true
            }
        },
        mounted(){
            this.playAnimation()
        }
    }
</script>
