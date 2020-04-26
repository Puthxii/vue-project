import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // TODO: Add state
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
          des: "Strawberry Jelio Smoothie. With the additional fresh Strawberry & Yogurt whipped cream vanilla honey.",
          image: 'https://images.snpfood.com/image/upload/c_fill,h_300,q_auto,w_485/v1/brands/15/inventory/products/24878--kFd3xN', price: 393 },
    ],
    pormotionItems: [ 
      {
        proId: 1, src: "../public/img/pro/Banner_Food_2.jpg", link: ''
      },
      {
        proId: 2, src: "../public/img/pro/Banner_Bev_2.jpg", link: ''
      },
      {
        proId: 3, src: "../public/img/pro/Banner-Mar-2020-02.jpg", link: ''
      },
      {
        proId: 4, src: "../public/img/pro/Banner-April-2020-02.jpg", link: ''
      }
    ],
    inCart: [],
  },
  getters: {
    // TODO: Add getters
    pormotionItems: state => state.pormotionItems,
    forSale: state => state.forSale,
    inCart: state => state.inCart,
  },
  mutations: {
    // TODO: Add mutations
    ADD_TO_CART(state, invId) { state.inCart.push(invId); },
    REMOVE_FROM_CART(state, index) { state.inCart.splice(index, 1); },
  },
  actions: {
    // TODO: Add actions
    addToCart(context, invId) { context.commit('ADD_TO_CART', invId);},
    removeFromCart(context, index) { context.commit('REMOVE_FROM_CART', index); },
  },
});