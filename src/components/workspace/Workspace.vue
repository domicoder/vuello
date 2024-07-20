<template>
  <v-main>
    <div class="mb-6" style="background-color: #000000">
      <v-card class="background-color-custom rounded-0 divider-bottom-gray">
        <v-container class="align-center pa-0 pt-3">
          <v-card elevation="0" class="px-4 py-5 background-color-custom">
            <strong class="title-workspace">Your workspaces</strong>
          </v-card>
        </v-container>
      </v-card>
      <v-card elevation="0" class="rounded-0">
        <v-container class="align-center">
          <v-row
            dense
            v-for="(workspace, indexWorkspace) in workspaces"
            :key="indexWorkspace"
          >
            <v-col cols="12" class="mt-6">
              <v-btn
                elevation="0"
                v-for="(tab, indexTab) in workspace.tabs"
                :key="indexTab"
                :class="tab.class + ' mr-2 btn-workspace-custom'"
                :to="tab.name == 'Boards' ? '/workspace/boards' : ''"
              >
                <v-icon size="20px" class="mr-1">{{ tab.icon }}</v-icon>
                {{ tab.name }}
              </v-btn>
            </v-col>
            <v-col
              cols="12"
              md="3"
              sm="6"
              lg="3"
              v-for="(board, indexBoard) in boards"
              :key="indexBoard"
            >
              <v-card
                elevation="0"
                md-12
                class="px-4 pt-5 col-md-2 my-2"
                :color="pickRamdonColor(indexBoard)"
                @click="goNewBoard"
              >
                <v-card-text class="white--text">
                  <strong>{{ board.title }}</strong>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="3" sm="6" lg="3">
              <v-card
                elevation="0"
                md-12
                class="px-4 pt-5 col-md-2 my-2"
                color="#eaeaea"
                @click="addNewBoard"
              >
                <v-card-text class="black--text">
                  <v-icon class="black--text mb-1" size="19px">mdi-plus</v-icon>
                  <strong>Add new board</strong>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </div>
  </v-main>
</template>

<script>
export default {
  props: {
    workspacesName: Array,
  },
  name: "Workspace",
  data: () => {
    return {
      tab: null,
      workspaces: [],
      // ! Dummy data
      boards: [
        { id: 1, title: "W2 Board 1" },
        { id: 2, title: "W2 Board 2" },
        { id: 3, title: "W2 Board 3" },
        { id: 4, title: "W2 Board 4" },
        { id: 5, title: "W2 Board 5" },
        { id: 6, title: "W2 Board 6" },
        { id: 7, title: "W2 Board 7" },
        { id: 8, title: "W2 Board 8" },
        { id: 9, title: "W2 Board 9" },
        { id: 10, title: "W2 Board 10" },
        { id: 11, title: "W2 Board 11" },
      ],
      // ! Dummy data
      colorsBoards: [
        { color: "#fa8072" },
        { color: "#37a737" },
        { color: "#d493a8" },
        { color: "#84c28a" },
        { color: "#d08b8b" },
        { color: "#d0a9e1" },
        { color: "#4dbb96" },
        { color: "#a6fade" },
        { color: "#d0a9e1" },
        { color: "#4dbb96" },
        { color: "#a6fade" },
      ],
    };
  },
  created() {
    if (this.workspacesName) {
      this.workspacesName.forEach((workspace) => {
        let tabs = {
          tabs: [
            {
              name: workspace.name,
              icon: "mdi-folder-table-outline",
              class: "btn-workspace__no-ripple",
            },
            {
              name: "Boards",
              icon: "mdi-view-dashboard-outline",
              class: "btn-workspace__ripple",
            },
          ],
        };
        this.workspaces.push(tabs);
      });
    }
  },
  methods: {
    pickRamdonColor(index) {
      // TODO: fix when boards is grather than colorsBoards
      let color = this.colorsBoards[index];
      return color.color;
    },
    goNewBoard() {
      console.log("go board");
    },
    addNewBoard() {
      console.log("add new board");
    },
  },
};
</script>

<style lang="scss" scoped>
$color-secondary-base-4: #fde67d;
$base-color-background: #f5f5f5;

.secondary-base-4 {
  color: $color-secondary-base-4 !important;
}
.custom-tab {
  padding: 0px 16px 0px 5px !important;
  &:active {
    background-color: white !important;
    border-top: 1px solid #e6e6e6 !important;
    border-right: 1px solid #e6e6e6 !important;
    border-left: 1px solid #e6e6e6 !important;
  }
}
.background-color-custom {
  background-color: $base-color-background !important;
}
.divider-bottom-gray {
  border-bottom: 1px solid #d4d4d4 !important;
}
.v-tab::before {
  background-color: white !important;
}
.btn-workspace {
  &__no-ripple {
    background-color: white !important;
    border-top: 0px solid #e6e6e6 !important;
    border-right: 0px solid #e6e6e6 !important;
    border-left: 1px solid #e6e6e6 !important;
    border-radius: 0px !important;
  }
}
.title-workspace {
  text-transform: capitalize !important;
  font-size: 20px !important;
  font-family: "Roboto", sans-serif !important;
}
</style>
