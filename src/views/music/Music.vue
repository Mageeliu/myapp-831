<template>
  <player></player>
</template>

<script>
import axios from 'axios';
import Player from '@/components/Player.vue';
export default {
  created(){
    this.$emit('switch','music');
    console.log('aa')
    axios.get('/data/music.json').then( res => {
      console.log(res.data)
    })
  },
  components: {
    Player,
  }
}
</script>

<style lang="scss" scoped>

</style>