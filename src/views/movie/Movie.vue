<template>
  <div>
    <ul>
      <li @click="goDetail(item.id)" class="movie" v-for="item in movieList" :key="item.id">
        <div class="movie-img">
          <img :src="dealImg(item.img)">
        </div>
        <div class="movie-info">
          <p class="movie-info-name">{{item.nm}}</p>
          <p>观众评分：<span class="sc">{{item.sc}}</span></p>
          <p>主演：{{item.star}} </p>
          <p> {{item.showInfo}} </p>
        </div>
      </li>
      <li class="over" v-show="isOver">数据已经到底了</li>
    </ul>
    <div class="timg"><img v-show="loading" src="./timg.gif"></div>
    
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return {
      movieList:[],
      isLoad:true,
      isOver:false,
      loading:false,
    }
  },
  beforeCreate(){
  },
  created(){
    this.$emit('switch','movie');
    this.getData();
  },
  mounted() {
    window.onscroll = () => {
      // 页面总高度
      let htmlHeight = document.documentElement.scrollHeight;
      // 滚动高度
      let scrollHeight = document.documentElement.scrollTop;
      // 页面视图高度
      let docHeight = document.documentElement.clientHeight;
      if(htmlHeight - scrollHeight - docHeight < 10 && !this.isOver){
        this.isLoad = true;
        this.getData();
      }
    }
  },
  methods: {
    dealImg( url ){
      return url.replace("/w.h","").toString().concat("@1l_1e_1c_128w_180h")
    },
    getData(){
      this.loading = true;
      axios.get('/data/movie.json').then( res =>{
        if(this.isLoad){
          this.movieList = this.movieList.concat(res.data.movieList.splice(this.movieList.length,this.movieList.length + 5));
          this.isLoad = false;
          this.loading = false;
          if(this.movieList.length === res.data.movieList.length){
            this.isOver = true;
          }
        }
      })
    },
    goDetail(movieId){
      this.$router.push(`/moviedetail/${movieId}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.over{
  font-size: .35rem;
  text-align: center;
}
.movie{
  font-size: .35rem;
  border-bottom: 1px solid grey;
  display: grid;
  grid-template-columns: 25% 75%;
  &-img{
    text-align: center;
    & img{
      width: 85%;
      height: 85%;
      margin: .15rem 0;
    }
  }
  &-info{
    overflow: hidden;
    line-height: .5rem;
    font-size: .26rem;
    padding: .1rem 0;
    &-name{
      font-size: .34rem;
      color: #333;
      font-weight: 700;
      flex-shrink: 1;
    }
    & .sc{
      color: #faaf00;
      font-weight: 700;
    }
  }
}
.timg{
    width: 100%;
    z-index: 1;
    position: fixed;
    bottom: 1rem;
    left: 0;
    text-align: center;
    & img{
      width: 50%;
    }
  }
</style>
