<template>
  <div class="pa-10">
    <v-dialog v-model="isEdit">
      <v-card class="pa-10">
          <div>
            Firstname
          </div>
          <div>
            <v-text-field outlined v-model="register.firstname"></v-text-field>
          </div>
          <div>
            Lastname
          </div>
          <div>
            <v-text-field outlined v-model="register.lastname"></v-text-field>
          </div>
          <div>
            Mobile Number 
          </div>
          <div>
            <v-text-field outlined v-model="register.mobile_number"></v-text-field>
          </div>
          <div class="py-10">
            <v-row>
              <v-col align="end">
                <v-btn color="grey" @click="isEdit">Cancel</v-btn>
              </v-col>
              <v-col>
                <v-btn color="success" @click="submitHandler">Save Changes</v-btn>
              </v-col>
            </v-row>
          </div>
      </v-card>
    </v-dialog>
    <div class="text-h5 pb-10">
      <b>Admin Information</b>
    </div>
    <div>
      <v-row>
        <v-col>
          <v-card elevation="5" class="rounded-xl pa-10" height="400">
            <div align="center">
              <div class="">
                <v-avatar height="150" width="150">
                  <img
                    src="https://scontent.fmnl25-2.fna.fbcdn.net/v/t1.18169-9/10366126_879428475407136_7479389450624595425_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_eui2=AeE_SbcK1w9bZbMCNqybEY_nWV0jsPJFPiFZXSOw8kU-IeNxZo-jwhD5oVORi4ZjADvjb5kGBKviqWoukux7XTE8&_nc_ohc=_5utJiGpMUwAX_Q9IPE&_nc_ht=scontent.fmnl25-2.fna&oh=00_AT8UJAQbKWN4auwgh289TAriUi_Bx31pcE6PDbslDum7Cw&oe=62BE36CC"
                    alt="John"
                  />
                </v-avatar>
                <div>
                    {{$auth.user.firstname}} {{$auth.user.lastname}}
                </div>
                <div>
                   
                </div>
                <div align="start" class="pt-5">
                    <!-- <v-row>
                        <v-col>
                            <div>
                                Faculty ID Number:
                            </div>
                        </v-col>
                        <v-col>
                            <div>
                                1234234523
                            </div>
                        </v-col>
                    </v-row> -->
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
              <!-- <div class="pb-10">
                  sample@rocketmail.com
              </div> -->
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
               <v-icon @click="isEdit = true" >
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
  data(){
    return {
      isEdit:false,
      register:{
        id:this.$auth.user.id
      }
    }
  },
  methods:{
    submitHandler(){
      this.$store.dispatch('users/edit',this.register)
      alert('Successfully Updated!')
      this.isEdit = false;
    }
  }
};
</script>

<style>
</style>