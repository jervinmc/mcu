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
      <b> Juan Dela Cruz</b>
    </div>
    <div>
      <v-row>
        <v-col>
          <v-card elevation="5" class="rounded-xl pa-10" >
            <div align="center">
              <div class="">
                <!-- <v-avatar height="150" width="150">
                  <img
                    src="https://scontent.fmnl25-2.fna.fbcdn.net/v/t1.18169-9/10366126_879428475407136_7479389450624595425_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=174925&_nc_eui2=AeE_SbcK1w9bZbMCNqybEY_nWV0jsPJFPiFZXSOw8kU-IeNxZo-jwhD5oVORi4ZjADvjb5kGBKviqWoukux7XTE8&_nc_ohc=_5utJiGpMUwAX_Q9IPE&_nc_ht=scontent.fmnl25-2.fna&oh=00_AT8UJAQbKWN4auwgh289TAriUi_Bx31pcE6PDbslDum7Cw&oe=62BE36CC"
                    alt="John"
                  />
                </v-avatar> -->
                <div>
                    Juan Dela Cruz
                </div>
                <div>
                    BSIT 4-1
                </div>
                <div align="start" class="pt-5">
                    <v-row>
                        <v-col>
                            <div>
                                Student Number:
                            </div>
                        </v-col>
                        <v-col>
                            <div>
                                {{$auth.user.student_number}}
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
                    <v-row>
                        <v-col>
                            <div>
                                Firsntame:
                            </div>
                        </v-col>
                        <v-col>
                            <div>
                                {{$auth.user.firstname}}
                            </div>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <div>
                                Lastname:
                            </div>
                        </v-col>
                        <v-col>
                            <div>
                               {{$auth.user.lastname}}
                            </div>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <div>
                                Last year attended and course:
                            </div>
                        </v-col>
                        <v-col>
                            <div>
                                {{$auth.last_attended}}
                            </div>
                        </v-col>
                    </v-row>
                      <v-row>
                        <v-col>
                            <div>
                               Mobile Number:
                            </div>
                        </v-col>
                        <v-col>
                            <div>
                              {{$auth.user.mobile_number}}
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
            <v-row>
                        <v-col>
                            <div>
                                Age:
                            </div>
                        </v-col>
                        <v-col>
                            <div>
                                juandelacruz@email.com
                            </div>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <div>
                                Birthday:
                            </div>
                        </v-col>
                        <v-col>
                            <div>
                                {{$auth.user.birthdate}}
                            </div>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <div>
                                Address:
                            </div>
                        </v-col>
                        <v-col>
                            <div>
                                Philippines
                            </div>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <div>
                                Working Experience:
                            </div>
                        </v-col>
                        <v-col>
                            <div>
                                None
                            </div>
                        </v-col>
                    </v-row>
      
                   <div>
                  Status:
              </div>
 
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
                <v-icon @click="isEdit=true">
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