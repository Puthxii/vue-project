<template>
  <div class="col-md-3">
    <div class="card">
      <img :src="image" :alt="name" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">{{ name }}</h5>
        <div class="card-subtitle font-weight-light">{{ des }}</div>
        <div class="card-text text-danger font-weight-bold">{{ price | dollars }}</div>
        <div class="row justify-content-end">
        <button class="btn btn-danger" @click="addToCart(invId) | opens()">Add to cart</button>      <!-- fix -->
        </div>
      </div>
    </div>

    
  </div>
</template>

<script>
import Vue from 'vue';
import VueToast from 'vue-toast-notification';
import './assets/theme-default.css';
import { dollars } from './filters';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.use(Loading);

export default {

    name: 'item',
    props: ['invId', 'name', 'des', 'qty', 'image', 'price'],
    methods: {
        addToCart(invId) {
          this.$store.dispatch('addToCart', invId, );
        },
        open () { //fix
            this.$toast.open({
                message: "Your basket is updated. Ready to go!",
                type: "success",
                duration: 2500,
                dismissible: true,
                position: "top"
        })
        },
        opens() {
            let loader = this.$loading.show({
                  // Optional parameters
                  container: this.fullPage ? null : this.$refs.formContainer,
                  canCancel: true,
                  onCancel: this.onCancel,
                  loader: 'dots',
                  color: 'red',
                  width: 64,
                  height: 64,
                  backgroundColor: '#ffffff',
                  opacity: 0.5,

                });
                // simulate AJAX
                setTimeout(() => {
                  loader.hide()
                  this.open() 
                },750)     
        },
    },
    filters: {
      dollars, // Replaces old filter definition
    },

    };
</script>