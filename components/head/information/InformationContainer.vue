<template>
  <div class="pa-10">
    <v-dialog v-model="isEdit" width="500">
      <v-card class="pa-10">
        <div>
          <div>
            Firstname
          </div>
          <v-text-field outlined dense v-model="register.firstname" ></v-text-field>
        </div>
        <div>
          <div>
            Lastname
          </div>
          <v-text-field outlined dense v-model="register.lastname" ></v-text-field>
        </div>
        <div>
          <div>
            Mobile Number
          </div>
          <v-text-field outlined dense v-model="register.mobile_number" ></v-text-field>
        </div>
        <div align="center">
          <v-btn color="primary" @click="submitHandler">Save Changes</v-btn>
        </div>
      </v-card>
    </v-dialog>
    <div class="text-h5 pb-10">
      <b>Program Head Information</b>
    </div>
    <div>
      <v-row>
        <v-col>
          <v-card elevation="5" class="rounded-xl pa-10" height="400">
            <div align="center">
              <div class="">
                <v-avatar height="150" width="150">
                  <img
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                  />
                </v-avatar>
                <div>
                   {{$auth.user.firstname}}  {{$auth.user.lastname}}
                </div>
                <!-- <div>
                    BSIT 4-1
                </div> -->
                <div align="start" class="pt-5">
                    <v-row>
                        <v-col>
                            <div>
                                Faculty ID Number:
                            </div>
                        </v-col>
                        <v-col>
                            <div>
                                {{$auth.user.id}}
                            </div>
                        </v-col>
                    </v-row>
                     <v-row>
                        <v-col>
                            <div>
                                Email:
                            </div>
                        </v-col>
                        <v-col>
                            <div>
                                {{$auth.user.email}}
                            </div>
                        </v-col>
                    </v-row>
                </div>
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col>
          <v-card elevation="5" class="rounded-xl pa-10" height="400"> 
              <div>
                  Email:
              </div>
              <div class="pb-10">
                 {{$auth.user.email}}
              </div>
              <div>
                  Mobile Number:
              </div>
              <div class="pb-10">
                  {{$auth.user.mobile_number}}
              </div>
              <!-- <div>
                  Status:
              </div> -->
             <div>
               <!-- <v-radio-group v-model="radioGroup" >
        <v-radio
          label="Working"
          value="n"
        ></v-radio>
        <v-radio
          label="Not Working"
          value="n"
        ></v-radio>
      </v-radio-group> -->
             </div>
               <v-icon  @click="isEdit=true">
            mdi-pencil
          </v-icon>
          </v-card>
         
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    submitHandler(){
      this.register.id = this.$auth.user.id
      this.$store.dispatch('users/edit',this.register)
      alert("Successfully Updated!")
      this.isEdit = false;
    }
  },
  data(){
    return{
      isEdit:false,
      register:{}
    }
  }
};
</script>

<style>
</style>