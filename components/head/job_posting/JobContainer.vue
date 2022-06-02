<template>
  <div class="pa-10">
        <div class="text-h5 pb-10" >
           <b> Job Posting</b>
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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