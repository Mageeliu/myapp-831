<template>
  <header class="header">
    <!-- <router-link class="header-index" to="/" >首页</router-link> -->
    <span class="header-index" @click="$router.push('/')">首页</span>
    <h3 class="header-title"> {{menu.title?menu.title:'电影'}} </h3>
  </header>
</template>

<script>
export default {
  props: ['menu'],
  created(){
  }
}
</script>

<style lang="scss">
  .header{
    background-color: #7a4545;
    color: aliceblue;
    height: 1rem;
    width: 100%;
    line-height: 1rem;
    display: grid;
    grid-template-columns: 15% 85%;
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    &-index{
      font-size: .24rem;
    }
    &-title{
      font-size: .5rem;
      text-indent: -.3rem;
    }
  }
</style>
