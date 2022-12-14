<template>
  <div class="pa-10">
    <v-dialog v-model="isEdit" width="600">
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
                   <v-avatar
            
              size="100"
              color="grey"
              class="white--text pointer"
              @click="$refs.file.click()"
              >
                  <v-img :src="$auth.user.image">

                  </v-img>
              </v-avatar
            >
            <input
              class="d-none"
              type="file"
              id="fileInput"
              ref="file"
              accept="image/png, image/jpeg"
              @change="onFileUpload"
            />
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
              <!-- <div>
                  Email:
              </div> -->
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
    onFileUpload(e) {
      this.file = e;
      e = e.target.files[0];
      this.url =URL.createObjectURL(e);
      if (e["name"].length > 100) {
        alert("255 characters exceeded filename.");
        return;
      }
      try {
        if (e.size > 16000000) {
          alert("Only 15mb file can be accepted.");
          return;
        }
       let users = new FormData();
        
        users.append('id',this.$auth.user.id)
        users.append('image',e)
        this.$store.dispatch('users/editUserImage',users).then((res)=>{
          location.reload()
        })
      } catch (error) {
        alert(error);
        return;
      }
      this.file = e;
    },
    submitHandler(){
      this.$store.dispatch('users/edit',this.register)
      alert('Successfully Updated!')
      this.isEdit = false;
      location.reload()
    }
  }
};
</script>

<style>
</style>