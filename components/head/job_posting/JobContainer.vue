<template>
  <div class="pa-10">
    <v-dialog v-model="isDelete" width="500">
      <v-card class="pa-10">
        <div align="center" class="py-10">
          Are you sure you want to delete this item?
        </div>
        <div>
          <v-row>
            <v-col align="end">
              <v-btn @click="isDelete = false" outlined>Cancel</v-btn>
            </v-col>
            <v-col>
              <v-btn @click="submitHandlerDelete" color="error" outlined
                >Delete</v-btn
              >
            </v-col>
          </v-row>
        </div>
      </v-card>
    </v-dialog>
    <v-dialog v-model="isEdit" width="500">
      <v-card class="pa-10">
        <div>
          <v-text-field
            label="Post Something..."
            append-icon="mdi-post"
            outlined
            v-model="register.content"
          ></v-text-field>
        </div>
        <div>
          <v-textarea
            label="Description..."
            append-icon="mdi-post"
            outlined
            v-model="register.description"
          ></v-textarea>
        </div>
         <v-col>
              <v-text-field
                label="Position"
                append-icon="mdi-post"
                outlined
                v-model="register.position"
              ></v-text-field>
            </v-col>
             <v-col>
              <v-text-field
                label="Qualification"
                append-icon="mdi-post"
                outlined
                v-model="register.qualification"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                label="Department"
                append-icon="mdi-post"
                outlined
                v-model="register.department"
              ></v-text-field>
            </v-col>
        <div>
          <v-col>
            <div align="end">
              <v-btn outlined @click="submitHandlerRegister" color="secondary"
                >Post</v-btn
              >
            </div>
          </v-col>
        </div>
      </v-card>
    </v-dialog>
    <div class="text-h5 pb-10">
      <b>Job Posting</b>
    </div>
    <v-row>
      <v-col>
        <div>
          <v-text-field
            label="Post Something..."
            append-icon="mdi-post"
            outlined
            v-model="register.content"
          ></v-text-field>
        </div>
        <div>
          <v-row>
            <v-col>
              <v-text-field
                label="Position"
                append-icon="mdi-post"
                outlined
                v-model="register.position"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-text-field
                label="Department"
                append-icon="mdi-post"
                outlined
                v-model="register.department"
              ></v-text-field>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col>
         <v-textarea
      label="Qualification"
      append-icon="mdi-post"
      outlined
      v-model="register.qualification"
    ></v-textarea>
     <v-textarea
      label="Description..."
      append-icon="mdi-post"
      outlined
      v-model="register.description"
    ></v-textarea>
         </v-col>
    </v-row>

   
    <v-row>
      <!-- <v-col>
        <div>
          <div>
            Upload Photo
            <input
              type="file"
              id="fileInput1"
              ref="file1"
              @change="onFileUpload"
            />
          </div>
        </div>
      </v-col> -->
      <v-col>
        <div align="end">
          <v-btn outlined @click="submitHandlerRegister" color="secondary"
            >Post</v-btn
          >
        </div>
      </v-col>
    </v-row>
    <div class="pt-5 py-5">
      <div v-for="x in job_posting_data" :key="x" class="py-5">
        <v-card class="rounded-xl pa-5" elevation="6">
          <div align="end">
            <v-icon @click="editItem(x)">mdi-pencil</v-icon>
            <v-icon @click="deleteItem(x)"> mdi-delete </v-icon>
          </div>
            <div>
            Date Posted : {{formatDate(x.date_created)}}
          </div>
          <v-row>
            <v-col cols="6">
              <div>
                <div class="text-h6">
                  <b>Title</b>
                </div>
                <div>
                  {{x.content}}
                </div>
                <div class="text-h6">
                 <b> Position </b>
                </div>
                <div>
                  {{x.position}}
                </div>
                <div class="text-h6">
                 <b> Department</b>
                </div>
                <div>
                  {{x.department}}
                </div>
              </div>
            </v-col>
            <v-col cols="6">
              <div>
                  <div class="text-h6">
                  <b>Qualification</b>
                </div>
                <div>
                  {{x.qualification}}
                </div>
                  <div class="text-h6">
                  Description
                </div>
                <div>
                  {{x.description}}
                </div>
              </div>
            </v-col>
          </v-row>
          <!-- <v-row>
            <v-col cols="12">
              <div class="text-h5">
                <b> {{ x.content }} </b>
              </div>
            </v-col>
            <v-col align="start" cols="6">
              <v-img :src="x.image" max-height="600" max-width="400"></v-img>
            </v-col>
            <v-col cols="6">
              <div align="start">
                {{ x.description }}
              </div>
            </v-col>
          </v-row> -->
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapState } from "vuex";
var cloneDeep = require("lodash.clonedeep");
export default {
  computed: {
    ...mapState("job_posting", ["job_posting_data"]),
  },
  created() {
    this.loadData();
  },
  methods: {
      formatDate(item) {
      return moment(item).format("LL");
    },
    deleteItem(item) {
      this.register = cloneDeep(item);
      this.isDelete = true;
    },
    submitHandlerDelete() {
      this.$store.dispatch("job_posting/delete", this.register).then((res) => {
        alert("Successfully Deleted!");
        location.reload();
      });
    },
    editItem(item) {
      this.register = cloneDeep(item);
      this.isEdit = true;
    },
    async submitHandlerRegister() {
      let form_data = new FormData();
      if (this.isEdit) {
        form_data.append("content", this.register.content);
        form_data.append("qualification", this.register.qualification);
        form_data.append("position", this.register.position);
        form_data.append("department", this.register.department);
        form_data.append("description", this.register.description);
        form_data.append("id", this.register.id);
        await this.$store.dispatch("job_posting/edit", form_data);
        alert("Successfully Updated!");
        location.reload();
        return;
      }
      if (this.file != "" && this.file != undefined) {
        form_data.append("image", this.file);
      }
      form_data.append("content", this.register.content);
      form_data.append("department", this.register.department);
      form_data.append("qualification", this.register.qualification);
      form_data.append("position", this.register.position);
      form_data.append("description", this.register.description);
      await this.$store.dispatch("job_posting/add", form_data);
      this.$store.dispatch("job_posting/notify", { category: "job" });
      alert("Successfully Posted!");
      this.loadData();
      location.reload();
    },
    async loadData() {
      await this.$store.dispatch("job_posting/view");
    },
    onFileUpload(e) {
      this.file = e;
      e = e.target.files[0];
      if (e["name"].length > 100) {
        alert("255 characters exceeded filename.");
        return;
      }
      try {
        if (e.size > 16000000) {
          alert("Only 15mb file can be accepted.");
          return;
        }
      } catch (error) {
        alert(error);
        return;
      }
      this.file = e;
    },
  },
  data() {
    return {
      isDelete: false,
      isEdit: false,
      register: {},
      file: "",
      post: "",
    };
  },
};
</script>

<style>
</style>