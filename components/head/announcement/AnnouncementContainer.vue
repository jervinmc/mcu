<template>
  <div class="pa-10">
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
      <b> Announcement</b>
    </div>
    <div>
      <v-text-field
        label="Post Something..."
        append-icon="mdi-post"
        outlined
        v-model="register.content"
      ></v-text-field>
    </div>
      <v-textarea
            label="Description..."
            append-icon="mdi-post"
            outlined
            v-model="register.description"
          ></v-textarea>
    <v-row>
      <v-col>
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
      </v-col>
      <v-col>
        <div align="end">
          <v-btn outlined @click="submitHandlerRegister" color="secondary"
            >Post</v-btn
          >
        </div>
      </v-col>
    </v-row>
    <div class="pt-5 py-5">
      <div v-for="x in announcement_data" :key="x" class="py-5">
         <v-card class="rounded-xl pa-5" elevation="6">
          <div align="end">
            <v-icon @click="editItem(x)">mdi-pencil</v-icon>
          </div>
          <v-row>
            <v-col cols="12">
              <div class="text-h5">
                <b> {{ x.content }} </b>
                <!-- <div>
                  <i>{{x.date_created}}</i>
                </div> -->
              </div>
            </v-col>
            <v-col align="start" cols="6">
              <v-img :src="x.image" max-height="600" max-width="400"></v-img>
            </v-col>
            <v-col>
              <div align="start">
                {{ x.description }}
              </div>
            </v-col>
          </v-row>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
var cloneDeep = require("lodash.clonedeep");
export default {
  computed: {
    ...mapState("announcement", ["announcement_data"]),
  },
  created() {
    this.loadData();
  },
  methods: {
    editItem(item) {
      this.register = cloneDeep(item);
      this.isEdit = true;
    },
    async submitHandlerRegister() {
      let form_data = new FormData();
      if (this.isEdit) {
        form_data.append("content", this.register.content);
        form_data.append("description", this.register.description);
        form_data.append("id", this.register.id);
        await this.$store.dispatch("announcement/edit", form_data);
        alert("Successfully Updated!");
        location.reload();
        return;
      }

      if (this.file != "" && this.file != undefined) {
        form_data.append("image", this.file);
      }
      form_data.append("content", this.register.content);
      form_data.append("description", this.register.description);
      await this.$store.dispatch("announcement/add", form_data);
      this.$store.dispatch("job_posting/notify", {});
      alert("Successfully Posted!");
      this.loadData();
      location.reload();
    },
    async loadData() {
      await this.$store.dispatch("announcement/view");
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
      isEdit: false,
      selectedItem: {},
      register: {},
      file: "",
      post: "",
    };
  },
};
</script>

<style>
</style>