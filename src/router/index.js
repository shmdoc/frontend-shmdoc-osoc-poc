import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AllJobs from '../views/AllJobs.vue'
import Job from '../views/Job.vue'
import NewJob from '../views/NewJob.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/schema-analysis-jobs',
    name: 'historic-jobs',
    component: AllJobs
  },
  {
    path: '/schema-analysis-jobs/new',
    name: 'new-job',
    component: NewJob
  },
  {
    path: '/schema-analysis-jobs/:id',
    name: 'job',
    component: Job,
    props: true
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
