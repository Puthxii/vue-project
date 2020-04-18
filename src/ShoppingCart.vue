<template>
  <div> 
    <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#shoppingCart">Cart <span class="badge badge-light">{{ numInCart }} ({{ total | dollars }})</span></button>
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
                        <td>{{ item.price | dollars }}</td>
                        <td>
                          <button class="btn btn-sm btn-danger" @click="removeFromCart(index)">&times;</button>
                          
                        </td>
                        </tr>
                        <tr>
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
    total() {
      return this.cart.reduce((acc, cur) => acc + cur.price, 0);
    },
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
                duration: 4000,
                dismissible: true,
                position: "top"
        })
        }
  },
  
};
</script>