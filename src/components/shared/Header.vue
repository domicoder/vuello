<template>
  <div>
    <v-app-bar color="background-color-base-1" dark dense>
      <v-menu :close-on-content-click="false">
        <template v-slot:activator="{ on, attrs }">
          <v-btn class="toolbar-icon-custom" v-bind="attrs" v-on="on">
            <v-icon class="btn-icon-custom">mdi-view-comfy</v-icon>
          </v-btn>
        </template>
        <v-flex style="width: 300px">
          <v-list>
            <v-list-item>
              <v-list-item-title>
                <v-btn
                  class="transparent rounded-0 justify-start elevation-0 my-2 text-none"
                  block
                  text
                  href="https://github.com/domicoder"
                  target="_blank"
                >
                  <v-icon>mdi-github</v-icon>
                  &nbsp;Go to GitHub
                </v-btn>
                <v-btn
                  class="transparent rounded-0 justify-start elevation-0 my-5 text-none"
                  block
                  text
                  href="https://linkedin.com/in/sanchezyander"
                  target="_blank"
                >
                  <v-icon>mdi-linkedin</v-icon>
                  &nbsp;Go to LinkedIn
                </v-btn>
                <v-btn
                  class="transparent rounded-0 justify-start elevation-0 my-5 text-none"
                  block
                  text
                  href="#"
                >
                  <v-icon>mdi-information-outline</v-icon>
                  &nbsp;About
                </v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-flex>
      </v-menu>
      <v-btn class="toolbar-icon-custom" to="/">
        <v-icon class="btn-icon-custom">mdi-home-outline</v-icon>
      </v-btn>
      <v-menu
        v-model="boardMenu"
        :close-on-content-click="onCloseBoardMenuOption"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="toolbar-icon-custom hover-btn-text-icon-custom"
            @click="openBoardsDialog"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-view-dashboard-outline</v-icon>
            <span class="mr-2 text-custom-1">Tableros</span>
          </v-btn>
        </template>
        <v-flex style="width: 350px">
          <v-list>
            <v-list-item class="ma-2">
              <v-list-item-content>
                <v-list-item-title class="mb-3 mt-3">
                  <span class="title font-weight-bold">Favourites boards</span>
                </v-list-item-title>
                <v-flex class="d-flex">
                  <div style="display: inline-block" class="ma-0">
                    <v-avatar tile color="blue"></v-avatar>
                  </div>
                  <div style="display: inline-block" class="ma-0">
                    <p class="my-0 ml-2 subtitle-1 font-weight-bold">Title</p>
                    <p class="my-0 ml-2 body-2">Subtitle</p>
                  </div>
                </v-flex>
              </v-list-item-content>
            </v-list-item>
            <v-list-item class="ma-2">
              <v-list-item-content>
                <v-list-item-title class="mb-2 mt-2">
                  <span class="title font-weight-bold">Workspace name</span>
                </v-list-item-title>
                <!-- <router-link
                  :to="{ name: 'BoardDetail', params: { id: 1 } }"
                  v-slot="{ href, navigate }"
                  custom
                > -->
                <!-- <button :href="href" @click="navigate" v-ripple> -->
                <button @click="goToBoard(1)" v-ripple>
                  <div class="d-block my-2 font-weight-bold text-start">
                    <span>Board name</span>
                  </div>
                  <v-flex class="d-flex">
                    <div style="display: inline-block" class="ma-0">
                      <v-avatar tile color="blue"></v-avatar>
                    </div>
                    <div style="display: inline-block" class="ma-0">
                      <p class="my-0 ml-2 subtitle-1 text-start">Title</p>
                      <p class="my-0 ml-2 body-2 text-start">Subtitle</p>
                    </div>
                  </v-flex>
                </button>
                <!-- </router-link> -->
              </v-list-item-content>
            </v-list-item>
            <v-list-item class="ma-2">
              <v-list-item-content>
                <v-list-item-title class="mb-2 mt-2">
                  <span class="title font-weight-bold">Workspace name 2</span>
                </v-list-item-title>
                <!-- <router-link
                  :to="{ name: 'BoardDetail', params: { id: 1 } }"
                  v-slot="{ href, navigate }"
                  custom
                > -->
                <!-- <button :href="href" @click="navigate" v-ripple> -->
                <button @click="goToBoard(2)" v-ripple>
                  <div class="d-block my-2 font-weight-bold text-start">
                    <span>Board name 2</span>
                  </div>
                  <v-flex class="d-flex">
                    <div style="display: inline-block" class="ma-0">
                      <v-avatar tile color="blue"></v-avatar>
                    </div>
                    <div style="display: inline-block" class="ma-0">
                      <p class="my-0 ml-2 subtitle-1 text-start">Title 2</p>
                      <p class="my-0 ml-2 body-2 text-start">Subtitle 2</p>
                    </div>
                  </v-flex>
                </button>
                <!-- </router-link> -->
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-flex>
      </v-menu>
      <v-spacer></v-spacer>
      <v-btn
        class="toolbar-icon-custom__logo align-center ml-auto hover-btn-base-transparent"
      >
        <v-icon class="btn-icon-custom texts-color-secondary">
          mdi-vuetify
        </v-icon>
        <span class="title-custom-1">Vuello</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <!-- Show tooltip button is disabled 'div with on' -->
          <div v-on="on">
            <v-btn class="toolbar-icon-custom" disabled v-bind="attrs">
              <v-icon class="btn-icon-custom">mdi-plus</v-icon>
            </v-btn>
          </div>
        </template>
        <span>Cooming soon!</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <!-- Show tooltip button is disabled 'div with on' -->
          <div v-on="on">
            <v-btn class="toolbar-icon-custom" disabled v-bind="attrs">
              <v-icon class="btn-icon-custom">mdi-information-outline</v-icon>
            </v-btn>
          </div>
        </template>
        <span>Cooming soon!</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <!-- Show tooltip button is disabled 'div with on' -->
          <div v-on="on">
            <v-btn class="toolbar-icon-custom" disabled v-bind="attrs">
              <v-icon class="btn-icon-custom">mdi-bell-outline</v-icon>
            </v-btn>
          </div>
        </template>
        <span>Cooming soon!</span>
      </v-tooltip>
      <v-avatar
        v-ripple
        class="toolbar-icon-custom__avatar rounded-circle"
        @click="showUserProfile()"
      >
        <v-img :src="profile.picture" alt="Profile" />
      </v-avatar>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  props: {
    subtitle: String,
  },
  name: "Header",
  data: () => {
    return {
      title: "Home",
      onCloseBoardMenuOption: false,
      boardMenu: false,
      profile: {
        picture: "https://avatars.githubusercontent.com/u/40843755?v=4",
      },
    };
  },
  methods: {
    loadSubtitle() {
      console.log(
        "%cHeader.vue line:30 this.body",
        "color: #007acc;",
        this.body
      );
      console.log(
        "%cHeader.vue line:31 this.subtitle",
        "color: #007acc;",
        this.subtitle
      );
    },
    print() {
      console.log("Printed!");
    },
    openBoardsDialog() {
      this.boardMenu = true;
    },
    goToBoard(params) {
      const currentRoute = "BoardDetail";
      const currentRouteParams = this.$router.currentRoute.params.id;
      console.log(this.$router.currentRoute.params.id);

      if (
        !(
          this.$router.currentRoute.name + `/${currentRouteParams}` ==
          currentRoute + `/${params}`
        )
      ) {
        this.$router.push({ name: "BoardDetail", params: { id: params } });
      }

      this.boardMenu = false;
    },
    showUserProfile() {
      const profileRoute = "Profile";
      // if (!(this.$router.currentRoute.name == profileRoute)) {
      this.$router.push({ name: profileRoute });
      // }
    },
  },
};
</script>
<style lang="scss" scoped>
$color-primary-base: #2f4154;
$color-secondary-base-1: #00ffcf;
$color-secondary-base-2: #24b39a;
$color-secondary-base-3: #26bea4;
$color-secondary-base-4: #fde67d;
$background-btn-color-opaque: rgba(255, 255, 255, 0.3);

$size-default-icons: 35px;

@font-face {
  font-family: "PTSansBold";
  src: url(../../assets/fonts/PTSans_Bold.ttf) format("truetype");
}
@mixin button-opaque-1 {
  border-radius: 3px !important;
  border: 0 !important;
  text-decoration: none !important;
  align-items: center !important;
  background-color: $background-btn-color-opaque !important;
  box-shadow: none !important;
  color: #ffffff !important;
  display: flex !important;
  font-weight: bold !important;
  height: $size-default-icons !important;
  line-height: $size-default-icons !important;
  margin: 0 4px 0 0 !important;
  padding: 0 !important;
  white-space: nowrap !important;
  min-width: $size-default-icons !important;
}
@mixin hover-btn-icon-custom {
  &:hover {
    color: $color-secondary-base-1 !important;
  }
}
.toolbar-icon-custom {
  @include button-opaque-1;
  &__logo {
    @include button-opaque-1;
    background-color: rgba(255, 255, 255, 0) !important;
    box-shadow: none !important;
  }
  &__avatar {
    @include button-opaque-1;
    background-color: rgba(255, 255, 255, 0) !important;
    width: 1% !important;
    &:hover {
      cursor: pointer !important;
    }
  }
}
.btn-icon-custom {
  margin-right: 1px !important;
  @include hover-btn-icon-custom;
}
.hover-btn-text-custom {
  @include hover-btn-icon-custom;
}
.hover-btn-text-icon-custom {
  &:hover {
    color: $color-secondary-base-1 !important;
  }
  &::before {
    background-color: $background-btn-color-opaque !important;
  }
}
.hover-btn-base-transparent {
  &:hover {
    color: $color-secondary-base-1 !important;
  }
  &::before {
    background-color: $color-primary-base !important;
  }
}
.text-custom-1 {
  text-transform: capitalize !important;
  font-size: 15px;
}
.title-custom-1 {
  font-family: "PTSansBold" !important;
  text-transform: capitalize !important;
  font-size: 20px;
}
.background-color-base-1 {
  background-color: $color-primary-base !important;
  border-color: $color-primary-base !important;
}
.texts-color-secondary {
  color: $color-secondary-base-1 !important;
}
.v-menu__content {
  top: 49px !important;
}
.c-pointer {
  cursor: pointer !important;
}
</style>
