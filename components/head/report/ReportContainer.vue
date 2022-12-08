<template>
  <div class="px-15 pt-5">
     <v-row>
         <v-col>
           <v-row>
          <v-col cols="12">
            <v-card
              color="#4747a1"
              height="120"
              class="rounded-xl pa-5"
              elevation="5"
            >
              <div class="pb-5 white--text">Total Members</div>
              <div class="text-h4 white--text">
                <b>
                  {{users.length}}
                </b>
              </div>
            </v-card>
          </v-col>
        </v-row>
         </v-col>
        <!-- <v-col>
           <v-row>
          <v-col cols="12">
            <v-card
              color="#7978e9"
              height="120"
              class="rounded-xl pa-5"
              elevation="5"
            >
              <div class="pb-5 white--text">Active Users</div>
              <div class="text-h4 white--text">
                <b> </b>
              </div>
            </v-card>
          </v-col>

        </v-row>
        </v-col> -->
     </v-row>
            <v-data-table
      class="pa-5"
      :headers="headers"
      :items="users"
      :loading="isLoading"
    >
     <template v-slot:[`item.status`]="{ item }">
        <div>
          <v-chip align="center" :style="getColorStatus(item.status)"
            ><span>{{ item.status }} </span></v-chip
          >
        </div>
      </template>
     <template #[`item.price`]="{ item }">
          <div>
            {{formatPrice(item.price)}}
          </div>
      </template>
      <template v-slot:loading>
        <v-skeleton-loader
          v-for="n in 5"
          :key="n"
          type="list-item-avatar-two-line"
          class="my-2"
        ></v-skeleton-loader>
      </template>
         <template #[`item.image`]="{ item }">
             <v-img :src="item.image" height="150" width="150"></v-img>
      </template>
      <template #[`item.date_joined`]="{ item }">
            <div>
              {{formatDate(item.date_joined)}}
            </div>
      </template>
      <template #[`item.opt`]="{ item }">
        <v-menu offset-y z-index="1">
          <template v-slot:activator="{ attrs, on }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn>
          </template>
          <v-list dense>
            <v-list-item @click.stop="status(item,'Accepted')">
              <v-list-item-content>
                <v-list-item-title>Approve</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click.stop="status(item,'Declined')">
              <v-list-item-content>
                <v-list-item-title>Decline</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import moment from 'moment';
export default {
  computed:{
    ...mapState('users',['users'])
  },
  created(){
    this.$store.dispatch('users/view')
  },
  data(){
    return {
       headers: [
        { text: "ID", value: "id" },
        { text: "Date Registered", value: "date_joined" },
        { text: "Firstname", value: "firstname" },
        { text: "Lastname", value: "lastname" },
        { text: "Email", value: "email" },
   
        ,
      ],
    }
  },
  methods:{
    formatDate(item){
     return moment(item).format('LL')
    },
  }
}
</script>

<style>

</style>