<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter" />
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide'

export default {
  created(){
  },

  methods:{
     ...mapActions(['getAddress','getShops','getUserInfo'])
  },

   mounted() {
    //  const res = await reqFoodCategorys();
    //  console.log(res);

    //  this.$store.dispatch('getShops');
     this.getAddress();
     this.getShops();
     this.getUserInfo();
  },
  components: {
    FooterGuide
  }
}
</script>

<style lang = "stylus" rel = "stylesheet/stylus">
#app
  width 100%
  height 100%
  background #f5f5f5

</style>
