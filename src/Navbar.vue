<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
    <div class="container">
    <a class="navbar-brand" href="#">
        <img src="../public/img/SPlogo.png" width="40" height="40">
    </a>
          

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item">
            <a class="nav-link" href="#">About us <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Stores</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Order Tracker</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Corporate Clients</a>
        </li>

        </ul>
        <ul class="nav navbar-nav navbar-right">
            <ShoppingCart />
        </ul>

        
     
    </div>
    </div>
    </nav>
</template>

<script>
import ShoppingCart from './ShoppingCart.vue';

export default {
  name: 'navbar',
  components: {
    ShoppingCart,
  },
};
</script>

<style scoped>
  /* Nothing for now */
    .small-logo {
        max-width: 40px;
        top: -2px;
        position: relative;
     }

   .modal-backdrop {
    position:unset !important;
    } 

  
</style>

