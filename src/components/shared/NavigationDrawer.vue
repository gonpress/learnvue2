<template>
  <div>
      <v-navigation-drawer
        app
        permanent
        expand-on-hover
        mini-variant
        color="warning"
      >
        <v-list>
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/men/80.jpg"></v-img>
            </v-list-item-avatar>
            <v-list-item-title class="text-h6">
              Sandra Adams
            </v-list-item-title>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          link
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

      </v-navigation-drawer>
  </div>
</template>

<script>
  export default {
    name: "NavigationDrawer",
    methods: {
    },
    data: () => {
      return {
        items: [
          {
            title: 'Home',
            icon: 'mdi-view-dashboard',
            link: '/',
          },
          {
            title: 'FBI',
            icon: 'mdi-image',
            link: '/fbitest'
          },
        ],
        right: null,
      }
    },
  }
</script>
