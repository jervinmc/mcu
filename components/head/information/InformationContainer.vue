<template>
  <div class="pa-10">
    <v-dialog v-model="isEdit" width="500">
      <v-card class="pa-10">
        <div>
          <div>Firstname</div>
          <v-text-field
            outlined
            dense
            v-model="register.firstname"
          ></v-text-field>
        </div>
        <div>
          <div>Lastname</div>
          <v-text-field
            outlined
            dense
            v-model="register.lastname"
          ></v-text-field>
        </div>
         <div>
          <div>Address</div>
          <v-text-field
            outlined
            dense
            v-model="register.address"
          ></v-text-field>
        </div>
         <div>
          <div>Age</div>
          <v-text-field
            outlined
            dense
            v-model="register.age"
          ></v-text-field>
        </div>
        <div>
          <div>Mobile Number</div>
          <v-text-field
            outlined
            dense
            v-model="register.mobile_number"
          ></v-text-field>
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
              <div class="pointer">
                <v-avatar
                  size="100"
                  color="grey"
                  class="white--text pointer"
                  @click="$refs.file.click()"
                >
                  <v-img :src="$auth.user.image"> </v-img>
                </v-avatar>
                <input
                  class="d-none"
                  type="file"
                  id="fileInput"
                  ref="file"
                  accept="image/png, image/jpeg"
                  @change="onFileUpload"
                />
                <div>{{ $auth.user.firstname }} {{ $auth.user.lastname }}</div>
                <!-- <div>
                    BSIT 4-1
                </div> -->
                <div align="start" class="pt-5">
                  <v-row>
                    <v-col>
                      <div>Faculty ID Number:</div>
                    </v-col>
                    <v-col>
                      <div>
                        {{ $auth.user.id }}
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <div>Email:</div>
                    </v-col>
                    <v-col>
                      <div>
                        {{ $auth.user.email }}
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <div>Firstname:</div>
                    </v-col>
                    <v-col>
                      <div>
                        {{ $auth.user.firstname }}
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <div>Lastname:</div>
                    </v-col>
                    <v-col>
                      <div>
                        {{ $auth.user.lastname }}
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <div>Mobile Number:</div>
                    </v-col>
                    <v-col>
                      <div>
                        {{ $auth.user.mobile_number }}
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
            <div>Age:</div>
            <div class="pb-10">
              {{ $auth.user.age }}
            </div>
             <!-- <div>Birthdate:</div>
            <div class="pb-10">
              {{ $auth.user.birthdate }}
            </div> -->
             <div>Address:</div>
            <div class="pb-10">
              {{ $auth.user.address }}
            </div>
            <div>
            </div>
            <v-icon @click="editItem"> mdi-pencil </v-icon>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
var cloneDeep = require("lodash.clonedeep");
export default {
  methods: {
    editItem(){
      this.register = cloneDeep(this.$auth.user)
      delete this.register.image
      this.isEdit = true
    },
    onFileUpload(e) {
      this.file = e;
      e = e.target.files[0];
      this.url = URL.createObjectURL(e);
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

        users.append("id", this.$auth.user.id);
        users.append("image", e);
        this.$store.dispatch("users/editUserImage", users).then((res) => {
          location.reload();
        });
      } catch (error) {
        alert(error);
        return;
      }
      this.file = e;
    },
    submitHandler() {
      this.register.id = this.$auth.user.id;
      this.$store.dispatch("users/edit", this.register).then((res) => {
        alert("Successfully Updated!");
        location.reload()
      });

      this.isEdit = false;
    },
  },
  data() {
    return {
      isEdit: false,
      register: {},
    };
  },
};
</script>

<style>
</style>