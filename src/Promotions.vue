<template>
 

        <div class="col-md-6 wrap">
            <a href="#">
                <img :src="src" width="100%" height="100%">
            </a>
        </div>
 
   
</template>

<script>
import Vue from 'vue';


export default {

    name: 'promotions',
    props: ['proId', 'src', 'link'],
   

    };
</script>

<style scoped>
    /* .is-6{
        width: 50%
    } */
    .wrap{
    margin-bottom: 30px
  }
    
 
</style>