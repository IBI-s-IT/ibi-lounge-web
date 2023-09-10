import { createRouter, createWebHistory } from 'vue-router'
import GradesView from "@/views/GradesView.vue";
import MaterialsView from "@/views/MaterialsView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/schedule',
      name: 'schedule',
      redirect: '/schedule/this-week',
      children: [
        {
          path: 'this-week',
          component: () => import('@/views/ScheduleView.vue'),
          meta: { mode: 0 }
        },
        {
          path: 'next-week',
          component: () => import('@/views/ScheduleView.vue'),
          meta: { mode: 1 }
        },
        {
          path: 'this-month',
          component: () => import('@/views/ScheduleView.vue'),
          meta: { mode: 2 }
        },
        {
          path: 'next-month',
          component: () => import('@/views/ScheduleView.vue'),
          meta: { mode: 3 }
        },
        {
          path: 'custom',
          component: () => import('@/views/ScheduleView.vue'),
          meta: { mode: 4 }
        }
      ]
    },
    {
      path: '/grades',
      name: 'grades',
      component: GradesView
    },
    {
      path: '/materials',
      name: 'materials',
      component: MaterialsView
    }
  ]
})

export default router