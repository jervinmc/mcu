<template>
  <div>
    <v-snackbar
      top
      absolute
      bottom
      color="error"
      outlined
      centered
      v-model="snackbar"
    >
      Wrong Credentials
      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <v-snackbar
      top
      absolute
      bottom
      color="error"
      outlined
      centered
      v-model="snackbarisVerified"
    >
      Not yet verified. Please check your email. Thank you!
      <template v-slot:action="{ attrs }">
        <v-btn
          color="red"
          text
          v-bind="attrs"
          @click="snackbarisVerified = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

    <v-card
      height="700"
      :style="category == 'register' ? 'overflow:scroll' : ''"
      width="700"
      class="rounded-xl"
      elevation="12"
    >
      <div
        style="background-color: #7c0ba0; color: white"
        align="center"
        class="pa-5"
      >
        Login Form
      </div>
      <div
        align="start"
        class="pa-5"
        v-if="category != 'login'"
        @click="category = 'login'"
        style="cursor: pointer"
      >
        <v-icon color="black">mdi-arrow-left</v-icon>
      </div>
      <div class="pt-5">
        <v-img src="/mcu_sealed.png" height="150" width="150" contain> </v-img>
        <div align="center" v-if="category == 'forgot-password'">
          To reset your password,submit your email address below.
        </div>
      </div>
      <div class="pa-5" align="start">
        <div v-if="category == 'register'" class="pb-10">
          To continue with your registration, kindly complete the form.
          <div class="text-h6 pt-5">
            <b> Search by email address</b>
          </div>
        </div>
        <v-row>
          <v-col v-if="!isOTP">
            <div>Email</div>
            <div>
              <v-text-field
                hide-details=""
                append-icon="mdi-account"
                outlined
                v-model="register.email"
              ></v-text-field>
            </div>
          </v-col>
          <v-col cols="12" v-if="category == 'register'">
            <div>Student Number</div>
            <div>
              <v-text-field
                hide-details=""
                append-icon="mdi-account"
                outlined
                v-model="register.student_number"
              ></v-text-field>
            </div>
          </v-col>
          <v-col cols="12" v-if="category == 'register'">
            <div>Firstname</div>
            <div>
              <v-text-field
                hide-details=""
                append-icon="mdi-account"
                outlined
                v-model="register.firstname"
              ></v-text-field>
            </div>
          </v-col>
          <v-col cols="12" v-if="category == 'register'">
            <div>Lastname</div>
            <div>
              <v-text-field
                hide-details=""
                append-icon="mdi-account"
                outlined
                v-model="register.lastname"
              ></v-text-field>
            </div>
          </v-col>
          <v-col cols="12" v-if="category == 'register'">
            <div>Middle Initial</div>
            <div>
              <v-text-field
                hide-details=""
                append-icon="mdi-account"
                outlined
                v-model="register.middlename"
              ></v-text-field>
            </div>
          </v-col>
          <v-col cols="12" v-if="category == 'register'">
            <div>Year Graduated</div>
            <div>
              <v-text-field
                hide-details=""
                append-icon="mdi-account"
                outlined
                v-model="register.last_attended"
              ></v-text-field>
            </div>
          </v-col>
          <v-col cols="12" v-if="category == 'register'">
            <div>Mobile Number</div>
            <div>
              <v-text-field
                type="number"
                hide-details=""
                append-icon="mdi-account"
                outlined
                v-model="register.mobile_number"
              ></v-text-field>
            </div>
          </v-col>

          <div class="pl-4" v-if="category == 'register'">Working Status</div>
          <v-radio-group
            v-model="register.work_status"
            v-if="category == 'register'"
          >
            <v-radio label="Employed" value="Employed"></v-radio>
            <v-radio label="Unemployed" value="Unemployed"></v-radio>
            <v-radio label="Self Employed" value="Self Employed"></v-radio>
          </v-radio-group>
          <v-col cols="12" v-if="isOTP">
            <div>OTP</div>
            <div>
              <v-text-field outlined v-model="register.otp"></v-text-field>
            </div>
          </v-col>
          <v-col
            cols="12"
            v-else-if="category != 'forgot-password' && category != 'register'"
          >
            <div>Password</div>
            <div>
              <v-text-field
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="show1 = !show1"
                outlined
                v-model="register.password"
                :type="show1 ? 'text' : 'password'"
              ></v-text-field>
            </div>
            <div>
              <v-row v-if="category == 'login'">
                <v-col>
                  <b style="cursor: pointer" @click="category = 'register'">
                    Register Now</b
                  >
                </v-col>
                <v-col
                  @click="category = 'forgot-password'"
                  align-self="center"
                  align="end"
                >
                  <b style="cursor: pointer"> Forgot Password?</b>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>

        <div align="center" class="pt-10" v-if="category == 'login'">
          <v-btn
            depressed
            color="#7c0ba0"
            dark
            @click="submitHandler"
            :loading="isLoaded"
          >
            Login
          </v-btn>
        </div>
        <div v-if="category == 'forgot-password'" align="center" class="pt-10">
          <v-btn
            depressed
            color="#7c0ba0"
            dark
            @click="resetPass"
            :loading="isLoaded"
          >
            Send
          </v-btn>
        </div>
        <div v-if="category == 'register'" align="center" class="pt-10">
          <v-btn
            depressed
            color="#7c0ba0"
            dark
            @click="submitHandlerRegister"
            :loading="isLoaded"
          >
            Submit
          </v-btn>
        </div>
        <div v-if="category == 'register'" align="center" class="py-10">
          Please wait for Program head approval on your account
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      otpValue: "",
      isOTP: false,
      show1: false,
      category: "login",
      snackbar: false,
      img_holder: "image_placeholder.png",
      image: "",
      url: "",
      users: [],
      isLoaded: false,
      register: {},
      snackbarisVerified: false,
    };
  },
  methods: {
    resetPass() {
      this.$store
        .dispatch("users/reset_password", { email: this.register.email })
        .then((res) => {});
      alert("Successfully Sent!");
    },
    sendOtp() {
      if (this.isOTP) {
        if (this.otpValue == this.register.otp) {
          this.submitHandler();
        } else {
          alert("Wrong OTP");
        }

        return;
      } else {
        this.otpValue = Math.random().toString(6).slice(2);
        this.$store
          .dispatch("users/otp", {
            email: this.register.email,
            code: this.otpValue,
          })
          .then((res) => {
            alert("OTP code sent to your email");
            this.isOTP = true;
          });
      }
    },
    async submitHandlerRegister() {
      if (this.register.email == "" || this.register.email == undefined) {
        alert("Email field is required.");
        return;
      }
      if (
        this.register.student_number == "" ||
        this.register.student_number == undefined
      ) {
        alert("Student Number field is required.");
        return;
      }
      if (
        this.register.firstname == "" ||
        this.register.firstname == undefined
      ) {
        alert("Firstname field is required.");
        return;
      }
      if (this.register.lastname == "" || this.register.lastname == undefined) {
        alert("Lastname field is required.");
        return;
      }
      if (
        this.register.middlename == "" ||
        this.register.middlename == undefined
      ) {
        alert("Middle Name field is required.");
        return;
      }
      if (
        this.register.last_attended == "" ||
        this.register.last_attended == undefined
      ) {
        alert("Year graduated field is required.");
        return;
      }
      if (
        this.register.mobile_number == "" ||
        this.register.mobile_number == undefined
      ) {
        alert("Mobile Number field is required.");
        return;
      }
      if (
        this.register.work_status == "" ||
        this.register.work_status == undefined
      ) {
        alert("Work status field is required.");
        return;
      }
      this.isLoaded = true;
      // this.$refs.form.validate();
      // if (!this.isValid) return;
      // console.log(this.register);
      try {
        this.register.password = "wew123WEW";
        this.register.account_type = "Student";
        this.register.is_active = false;
        await this.$store.dispatch("users/add", this.register);
        alert("Successful !");
        location = "/login";
      } catch (error) {
        alert(
          "Please make sure that the password is not related on the user`s details and the password must be at least 6 minimum character"
        );
        // alert(error)
      }
      this.isLoaded = false;
    },
    async submitHandler() {
      this.isLoaded = true;
      try {
        const response = await this.$auth.loginWith("local", {
          data: this.register,
        });
      } catch (error) {
        alert("Wrong credentials");
        location.reload();
        this.isLoaded = false;
      }
    },
    //  async login() {
    //      if(this.users.email=='admin'){
    //          localStorage.setItem('account_type','admin')
    //          window.location.href="/admin/otp"

    //      }
    //      else if(this.users.email=='head'){
    //           localStorage.setItem('account_type','head')
    //          window.location.href="/dashboard"
    //      }
    //      else{
    //         localStorage.setItem('account_type','student')
    //          window.location.href="/student/dashboard"
    //      }
    //     //  window.location.href="dashboard"
    //   this.isLoaded = true;
    //   var credentials = {
    //     email: this.users.email,
    //     password: this.users.password,
    //   };
    //   try {
    //     var response = await this.$axios
    //       .post("login/", credentials)
    //       .then((response) => {
    //          if(response.data[0].status=='Deactivated'){
    //             alert("Your account is still deactivated. Please wait to approved by the admin.")
    //                this.isLoaded = false;
    //             return
    //           }
    //         if(response.data=='no_data'){
    //             alert('Wrong Credentials')
    //             this.isLoaded=false;
    //             return
    //         }
    //         console.log(response.data)
    //         localStorage.setItem("id", response.data[0].id);
    //         localStorage.setItem("account_type", response.data[0].account_type);
    //         // console.log(response)
    //         if(response.data[0].account_type=='Admin'){
    //             window.location.href="/admin/dashboard"
    //         }
    //         else{

    //             window.location.href="/artist/design"
    //         }

    //         // const users = this.$axios
    //         //   .get(`/users/details/`, {
    //         //     headers: {
    //         //       Authorization: `Bearer ${localStorage.getItem("token")}`,
    //         //     },
    //         //   })
    //         //   .then((users) => {
    //         //     // if(!users.data.is_verified){
    //         //     //   this.snackbarisVerified = true
    //         //     //   this.isLoaded=false
    //         //     //   return
    //         //     // }
    //         //     localStorage.setItem("id", users.data.id);
    //         //     localStorage.setItem("middlename", users.data.middlename);
    //         //     localStorage.setItem("firstname", users.data.firstname);
    //         //     localStorage.setItem("lastname", users.data.lastname);
    //         //     localStorage.setItem("account_type",users.data.account_type)
    //         //     if(users.data.account_type=='Client'){
    //         //       window.location.href="/beneficiaries"
    //         //     }
    //         //     else{
    //         //         window.location.href="/admin/dashboard"
    //         //     }
    //         //     this.isLoaded = false;

    //         //     // if(users.data.is_superuser) window.location.href = "/home";
    //         //     // else window.location.href = "/home";
    //         //   });
    //       });

    //   } catch (error) {
    //     this.snackbar = true;
    //     this.isLoaded = false;
    //   }
    // },
    onFileUpload(e) {
      this.image = e;
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
      this.image = e;
      if (e == null) {
      } else {
        this.url, (this.img_holder = URL.createObjectURL(e));
      }
    },
  },
};
</script>

<style>
</style>