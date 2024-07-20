<template>
  <v-main>
    <div class="mb-6">
      <v-card class="background-color-custom rounded-0 divider-bottom-gray">
        <v-container class="align-center pa-0 pt-3">
          <v-card elevation="0" class="px-4 pt-5 background-color-custom">
            <div>
              <strong class="title-workspace">{{ workspace.name }}</strong>
            </div>
            <div>
              <span class="subtitle-workspace">Workspace</span>
            </div>
            <v-toolbar flat class="background-color-custom">
              <template v-slot:extension>
                <v-tabs v-model="currentTab" color="black">
                  <v-tabs-slider color="white"></v-tabs-slider>
                  <v-tab class="custom-tab text-custom-1" href="#tab-boards">
                    <v-icon class="mr-1">mdi-view-dashboard-outline</v-icon>
                    Boards
                  </v-tab>
                  <v-tab class="custom-tab text-custom-1" href="#tab-members">
                    <v-icon class="mr-1">mdi-account-group</v-icon>
                    Members
                  </v-tab>
                </v-tabs>
              </template>
            </v-toolbar>
          </v-card>
        </v-container>
      </v-card>
      <v-card elevation="0" class="rounded-0 pt-7">
        <v-tabs-items v-model="currentTab">
          <v-tab-item value="tab-boards">
            <v-container class="align-center">
              <v-row dense>
                <v-col
                  cols="12"
                  md="3"
                  sm="6"
                  lg="3"
                  v-for="(board, index) in workspace.boards"
                  :key="index"
                >
                  <v-card
                    elevation="0"
                    class="px-4 pt-5 col-md-2 my-2"
                    :color="pickRamdonColor(index)"
                    :to="`/workspace/boards/${board.id}`"
                  >
                    <!-- @click="goBoardDetail" -->
                    <v-card-text class="white--text">
                      <strong>{{ board.title }}</strong>
                    </v-card-text>
                  </v-card>
                </v-col>

                <v-col cols="12" md="3" sm="6" lg="3" v-if="isAddNewBoard">
                  <v-card
                    elevation="0"
                    md-12
                    class="pl-1 pt-5 col-md-2 my-2"
                    color="#eaeaea"
                  >
                    <v-card-text class="black--text pl-0">
                      <input
                        type="text"
                        :name="`add-new-board-${newBoard.id}`"
                        :id="`add-new-board-${newBoard.id}`"
                        placeholder="Title of new board"
                        :v-model="newBoard.title"
                        :value="newBoard.title"
                        class="px-2 input-custom"
                      />
                    </v-card-text>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        elevation="0"
                        text
                        color="#2196f3"
                        class="justify-end"
                        @click="saveChangesNewBoard(newBoard)"
                      >
                        <v-icon color="#2196f3" class="mb-1" size="19px"
                          >mdi-plus</v-icon
                        >
                        <strong> Save </strong>
                      </v-btn>
                    </v-card-actions>
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
                      <v-icon class="black--text mb-1" size="19px"
                        >mdi-plus</v-icon
                      >
                      <strong>Add new board</strong>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
          <v-tab-item value="tab-members">
            <v-container class="align-center">
              <v-row dense>
                <v-col cols="12" md="12" sm="12" lg="12">
                  <v-card elevation="0" @click="goBoardDetail">
                    <span>Detail of users include in this workspace</span>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </div>
  </v-main>
</template>

<script>
export default {
  props: {
    // workspace: Array,
  },
  name: "WorkspaceDetail",
  data: () => {
    return {
      currentTab: "tab-boards",
      // TODO: Fix this error, create a toolbar for differents workspaces and his boards
      // ! Dummy data
      // workspace: [],
      boards: [
        { id: 1, title: "W2 Board 1" },
        { id: 2, title: "W2 Board 2" },
        { id: 3, title: "W2 Board 3" },
        { id: 4, title: "W2 Board 4" },
        { id: 5, title: "W2 Board 5" },
        { id: 6, title: "W2 Board 6" },
        { id: 7, title: "W2 Board 7" },
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
      ],
      isAddNewBoard: false,
      newBoard: { id: 0, title: "gg" },
      workspace: {
        id: 1,
        name: "Workspace 1",
        boards: [
          { id: 1, title: "W1 Board 1" },
          { id: 2, title: "W1 Board 2" },
          { id: 3, title: "W1 Board 3" },
        ],
      },
    };
  },
  created() {
    // if (this.workspacesName) {
    //   this.workspacesName.forEach((workspace) => {
    //     let tabs = {
    //       tabs: [
    //         { name: workspace.name, icon: "mdi-view-comfy" },
    //         { name: "Boards", icon: "mdi-view-dashboard" },
    //       ],
    //     };
    //     this.tabItems.push(tabs);
    //   });
    //   console.log(this.tabItems);
    // }
  },
  methods: {
    pickRamdonColor(index) {
      // TODO: fix when boards is grather than colorsBoards
      let color = this.colorsBoards[index];
      return color.color;
    },
    goBoardDetail() {
      console.log("board detail");
    },
    addNewBoard() {
      this.isAddNewBoard = !this.isAddNewBoard;
      // TODO: Delete this for confirm dialog
      console.log("add new board");
    },
    saveChangesNewBoard(newBoard) {
      let confirm = window.confirm("Are you sure?");
      if (confirm) {
        console.log(this.newBoard);
        let board = { id: 3, title: newBoard.title };
        this.workspace.boards.push(board);
        this.isAddNewBoard = false;
        console.log("Added!");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
$color-secondary-base-4: #fde67d;
$color-background-gray: #f5f5f5;

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
  background-color: $color-background-gray !important;
}
.divider-bottom-gray {
  border-bottom: 1px solid #d4d4d4 !important;
}
.v-tab::before {
  background-color: white !important;
}
.v-tab--active {
  background-color: white !important;
  border-top: 1px solid #e6e6e6 !important;
  border-right: 1px solid #e6e6e6 !important;
  border-left: 1px solid #e6e6e6 !important;
}
.text-custom-1 {
  text-transform: capitalize !important;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
}
.title-workspace {
  text-transform: capitalize !important;
  font-size: 20px !important;
  font-family: "Roboto", sans-serif !important;
}
.subtitle-workspace {
  text-transform: capitalize !important;
  font-size: 12px !important;
  font-family: "Roboto", sans-serif !important;
}
.input-custom {
  box-sizing: border-box !important;
  display: inline-block !important;
  width: 94%;
  margin-left: 16px;
  font-size: 17px;
  &:focus {
    outline: solid rgb(64, 96, 164) 3px !important;
    background-color: #ffffff;
  }
}
</style>
