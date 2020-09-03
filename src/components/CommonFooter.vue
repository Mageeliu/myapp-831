<template>
  <ul class="footer" >
    <li class="menu" v-for="(menu,index) in menuList" :key = "index" >
      <router-link :to="menu.path">{{menu.title}}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['menuList'],
  data() {
    return {
      bgColor: '',
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .footer{
    width: 100%;
    height: 1rem;
    font-size: .35rem;
    display: flex;
    justify-content: space-around;
    line-height: 1rem;
    color: aliceblue;
    background-color: #e54847;
    position: fixed;
    bottom: 0;
    left: 0;
    a{
      color: rgb(220, 235, 245);
      outline: none;
      & .router-link-active{
        color: rgb(129, 175, 216);
      }
    }
  }
</style>
