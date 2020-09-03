<template>
  <div>
    <img src="" alt="">
    <div class="info">
      <p> {{detail.nm}} </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      detail: {},
    }
  },
  created() {
    axios.get('/data/movie.json').then( res => {
      res.data.movieList.forEach( item => {
        if(item.id === Number(this.$route.params.movieId) ){
        this.detail = item;
        }
      });
    })
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>

</style>