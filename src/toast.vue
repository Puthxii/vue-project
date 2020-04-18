<template>
    <div id="toast">
    <button @click="open">
        Show toast
    </button>
   
    </div>
</template>


<script>
import Vue from 'vue';
import VueToast from 'vue-toast-notification';
import './assets/theme-default.css';

Vue.use(VueToast);
export default {
    name: 'toast',
    methods: {
        open() {
            this.$toast.open({
                message: "Test message from Vue",
                type: "success",
                duration: 5000,
                dismissible: true,
                position: "top"
        })
        }
    },
};
</script>

<style>
  /* Nothing for now */
</style>