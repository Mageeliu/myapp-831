import { createRouter, createWebHashHistory } from 'vue-router';
import Movie from '@/views/movie/Movie.vue';
import MovieDetail from '@/views/movie/MovieDetail.vue';
import Music from '@/views/music/Music.vue';
import Book from '@/views/book/Book.vue';
import Photo from '@/views/photo/Photo.vue';
import Mine from '@/views/mine/Mine.vue';

const routes = [
  {
    path: '/',
    redirect: '/movie'
  },
  {
    path: '/movie',
    name: 'movie',
    component: Movie,
  },{
    path: '/music',
    name: 'music',
    component: Music,
  },{
    path: '/book',
    name: 'book',
    component: Book,
  },{
    path: '/photo',
    name: 'photo',
    component: Photo,
  },{
    path: '/mine',
    name: 'mine',
    component: Mine,
  },{
    path: '/moviedetail/:movieId',
    name: 'moviedetail',
    component: MovieDetail,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
