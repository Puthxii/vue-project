<template>
  <div> 
    <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#shoppingCart"><i class="fas fa-shopping-cart"></i> <span class="badge badge-light">{{ total | dollars }}</span></button>
    <div id="shoppingCart" class="modal fade">
      <!-- The rest of the modal will go here -->
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title text-danger">Shopping cart</h5>
                <button class="close" data-dismiss="modal">
                &times;
                </button>
            </div>
            <div class="modal-body">
                <table class="table">
                    <tbody>
                        <tr v-for="(item, index) in cart">
                        <td>{{ item.name }}</td>
                          <td style="width:100px">
                            <input v-model="item.qty" min="1" class="form-control input-qty" type="number" >
                          </td>
                        <td>{{ item.price | dollars }}</td>
                      
                        <td>
                          <button class="btn btn-sm btn-danger" @click="removeFromCart(index)">&times;</button>
                          
                        </td>
                        </tr>
                      
                        <tr v-show="cart.length  === 0">
                          <th colspan="4" class="text-center">Your shopping cart is empty, Add items and go to check-out from here!</th>
                        </tr>
                        
                        <tr v-show="cart.length > 0">
                          <th></th>
                          <th></th>
                          <th>{{ total | dollars }}</th>
                          <th></th>

                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="modal-footer">
                <button class="btn btn-light" data-dismiss="modal">Keep shopping</button>
                <button class="btn btn-danger" @click="open()">Check out</button>    <!-- fix -->
            </div>
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
  name: 'shoppingCart',
  computed: {
    inCart() { return this.$store.getters.inCart; },
    numInCart() { return this.inCart.length; },
    cart() {
      return this.$store.getters.inCart.map((cartItem) => {
        return this.$store.getters.forSale.find((forSaleItem) => {
          return cartItem === forSaleItem.invId;
        });
      });
    },
    // total() {
    //   return this.cart.reduce((acc, cur) => acc + cur.price, 0);
    // },
     total() {
      let total = 0;
      this.cart.forEach(item => {
        total += (item.price * item.qty);
      });
      return total;
    }
  },
  filters: {
    dollars,
  },
  methods: {
    removeFromCart(index) {
      this.$store.dispatch('removeFromCart', index);
    },
    open () { //fix
            this.$toast.open({
                message: "Please login to checkout",
                type: "warning",
                duration: 2500,
                dismissible: true,
                position: "top"
        })
    },
  },
  
};
</script>
<style >
  .modal-backdrop {
    position:unset !important;
  }
  
</style>

<style  scoped>
  .input-qty {
    width: 60px;
    float: right
  }
  
</style>