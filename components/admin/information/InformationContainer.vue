<template>
  <div class="pa-10">
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
                    src="https://cdn.vuetifyjs.com/images/john.jpg"
                    alt="John"
                  />
                </v-avatar>
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
                                Faculty ID Number:
                            </div>
                        </v-col>
                        <v-col>
                            <div>
                                1234234523
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
                                juandelacruz@email.com
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
                  unclepepe@rocketmail.com
              </div>
              <div>
                  Mobile Number:
              </div>
              <div class="pb-10">
                  123423242
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
               <v-icon >
            mdi-pencil
          </v-icon>
          </v-card>
         
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>