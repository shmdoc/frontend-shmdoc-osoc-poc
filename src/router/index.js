import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AllJobs from '../views/AllJobs.vue'
import Job from '../views/Job.vue'
import NewJob from '../views/NewJob.vue'
import RunningJobs from '../views/RunningJobs.vue'
import Sources from '../views/Sources.vue'
import Source from '../views/Source.vue'
import Unit from '../views/Unit.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
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
    component: NewJob,
    props: true
  },
  {
    path: '/schema-analysis-jobs/running',
    name: 'running-jobs',
    component: RunningJobs
  },
  {
    path: '/schema-analysis-jobs/:id',
    name: 'job',
    component: Job,
    props: true
  },
  {
    path: '/sources',
    name: 'sources',
    component: Sources,
  },
  {
    path: '/sources/:id',
    name: 'source',
    component: Source,
    props: true
  },
  {
    path: '/units/:id',
    name: 'unit',
    component: Unit,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
