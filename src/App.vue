<template>
  <div> 
    <Navbar/>
    <!-- <carouse/> -->
  <div id="app" class="container my-5">
    <div class="row mb-3">
        <div class="col-md-9">
            <h3 class="title text-danger is-3-desktop is-3-tablet is-size-4-mobile">
              Our Best Sellers!
            </h3>
            <!-- <toast/> -->
        </div>
        <div class="col-md-3">
           <!-- <ShoppingCart /> -->
        </div>
    </div>
    
    <div class="row">
      <Item
        v-for="item in forSale"
        :key="item.invId"
        :invId="item.invId"
        :name="item.name"
        :des="item.des"
        :image="item.image"
        :price="item.price" />
    </div>

  </div>
</div>
</template>
<script>
import Item from './Item.vue';
import ShoppingCart from './ShoppingCart.vue';
import Navbar from './Navbar.vue';
import carouse from './carouse';
import toast from './toast';

export default {
  name: 'app',
  computed: {
    forSale() { return this.$store.getters.forSale; },
    inCart() { return this.$store.getters.inCart; },
  },
  components: {
    Item: Item, // Item,
    ShoppingCart,
    Navbar,
    carouse,
    toast,
  },
};
</script>

<style>
  /* Nothing for now */
</style>