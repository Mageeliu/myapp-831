<template>
  <div id="app">
    <CommonHeader :menu="menu" :style="{backgroundColor: menu.bgColor}"></CommonHeader>
    <router-view class="content" @switch="switchTab" />
    <CommonFooter :menuList="menuList" :style="{backgroundColor: menu.bgColor}"></CommonFooter>
  </div>
</template>

<script>
import { vw } from '@/assets/js/rem.js';
import '@/assets/css/public.css';
import CommonHeader from '@/components/CommonHeader.vue';
import CommonFooter from '@/components/CommonFooter.vue';

export default {
  components:{
    CommonHeader,
    CommonFooter,
    
  },
  data() {
    return {
      menu:{},
      menuList: [
        {
          title: '电影',
          bgColor: '#e54847',
          name: 'movie',
          path: '/movie'
        },{
          title: '音乐',
          bgColor: '#009688',
          name: 'music',
          path: '/music'
        },{
          title: '书籍',
          bgColor: '#795548',
          name: 'book',
          path: '/book'
        },{
          title: '图片',
          bgColor: '#3f51b5',
          name: 'photo',
          path: '/photo'
        },
        {
          title: '我的',
          bgColor: '#6c51b5',
          name: 'mine',
          path: '/mine'
        },
      ]
    }
  },
  methods: {
    switchTab(name){
      this.menuList.forEach(item => {
        if(item.name === name){
          this.menu = item;
        }
      })
    },
    // changeTitle(data){
    //   this.menu = data;
    // },
  }
}
</script>
<style lang="scss">
.content{
  margin: 1rem 0;
}
</style>
