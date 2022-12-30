<template>
  <div class="pa-10">
    <v-dialog v-model="isAdd" width="600">
      <v-card class="pa-10">
        <div>
          <div>Company Name</div>
          <div>
            <v-text-field
              outlined
              dense
              v-model="register.company_name"
            ></v-text-field>
          </div>
          <div>Field</div>
          <div>
            <v-text-field
              outlined
              dense
              v-model="register.field"
            ></v-text-field>
          </div>
          <div>Position</div>
          <div>
            <v-text-field
              outlined
              dense
              v-model="register.position"
            ></v-text-field>
          </div>
          <div>
            Date Hired
            <div class="text-h5">
              <v-menu
                ref="departMenu"
                v-model="departMenu"
                :close-on-content-click="false"
                :return-value.sync="register.date_joined"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                  dense
                    v-model="register.date_joined"
                    outlined
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="register.date_joined" no-title scrollable>
                  <v-spacer></v-spacer>
                  <v-btn text color="primary" @click="departMenu = false">
                    Cancel
                  </v-btn>
                  <v-btn
                    text
                    color="primary"
                    @click="$refs.departMenu.save(register.date_joined)"
                  >
                    OK
                  </v-btn>
                </v-date-picker>
              </v-menu>
            </div>
          </div>
          <div align="center">
            <v-btn color="primary" @click="submitHandlerWork">Save</v-btn>
          </div>
        </div>
      </v-card>
    </v-dialog>
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
          <div>Mobile Number(+63)</div>
          <v-text-field
            outlined
            type="number"
            placeholder="+63"
            dense
            v-model="register.mobile_number"
          ></v-text-field>
        </div>
        <div>
          <div>Year graduated</div>
          <v-text-field
            outlined
            dense
            v-model="register.last_attended"
          ></v-text-field>
        </div>
        <div>
          <div>Age</div>
          <v-text-field outlined dense type="number" v-model="register.age"></v-text-field>
        </div>
        <div>
          <div>Birthday</div>
          <v-text-field
            outlined
            dense
            v-model="register.birthdate"
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
          <div>Working Status</div>
          <v-select
            :items="['Employed', 'Unemployed', 'Self Employed']"
          ></v-select>
        </div>
        <div align="center">
          <v-btn color="primary" @click="submitHandler">Save Changes</v-btn>
        </div>
      </v-card>
    </v-dialog>
    <div class="text-h5 pb-10">
      <b>Alumni Profiling</b>
    </div>
    <div>
      <v-row>
        <v-col>
          <v-card elevation="5" class="rounded-xl pa-10">
            <div align="center">
              <div class="">
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
                      <div>Student Number:</div>
                    </v-col>
                    <v-col>
                      <div>
                        {{ $auth.user.student_number }}
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
                      <div>Firsntame:</div>
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
                      <div>Year graduated:</div>
                    </v-col>
                    <v-col>
                      <div>
                        {{ $auth.user.last_attended }}
                      </div>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <div>Mobile Number(+63):</div>
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
          <v-card elevation="5" class="rounded-xl pa-10" >
            <v-row>
              <v-col>
                <div>Age:</div>
              </v-col>
              <v-col>
                <div>
                  {{ $auth.user.age }}
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <div>Birthday:</div>
              </v-col>
              <v-col>
                <div>
                  {{ $auth.user.birthdate }}
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <div>Address:</div>
              </v-col>
              <v-col>
                <div>
                  {{ $auth.user.address }}
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <div>Working Experience:</div>
              </v-col>
              <v-col>
                <div>
                  {{ $auth.user.work_status }}
                </div>
              </v-col>
            </v-row>

            <div>Status:</div>
            <v-icon @click="editItem"> mdi-pencil </v-icon>
            <div>
              <v-row>
                <v-col>
                  <div>Work Experience History</div>
                </v-col>
                <v-col>
                  <v-icon @click="addWork">mdi-plus</v-icon>
                </v-col>
              </v-row>
              <div v-for="x in work_data" :key="x">
                <v-divider></v-divider>
                <v-row>
                  <v-col cols="12">
                    <div>
                      <v-icon @click="editWork(x)">
                        mdi-pencil
                      </v-icon>
                    </div>
                    <div>Company Name : {{ x.company_name }}</div>
                    <div>Field : {{ x.field }}</div>
                    <div>Position : {{ x.position }}</div>
                    <div>Date Hired : {{formatDate(x.date_joined) }}</div>
                  </v-col>
                </v-row>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import moment from 'moment';
var cloneDeep = require("lodash.clonedeep");
export default {
  computed: {
    ...mapState("work", ["work_data"]),
  },
  created() {
    this.$store.dispatch("work/work");
  },
  methods: {
    addWork(){
      this.register = {}
      this.isAdd = true
      this.isEditWork = false
    },
    editWork(item){
      this.register = cloneDeep(item)
      this.isAdd = true
      this.isEditWork = true
    },
    formatDate(item) {
      return moment(item).format("LL");
    },
    submitHandlerWork() {
      if(this.isEditWork){
          this.$store
        .dispatch("work/add", {
          user_id: this.$auth.user.id,
          company_name: this.register.company_name,
          field: this.register.field,
          position: this.register.position,
          id:this.register.id
        })
        .then((res) => {
          alert("Successfully Added!");
          location.reload();
        });
        location.reload()
        return
      }
      this.$store
        .dispatch("work/add", {
          user_id: this.$auth.user.id,
          company_name: this.register.company_name,
          field: this.register.field,
          position: this.register.position,
        })
        .then((res) => {
          alert("Successfully Added!");
          location.reload();
        });

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
    editItem() {
      this.register = cloneDeep(this.$auth.user);
      delete this.register.image;
      this.isEdit = true;
    },
    submitHandler() {
      this.register.id = this.$auth.user.id;
      this.$store.dispatch("users/edit", this.register).then((res) => {
        alert("Successfully Updated!");
        location.reload();
      });

      this.isEdit = false;
    },
  },
  data() {
    return {
      isEditWork:false,
      departMenu:false,
      isAdd: false,
      isEdit: false,
      register: {},
    };
  },
};
</script>

<style>
</style>