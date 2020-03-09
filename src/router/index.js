import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 当跳转相同页面时url不重复添加
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
 return routerPush.call(this, location).catch(error=> error)
}

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: ()=>import ('../page/homepage.vue')
    },
    {
      path: '/articledetails',
      name: 'Articledetails',
      component: ()=>import ('../page/articledetails.vue')
    },
    {
      path: '/knowledgebase',
      name: 'Knowledgebase',
      component: ()=>import ('../page/knowledgebase.vue')
    },
    {
      path: '/librarypage',
      name: 'Librarypage',
      component: ()=>import ('../page/librarypage.vue')
    },
    {
      path: '/moocpage',
      name: 'Moocpage',
      component: ()=>import ('../page/moocpage.vue')
    },
    {
      path: '/searchpage',
      name: 'Searchpage',
      component: ()=>import ('../page/Searchpage.vue')
    },
    {
      path: '/videodetails',
      name: 'Videodetails',
      component: ()=>import ('../page/videodetails.vue')
    },
    {
      path: '/videopage',
      name: 'Videopage',
      component: ()=>import ('../page/videopage.vue')
    },
  ]
})

