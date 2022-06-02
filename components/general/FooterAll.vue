<template>
    <v-card
      width="100vw"
      color="#e2cbfe"
      height="100"
      class="d-flex justify-center align-center"
    >
      <v-row>
        <v-col
          class="black--text"
          align-self="center"
          align="center"
          @click="route('contacts')"
        >
            <div>
                Stay In Touch
            </div>
            <div>
                https://www.mcu.edu.ph
            </div>
            <div>
                student.support@mcu.edu.ph
            </div>
        </v-col>
        <v-col class="white--text" align-self="center" align="center">
         <v-img src="/footerlogo.jpeg" height="100" width="100"></v-img>
        </v-col>
        <v-col @click="privacy=true" style="cursor:pointer" class="white--text" align-self="center" align="center">
            <v-row>
                <v-col>
                    <v-icon>
                        mdi-facebook
                    </v-icon>
                </v-col>
                 <v-col>
                    <v-icon>
                        mdi-twitter
                    </v-icon>
                </v-col>
                 <v-col>
                    <v-icon>
                        mdi-instagram
                    </v-icon>
                </v-col>
            </v-row>
        </v-col>
      
      </v-row>
    </v-card>
</template>

<script>

   
</script>

<style>
</style>