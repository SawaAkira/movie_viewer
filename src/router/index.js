import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component:()=> import('@/views/Layout.vue'),
    redirect: '/movie/hot',
    children: [
      {
        path: 'movie',
        name: 'Movie',
        component: () => import('@/pages/Movie.vue'),
        redirect: '/movie/hot',
        children: [
          {
            path: 'hot',
            name: 'Hot',
            component: () => import('@/pages/hot/Hot.vue'),
            meta: {
              title: '观影人电影-热映'
            },
          },
          {
            path: 'cinema',
            name: 'Cinema',
            component: () => import('@/pages/cinema/Cinema.vue'),
            meta: {
              title: '观影人电影-影院'
            },
          },
          {
            path: 'wait',
            name: 'Wait',
            component: () => import('@/pages/wait/Wait.vue'),
            meta: {
              title: '观影人电影-待映'
            },
          },
          {
            path: 'classic',
            name: 'Classic',
            component: () => import('@/pages/classic/Classic.vue'),
            meta: {
              title: '观影人电影-经典电影'
            },
          }
        ]
      },
      {
        path: 'video',
        name: 'Video',
        component: () => import('@/pages/Video.vue'),
        meta: {
          title: '观影人电影-视频'
        },
      },
      {
        path: 'personal',
        name: 'Personal',
        component: () => import('@/pages/Personal.vue'),
        meta: {
          title: '观影人电影-个人'
        },
      }
    ]
  },
  {
    path: '/city-list',
    name: 'CityList',
    component: () => import('@/views/CityList.vue'),
    meta: {
      title: '观影人电影-定位'
    },
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/Search.vue'),
    meta: {
      title: '观影人电影-搜索'
    },
  },
  {
    path: '/movieinfo/:id',
    name: 'MovieInfoIds',
    component: () => import('@/views/MovieInfo.vue'),
  },
  {
    path: '/movieinfo',
    redirect: '/movie/hot',
  },
  {
    path: '/moviesales/:id',
    name: 'MovieSalesIds',
    component: () => import('@/views/MovieSales.vue'),
  },
  {
    path: '/moviesales',
    redirect: '/movie/hot',
  },
  {
    path: '/cinema',
    name: 'CinemaIds',
    component: () => import('@/views/Cinema.vue'),
  },
]

const router = new VueRouter({
  routes
})

export default router
