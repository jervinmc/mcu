<template>
  <v-app dark>
      <v-dialog v-model="isOpenLogout" width="500" persistent>
    <v-card class="pa-10 rounded-xl" >
    <div align="center" class="text-h6">Logout User</div>
    <div align="center" class="pa-10">
        Would you like to logout?
    </div>
      <v-card-actions>
        <v-row align="center">
            <v-col align="end">
                <v-btn color="red" text @click="isOpenLogout=false"> Cancel </v-btn>
            </v-col>
            <v-col>
                <v-btn color="success" text @click="confirm"> Logout </v-btn>
            </v-col>
        </v-row>  
      </v-card-actions>
    </v-card>
  </v-dialog>
        <!-- v-model="drawer" -->
    <v-navigation-drawer
      v-if="$route.name!='login' && $auth.loggedIn"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      dark
      color="primary"
    >
      <v-list >
        <!--eslint-disable-->
        <v-list-item
          v-for="(item, i) in $auth.user.account_type=='Admin' ? items : items_student"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
         <v-list-item
          color="white"
          style="cursor:pointer"
          @click="isOpenLogout=true"
          > 
            <v-icon class="pr-2" color="white">mdi-logout</v-icon>
            <v-list-item-title style="color:white">Logout</v-list-item-title>
          </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      color="primary"
      v-if="$route.name!='login'"
      :clipped-left="clipped"
      fixed
      app
    >
    <!-- <v-img src="/mcu_sealed.png" contain height="50" width="50" alignb></v-img> -->
    <div></div>
      <!-- <v-app-bar-nav-icon dark @click.stop="drawer = !drawer" /> -->
      <v-spacer></v-spacer>
      <div class="white--text mr-5">
          1st semester S.Y., 2022-2023
      </div>
      <div class="">
            <v-avatar>
        <img
          src="https://scontent.fmnl25-2.fna.fbcdn.net/v/t1.18169-9/10366126_879428475407136_7479389450624595425_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_eui2=AeE_SbcK1w9bZbMCNqybEY_nWV0jsPJFPiFZXSOw8kU-IeNxZo-jwhD5oVORi4ZjADvjb5kGBKviqWoukux7XTE8&_nc_ohc=_5utJiGpMUwAX_Q9IPE&_nc_ht=scontent.fmnl25-2.fna&oh=00_AT8UJAQbKWN4auwgh289TAriUi_Bx31pcE6PDbslDum7Cw&oe=62BE36CC"
          alt="John"
        >
      </v-avatar>
      </div>
  
     
    </v-app-bar>
    <v-main>
      <v-container fluid class="pa-0">
        <Nuxt />
      </v-container>
    </v-main>
    <v-navigation-drawer

      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  created(){
    this.account_type = localStorage.getItem('account_type')
  },
  data () {
    return {
      account_type:'',
      isOpenLogout:false,
      clipped: false,
      drawer: false,
      fixed: false,
      items_student: [
        {
          icon: 'mdi-apps',
          title: 'Dashboard',
          to: '/student/dashboard'
        },
        {
          icon: 'mdi-bullhorn',
          title: 'Announcement',
          to: '/student/announcement'
        },
        {
          icon: 'mdi-calendar',
          title: 'Events',
          to: '/student/events'
        },
        {
          icon: 'mdi-magnify',
          title: 'Job Posting',
          to: '/student/job_posting'
        },
        {
          icon: 'mdi-account',
          title: 'Alumni Profiling',
          to: '/student/information'
        },
        //  {
        //   icon: 'mdi-school',
        //   title: 'PME result',
        //   to: '/student/result'
        // },
        // {
        //   icon: 'mdi-school',
        //   title: 'Account',
        //   to: '/student/account'
        // },
        // {
        //   icon: 'mdi-school',
        //   title: 'Academics',
        //   to: '/student/account'
        // },
  
      ],
      items: [
        {
          icon: 'mdi-apps',
          title: 'Dashboard',
          to: '/dashboard'
        },
        {
          icon: 'mdi-bullhorn',
          title: 'Announcement',
          to: '/head/announcement'
        },
        {
          icon: 'mdi-calendar',
          title: 'Events',
          to: '/head/events'
        },
        {
          icon: 'mdi-magnify',
          title: 'Job Posting',
          to: '/head/job_posting'
        },
        {
          icon: 'mdi-account',
          title: 'Program Head',
          to: '/head/information'
        },
         {
          icon: 'mdi-account-question',
          title: 'Request',
          to: '/head/request'
        },
          {
          icon: 'mdi-poll',
          title: 'Analytical Report',
          to: '/head/report'
        },
  
      ],
      items_admin: [
        {
          icon: 'mdi-apps',
          title: 'Dashboard',
          to: '/admin/dashboard'
        },
        {
          icon: 'mdi-account',
          title: 'Admin Information',
          to: '/admin/information'
        },
        //  {
        //   icon: 'mdi-school',
        //   title: 'Send OTP',
        //   to: '/admin/otp'
        // },
        //   {
        //   icon: 'mdi-school',
        //   title: 'Alumni Accounts',
        //   to: '/admin/alumni'
        // },
  
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  methods:{
    confirm(){
     localStorage.clear();
     this.$auth.logout()
     this.isOpenLogout=false
   },
  }
}
</script>
