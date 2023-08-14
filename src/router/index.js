import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignInView from '../views/SignInView.vue'
import { useCurrentUser } from 'vuefire'

const requireAuth = async (to, from, next) => {
  const user = useCurrentUser()
  if (!user.value) {
    next({ name: 'SignInView' })
  } else {
    next()
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView,
    },
    {
      path: '/signin',
      name: 'SignInView',
      component: SignInView,
    },
    {
      path: '/upload',
      name: 'UploadView',
      component: () => import('../views/UploadView.vue'),
      beforeEnter: requireAuth,
    },
    {
      path: '/image/:id',
      name: 'LayoutView',
      component: () => import('../views/image/LayoutView.vue'),
      props: true,
      beforeEnter: requireAuth,
      children: [
        {
          path: 'edit',
          name: 'EditView',
          component: () => import('../views/image/EditView.vue'),
          beforeEnter: requireAuth,
        },
        {
          path: 'delete',
          name: 'DeleteView',
          component: () => import('../views/image/DeleteView.vue'),
          beforeEnter: requireAuth,
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFoundView',
      component: () => import('../views/NotFoundView.vue'),
    },
  ],
})

export default router
