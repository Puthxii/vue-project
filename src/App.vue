<template>
  <div> 
  <div id="app" >  
    <div>
      <Navbar/>
    </div>   
    <div>
      <br><br><br>
      <carouse/>
    </div>

    <div  class="container my-5 ">
        <div class="row mb-3">
            <div class="col-md-9">
                <h3 class="title text-danger is-3-desktop is-3-tablet is-size-4-mobile">
                  Check out our Promotions!
                </h3>
                <div class="column is-12 is-paddingless-top">
                  <p><a href="/en/promotions_conditions" class="has-text-grey">View Terms and Conditions for each promotions</a></p> 
                  <p class="subtitle">All in-store promotions including 20% off Wednesday and BlueCup D-Day Buy 1 Get 1 Free are not valid for online orders</p></div>
            </div>
        </div>
        <div class="row">
          <Promotions
            v-for="item in pormotionItems"
            :key="item.proId"
            :proId="item.proId"
            :src="item.src"
            :link="item.link" />
        </div>
    </div> 
    
    <div  class="container my-5">
      <div class="row mb-3">
              <div class="col-md-9">
                  <h3 class="title text-danger is-3-desktop is-3-tablet is-size-4-mobile">
                    Our Best Sellers!
                  </h3>
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


    
    
    <div >
      <bar/>
      <footers/>
    </div>
    
  </div>
  
</div>
</template>
<script>
import Item from './Item.vue';
import Promotions from './Promotions.vue';
import ShoppingCart from './ShoppingCart.vue';
import Navbar from './Navbar.vue';
import carouse from './carouse';
import toast from './toast';
import bar from './bar';
import footers from './footers';



export default {
  name: 'app',
  computed: {
    forSale() { return this.$store.getters.forSale; },
    pormotionItems() { return this.$store.getters.pormotionItems; },
    inCart() { return this.$store.getters.inCart; },
  },
  components: {
    Item: Item, // Item,
    ShoppingCart,
    Navbar,
    carouse,
    toast,
    bar,
    footers,
    Promotions,
  },
};
</script>

<style>
  /* Nothing for now */
  .has-text-grey {
    color: #7a7a7a !important
  }

   .subtitle {
    /* word-break: break-word; */
     font-size: .9em;
     margin-top: -20px
  }
  
</style>