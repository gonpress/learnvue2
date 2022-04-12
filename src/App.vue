<template>
  <v-app>
    <NavigationDrawer />

    <v-app-bar app :elevation="2" color="grey lighten-4">
      <span class="title ml-3 mr-5">
        <span class="font-weight-light">
          커뮤니티 어드민 
          <strong class="warning--text">
            Local
          </strong>
        </span>
      </span>  
    </v-app-bar>

    <v-main app class="ml-7 mt-7">
      <router-view/>
    </v-main>

    <v-footer app>
      footer
    </v-footer>
  </v-app>
</template>

<script>
import NavigationDrawer from '@/components/shared/NavigationDrawer'
export default {
  name: 'App',
  components: {
    NavigationDrawer
  },
  data: () => ({
    //
  }),
};
</script>
