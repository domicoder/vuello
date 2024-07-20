<template>
  <v-main>
    <div class="pt-3">
      <v-layout>
        <v-flex sm2 xs2 md2 elevation-0>
          <v-navigation-drawer permanent height="80vh">
            <v-list-item>
              <v-list-item-avatar>
                <img
                  src="https://avatars.githubusercontent.com/u/40843755?v=4"
                />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>User User</v-list-item-title>
                <v-list-item-subtitle>Subtitle</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense nav>
              <v-list-item
                v-for="item in items"
                :key="item.title"
                link
                @click="showTab(item.title)"
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
        </v-flex>

        <v-flex sm10 xs10 md10 elevation-0 v-show="tabs.tabOne">
          <v-card elevation="0" class="pl-6 pb-10 rounded-0">
            <div>
              <h3>tabOne</h3>
            </div>
          </v-card>
        </v-flex>

        <v-flex sm10 xs10 md10 elevation-0 v-show="tabs.tabTwo">
          <v-card elevation="0" class="pl-6 pb-10 rounded-0">
            <div>
              <h3>tabTwo</h3>
            </div>
          </v-card>
        </v-flex>

        <v-flex sm10 xs10 md10 elevation-0 v-show="tabs.tabThree">
          <v-card elevation="0" class="pl-6 pb-10 rounded-0">
            <div>
              <h3>tabThree</h3>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
    </div>
  </v-main>
</template>

<script>
export default {
  name: "Profile",
  data: () => {
    return {
      title: "Profile information",
      items: [
        { title: "Home", icon: "mdi-home-city" },
        { title: "My Account", icon: "mdi-account" },
        { title: "Users", icon: "mdi-account-group-outline" },
      ],
      tabs: {
        tabOne: true,
        tabTwo: false,
        tabThree: false,
      },
    };
  },
  methods: {
    showTab(tab) {
      console.log(tab);
      switch (tab) {
        case "Home":
          this.onChangeTab({ tabOne: true, tabTwo: false, tabThree: false });
          break;
        case "My Account":
          this.onChangeTab({ tabOne: false, tabTwo: true, tabThree: false });
          break;
        case "Users":
          this.onChangeTab({ tabOne: false, tabTwo: false, tabThree: true });
          break;
        default:
          this.onChangeTab({ tabOne: true, tabTwo: false, tabThree: false });
          break;
      }
    },
    onChangeTab(tabs) {
      this.tabs.tabOne = tabs.tabOne;
      this.tabs.tabTwo = tabs.tabTwo;
      this.tabs.tabThree = tabs.tabThree;
    },
  },
};
</script>

<style></style>
