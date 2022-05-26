<template>
  <div class="pa-10">
        <div class="text-h5 pb-10" >
           <b> Dashboard</b>
        </div>
         <div>
              <v-text-field label="Post Something..." append-icon="mdi-post" outlined v-model="post"></v-text-field>
         </div>
         <div align="end">
             Upload Photo <v-icon>mdi-plus</v-icon>
         </div>
         <div class="pt-5">
             <v-card height="200" class="rounded-xl pa-5" elevation="6">
                 <div>
                     Advertise Jobs for Free in the Philippines! Over 3M+ Candidates. 14 Days Free Trial. 300,000+ Local Jobseekers, 10,000+ Companies Already Onboard! 14 Days Free Trial. Schedule Video Interviews. Post on Multiple Sites. Post Jobs for Free. Advertise Jobs for Free in the Philippines! Over 3M+ Candidates. 14 days free trial. 300,000+ Local Jobseekers. 10,000+ Companies Already Onboard! 14 Days Free Trial. Schedule Video Interviews. Post Jobs for Free.
                 </div>
             </v-card>
         </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            post:''
        }
    }

}
</script>

<style>

</style>