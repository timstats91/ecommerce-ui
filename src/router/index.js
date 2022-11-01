import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
      path: '/admin/categories/add',
      name: 'addCategory',
      component: () => import('../views/Category/AddCategoryView.vue')
    },
    {
      path: '/admin/categories/:id',
      name: 'editCategory',
      component: () => import('../views/Category/EditCategoryView.vue')
    },
    {
      path: '/admin/categories',
      name: 'allCategories',
      component: () => import('../views/Category/CategoryView.vue')
    },
    {
      path: '/admin/products/add',
      name: 'addProduct',
      component: () => import('../views/Product/AddProductView.vue')
    },
    {
      path: '/admin/products/:id',
      name: 'editProduct',
      component: () => import('../views/Product/EditProductView.vue')
    },
    {
      path: '/admin/products',
      name: 'allProducts',
      component: () => import('../views/Product/ProductView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/AdminView.vue')
    },
  ]
})

export default router
