<template>
  <div class="px-15 pt-5">
    <v-text-field outlined v-model="search" dense placeholder="Search"></v-text-field>
    <v-data-table
      class="pa-5"
      :headers="headers"
      :search="search"
      :items="users.filter(data=>data.account_type=='Student')"
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
          {{ formatPrice(item.price) }}
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
          {{ formatDate(item.date_joined) }}
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
            <v-list-item @click.stop="status(item, 'Accepted')">
              <v-list-item-content>
                <v-list-item-title>Approve</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item @click.stop="status(item, 'Declined')">
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
import { mapState } from "vuex";
import moment from "moment";
export default {
  computed: {
    ...mapState("users", ["users"]),
    ...mapState("report", ["report_data"]),
  },
  created() {
    this.$store.dispatch("report/view", {});
    this.$store.dispatch("users/view");
  },
  data() {
    return {
      search:'',
      headers: [
        { text: "Student Number", value: "student_number" },
        { text: "Date Registered", value: "date_joined" },
        { text: "Firstname", value: "firstname" },
        { text: "Lastname", value: "lastname" },
        { text: "Email", value: "email" },

        ,
      ],
    };
  },
  methods: {
    formatDate(item) {
      return moment(item).format("LL");
    },
  },
};
</script>

<style>
</style>