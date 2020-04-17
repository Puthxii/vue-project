<template>
  <div id="app" class="container my-5">
    <h1>My online store</h1>
    
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
</template>
<script>
import Item from './Item.vue';

export default {
  name: 'app',
  data() {
    return {
      forSale: [
        { invId: 1, name: 'Quinoa Fried Rice & Chilli Dressing',
          des: "Nourishing Quinoa Fried Rice. Serve with Steamed Giant Seabass and spicy seafood sauce.",
          image: 'https://images.snpfood.com/image/upload/c_fill,h_300,q_auto,w_485/v1/brands/15/inventory/products/16223--9Vvh44', price: 752 },
        { invId: 2, name: 'Roast Chicken & white sauce Salad', 
          des: "Organic salad vegetables are grown in non-toxic farms. They are fresh and ready for cook every day.",
          image: 'https://images.snpfood.com/image/upload/c_fill,h_300,q_auto,w_485/v1/brands/15/inventory/products/18919--fT4VOB', price: 660 },
        { invId: 3, name: 'Fried Rice Vermicelli Thai', 
          des: "Top Recommended! Unique Thai noodle from Nonthaburi. Serve with Padthai traditional sauce.",
          image: 'https://images.snpfood.com/image/upload/c_fill,h_300,q_auto,w_485/v1/brands/15/inventory/products/16259--L0wIOW', price: 445 },
        { invId: 4, name: 'Strawberry Jelio Smoothie', 
          des: "Strawberry Jelio Smoothie. With the additional fresh Strawberry & Yogurt whipped cream.",
          image: 'https://images.snpfood.com/image/upload/c_fill,h_300,q_auto,w_485/v1/brands/15/inventory/products/24878--kFd3xN', price: 393 },
      ],
    };
  },
  components: {
    Item,
  },
};
</script>

<style>
  /* Nothing for now */
</style>