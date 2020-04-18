<template>
  <div class="col-md-3">
    <div class="card">
      <img :src="image" :alt="name" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">{{ name }}</h5>
        <div class="card-subtitle font-weight-light">{{ des }}</div>
        <div class="card-text text-danger font-weight-bold">{{ price | dollars }}</div>
        <div class="row justify-content-end">
        <button class="btn btn-danger" @click="addToCart(invId) | open() ">Add to cart</button>      <!-- fix -->
         
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

export default {

    name: 'item',
    props: ['invId', 'name', 'des', 'image', 'price'],
    methods: {
        addToCart(invId) {
          this.$store.dispatch('addToCart', invId, );
           
        },
        open () { //fix
            this.$toast.open({
                message: "Add to cart success",
                type: "success",
                duration: 4000,
                dismissible: true,
                position: "top"
        })
        }
       
    },
    filters: {
      dollars, // Replaces old filter definition
    },

    };
</script>