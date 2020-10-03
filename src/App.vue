<template>
<v-app>
  <v-navigation-drawer v-model="sideNav">
    <v-list>
      <v-list-item v-for="item in menuItems" v-bind:key="item.title" :to="item.link">
        <v-icon>{{item.icon}}</v-icon>
          <v-list-item-content>
            <v-list-item-title class="title">
                {{item.title}}
                  </v-list-item-title>
            </v-list-item-content>
      </v-list-item>
         </v-list>
  </v-navigation-drawer>
  <v-toolbar  dark class="teal lighten-1">
    <v-app-bar-nav-icon @click.stop = "sideNav = !sideNav"
           class="hidden-sm-and-up">
    </v-app-bar-nav-icon>
        <v-toolbar-title>
           <router-link to="/" tag="span" style='cursor:pointer'> MeetUp</router-link>
        </v-toolbar-title>
            <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-xs-only">
            <v-btn v-for="item in menuItems" :key="item.title" :to="item.link">
              <v-icon left>{{item.icon}}</v-icon>
                         {{item.title}}
            </v-btn>
                  </v-toolbar-items>
              </v-toolbar> 
              <main>
                <router-view> </router-view>
              </main>
</v-app>
</template>
<script>
export default {
  data(){
  
    return{
       sideNav:false,
       menuItems:[
         {icon:'supervisor_account', title:'View MeetUps', link:'/meetups'},
         {icon:'room', title:'Organize MeetUp', link:'/meetups/new'},
         {icon:'person', title:'profile' , link:'/profile'},
         {icon:'face', title:'SignUp', link:'/signup'},
         {icon:'lock_open', title:'SignIn', link:'/signin'}
       ]
    }
  }
}
</script>

<style>

</style>

