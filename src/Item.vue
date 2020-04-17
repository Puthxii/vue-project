<template>
  <div class="col-md-3">
    <div class="card">
      <img :src="image" :alt="name" class="card-img-top">
      <div class="card-body">
        <h4 class="card-title">{{ name }}</h4>
        <div class="card-subtitle font-weight-light">{{ des }}</div>
        <div class="card-text text-danger font-weight-bold">{{ price | dollars }}</div>
        <div class="row justify-content-end">
        <button class="btn btn-danger" @click="addToCart(invId)">Add to cart</button>        
        </div>
      </div>
    </div>

    
  </div>
</template>

<script>
import { dollars } from './filters';

export default {

    name: 'item',
    props: ['invId', 'name', 'des', 'image', 'price'],
    methods: {
        addToCart(invId) {
        this.$store.dispatch('addToCart', invId);
        },
    },
    filters: {
      dollars, // Replaces old filter definition
    },

    };
</script>