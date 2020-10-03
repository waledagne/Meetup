import Vue from "vue";
import VueRouter from "vue-router";
import Home from '@/components/Home.vue';
import Meetups from '@/components/Meetup/Meetups';
import Createmeetups from '@/components/Meetup/Createmeetups';
import profile from '@/components/Users/profile';
import SignIn from '@/components/Auth/Signin';
import SignUp from '@/components/Auth/Signup';


Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    name:'Home',
    component:Home
  },

  {
    path:'/meetups',
    name:'Meetups',
    component:Meetups
  }, 

  {
    path:'/meetups/new',
    name:'Createmeetups',
    component:Createmeetups
  },

  {
    path:'/profile',
    name:'Profile',
    component:profile
  },

  {
    path:'/signup,',
    name:SignUp,
    component:SignUp
  },
   {
     path:'/signin',
     name:SignIn,
     component:SignIn
   }

];


const router = new VueRouter({
  routes,
  mode:'history'
});

export default router;
