import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home.vue'
import Vehicles from '@/components/Vehicles.vue'
import Vehicle from '@/components/Vehicle.vue'

import Record from '@/components/Record.vue'
import Records from '@/components/Records.vue'
import NewRecord from '@/components/NewRecord.vue'
import Tasks from '@/components/Tasks.vue'
import Task from '@/components/Task.vue'
import NewTask from '@/components/NewTask.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/vehicles',
      name: 'Vehicles',
      component: Vehicles
    },
    {
      path: '/vehicle/:vin',
      name: 'Vehicle',
      component: Vehicle
    },
    {
      path: '/record/:recordId',
      name: 'Record',
      component: Record
    },
    {
      path: '/records',
      name: 'Records',
      component: Records
    },
    {
      path: '/record/',
      name: 'NewRecord',
      component: NewRecord
    },
    {
      path: '/tasks',
      name: 'Tasks',
      component: Tasks
    },
    {
      path: '/task/:name',
      name: 'Task',
      component: Task
    },
    {
      path: '/task',
      name:'NewTask',
      component: NewTask
    }
  ]
})
