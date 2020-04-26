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
    <!-- <nav role="navigation" aria-label="main navigation" class="navbar is-flex">
    <div class="navbar-brand">
        <a href="/en/home" class="navbar-item navbar-logo"><img src="https://snp1344.com/assets/logo-4d2e732d52431d27aa731e9027a79b532be93f9ac185ed56a0df779193b2213b.svg"></a>
    </div>
    <div class="navbar-menu">
        <div class="navbar-start"><a href="https://company.snp1344.com/" target="_blank" class="navbar-item">
          About us
        </a> <a href="/en/pages/about" class="navbar-item is-hidden">About us</a> <a href="/en/stores" class="navbar-item">Stores</a> <a href="/en/profile?current_page=order-history" class="navbar-item">Order Tracker</a> <a href="/en/commercial_order" class="navbar-item">Corporate Clients</a></div>
        <div class="navbar-end">
            <div class="navbar-item">
                <ShoppingCart />
            </div>
            <div class="navbar-item">
                <button type="button" class="button-with-icon button-total-price"><span class="icon"><i class="fas fa-shopping-cart"></i></span> <span id="cart-text-button" class="text">
              Add Food
            </span></button>
            </div>
            <div class="navbar-item profile-menu"><a class="button is-secondary button-login"><span class="fas fa-user is-hidden-desktop"></span> <div class="btn-text is-hidden-touch">Sign in</div></a></div>
            <div data-turbolinks="false" class="navbar-item navbar-flag"><span><a href="/th/home" class="flag-th inactive"><img src="https://snp1344.com/assets/th_flag-58d8c1742e46c5502d10cbf7264ed6b4bbea68476c63397e6c109dda1a74509b.svg"></a></span></div>
        </div>
    </div>
    </nav>
     -->
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

