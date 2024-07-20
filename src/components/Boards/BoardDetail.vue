<template>
  <v-main class="background-color-board-view">
    <div>
      <v-card elevation="0" class="rounded-0 background-color-board-view px-3">
        <v-container style="margin-right: auto !important; display: inline">
          <v-row dense>
            <v-col cols="12" class="mt-6 pl-3">
              <v-btn elevation="0" class="btn-opaque-custom__title">
                {{ board.title }}
              </v-btn>
            </v-col>
            <div class="scroll-x">
              <v-col
                cols="9"
                sm="6"
                md="6"
                lg="4"
                xl="3"
                v-for="(list, indexLists) in lists"
                :key="indexLists"
              >
                <v-card
                  elevation="0"
                  md-12
                  class="col-md-2 my-2 px-0 background-color-board-view"
                >
                  <!-- <v-btn
                  elevation="0"
                  class="btn-opaque-custom__new-cards justify-start"
                  block
                  v-show="!isAddNewList"
                  @click="openAddNewList(isAddNewList)"
                >
                  <v-icon
                    class="white--text mb-1"
                    size="19px"
                    v-show="!isAddNewList"
                    >mdi-plus</v-icon
                  >
                  <strong>Add new list</strong>
                </v-btn> -->
                  <v-card
                    elevation="0"
                    md-12
                    class="my-2 px-0 pt-2 background-color-custom"
                  >
                    <v-layout>
                      <v-flex xs10 sm10>
                        <!-- // TODO: BUG with Vmodel not change -->
                        <input
                          type="text"
                          name="board-title"
                          id="board-title"
                          placeholder="Title of new task"
                          :value="list.title"
                          :v-model="list.title"
                          class="px-2 pb-1 pt-2 mt-1 input-custom font-weight-bold"
                        />
                      </v-flex>
                      <v-flex xs2 sm2>
                        <v-menu left bottom>
                          <template v-slot:activator="{ on, attrs }">
                            <v-btn icon v-bind="attrs" v-on="on">
                              <v-icon size="19px">mdi-dots-horizontal</v-icon>
                            </v-btn>
                          </template>
                          <v-list>
                            <v-list-item
                              v-for="(item, indexOption) in taskOption"
                              :key="indexOption"
                              @click="addNewTask(isAddingNewTask)"
                            >
                              <v-list-item-title class="mr-14">
                                <v-icon
                                  color="black--text"
                                  class="mb-1"
                                  size="19px"
                                  >mdi-plus</v-icon
                                >
                                {{ item }}
                              </v-list-item-title>
                            </v-list-item>
                          </v-list>
                        </v-menu>
                      </v-flex>
                    </v-layout>
                    <v-card-actions class="" style="width: 100%">
                      <v-container grid-list-xs>
                        <v-card
                          elevation="1"
                          class="mb-5"
                          v-for="(task, indexList) in list.task"
                          :key="indexList"
                        >
                          <v-card-subtitle
                            class="font-weight-bold body-1 black--text"
                          >
                            {{ task.title }}
                          </v-card-subtitle>
                          <v-card-text>
                            <input
                              type="text"
                              :v-model="task.description"
                              :name="`task-title-${task.id}`"
                              :id="`task-title-${task.id}`"
                              placeholder="Title of new task"
                              :value="task.description"
                              class="px-2 pb-1 pt-2 mt-1 input-custom"
                            />
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>

                            <v-btn
                              elevation="0"
                              text
                              color="#2196f3"
                              class="justify-end"
                              @click="saveChangesTask(task)"
                            >
                              <v-icon color="#2196f3" class="mb-1" size="19px"
                                >mdi-plus</v-icon
                              >
                              <strong> Save </strong>
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-container>
                    </v-card-actions>
                    <v-divider></v-divider>
                    <v-card-actions
                      class=""
                      style="width: 100%"
                      v-if="isAddingNewTask"
                    >
                      <v-container grid-list-xs>
                        <v-card elevation="1" class="mb-5">
                          <v-card-text>
                            <input
                              type="text"
                              :name="`new-task-title`"
                              :id="`new-task-title`"
                              placeholder="Title of new task"
                              :value="createNewTask.title"
                              :v-model="createNewTask.title"
                              class="px-2 pb-1 pt-2 mt-1 input-custom font-weight-bold"
                            />
                          </v-card-text>
                          <v-card-text>
                            <input
                              type="text"
                              :name="`new-task-description`"
                              :id="`new-task-description-`"
                              placeholder="Description of new task"
                              :value="createNewTask.description"
                              :v-model="createNewTask.description"
                              class="px-2 pb-1 pt-2 mt-1 input-custom"
                            />
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              elevation="0"
                              text
                              color="red"
                              class="justify-end"
                              v-if="isAddingNewTask"
                              @click="closeAddNewTask(isAddingNewTask)"
                            >
                              <v-icon class="red--text mb-1" size="19px"
                                >mdi-close</v-icon
                              >
                              <strong> Close </strong>
                            </v-btn>
                            <v-btn
                              elevation="0"
                              text
                              color="#2196f3"
                              class="justify-end"
                              @click="saveNewTask(createNewTask)"
                            >
                              <v-icon color="#2196f3" class="mb-1" size="19px"
                                >mdi-plus</v-icon
                              >
                              <strong> Save </strong>
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-container>
                    </v-card-actions>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        elevation="0"
                        color="red"
                        class="justify-end background-color-custom"
                        @click="addNewTask(isAddingNewTask)"
                      >
                        <v-icon class="black--text mb-1" size="19px"
                          >mdi-plus</v-icon
                        >
                        <strong> Add new task </strong>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-card>
              </v-col>
              <v-col cols="9" sm="6" md="6" lg="4" xl="3">
                <v-card
                  elevation="0"
                  md-12
                  class="col-md-2 my-2 px-0 background-color-board-view"
                >
                  <v-btn
                    elevation="0"
                    class="btn-opaque-custom__new-cards mt-2 py-7 justify-start"
                    block
                    v-show="!isAddNewList"
                    @click="openAddNewList(isAddNewList)"
                  >
                    <v-icon
                      class="white--text mb-1"
                      size="19px"
                      v-show="!isAddNewList"
                      >mdi-plus</v-icon
                    >
                    <strong>Add new list</strong>
                  </v-btn>
                  <v-card
                    elevation="0"
                    md-12
                    class="my-2 px-0 background-color-custom"
                    v-show="isAddNewList"
                  >
                    <v-text-field
                      v-model="titleNewList"
                      color="black"
                      filled
                      label="Title"
                      placeholder="Title of new list"
                      class="px-2 pt-4 px-4"
                      :outlined="true"
                    ></v-text-field>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn
                        elevation="0"
                        text
                        color="red"
                        class="justify-end background-color-custom"
                        @click="closeAddNewList(isAddNewList)"
                      >
                        <v-icon class="red--text mb-1" size="19px"
                          >mdi-close</v-icon
                        >
                        <strong> Close </strong>
                      </v-btn>
                      <v-btn
                        elevation="0"
                        color="red"
                        class="justify-end background-color-custom"
                        @click="addNewList(titleNewList)"
                      >
                        <v-icon class="black--text mb-1" size="19px"
                          >mdi-plus</v-icon
                        >
                        <strong> Add list </strong>
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-card>
              </v-col>
            </div>
          </v-row>
        </v-container>
      </v-card>
    </div>
  </v-main>
</template>

<script>
export default {
  props: {
    id: String,
  },
  name: "BoardDetail",
  data: () => {
    return {
      isAddNewList: false,
      titleNewList: null,
      boardTitle: "Title",
      isAddingNewTask: false,
      taskOption: ["Add new task"],
      createNewTask: { title: "", description: "" },
      lists: [
        {
          id: 1,
          title: "TO DO",
          task: [
            {
              id: 1,
              title: "Task 1",
              description: "Help to edit a document.docx",
            },
            {
              id: 2,
              title: "Task 2",
              description: "Help to edit a document.docx",
            },
          ],
        },
        // {
        //   id: 2,
        //   title: "TO DO",
        //   task: [
        //     {
        //       id: 1,
        //       title: "Task 1",
        //       description: "Help to edit a document.docx",
        //     },
        //     {
        //       id: 2,
        //       title: "Task 2",
        //       description: "Help to edit a document.docx",
        //     },
        //   ],
        // },
        // {
        //   id: 3,
        //   title: "TO DO",
        //   task: [
        //     {
        //       id: 1,
        //       title: "Task 1",
        //       description: "Help to edit a document.docx",
        //     },
        //     {
        //       id: 2,
        //       title: "Task 2",
        //       description: "Help to edit a document.docx",
        //     },
        //   ],
        // },
        // {
        //   id: 4,
        //   title: "TO DO",
        //   task: [
        //     {
        //       id: 1,
        //       title: "Task 1",
        //       description: "Help to edit a document.docx",
        //     },
        //     {
        //       id: 2,
        //       title: "Task 2",
        //       description: "Help to edit a document.docx",
        //     },
        //   ],
        // },
        // {
        //   id: 5,
        //   title: "TO DO",
        //   task: [
        //     {
        //       id: 1,
        //       title: "Task 1",
        //       description: "Help to edit a document.docx",
        //     },
        //     {
        //       id: 2,
        //       title: "Task 2",
        //       description: "Help to edit a document.docx",
        //     },
        //   ],
        // },
        // {
        //   id: 6,
        //   title: "TO DO",
        //   task: [
        //     {
        //       id: 1,
        //       title: "Task 1",
        //       description: "Help to edit a document.docx",
        //     },
        //     {
        //       id: 2,
        //       title: "Task 2",
        //       description: "Help to edit a document.docx",
        //     },
        // ],
        // },
      ],
      board: { id: 1, title: "W2 Board 1" },
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
    };
  },
  mounted() {
    console.log("id", this.id);
  },
  methods: {
    openAddNewList(value) {
      console.log(value);
      if (!value) {
        this.isAddNewList = !this.isAddNewList;
        console.log("Add");
      } else {
        this.isAddNewList = !this.isAddNewList;
        console.log("Close");
      }
    },
    addNewList(value) {
      let list = { title: value.toUpperCase(), task: [] };
      if (value) {
        this.titleNewList = "";
        this.isAddNewList = false;
        this.lists.push(list);
        console.log("New list Added!", list);
        console.log("List elements", this.lists);
      } else {
        alert("is null");
      }
    },
    closeAddNewList(value) {
      console.log(value);
      if (value) {
        this.isAddNewList = !this.isAddNewList;
        console.log("Close");
      }
    },
    saveChangesTask(task) {
      console.log("Saved: ", task);
      this.lists.filter((list, index) => {
        // console.log(list.task);
        let ok = list.task.filter((oldTask, indexTask) => {
          // console.log("matched?", oldTask.id == task.id);
          if (oldTask.id == task.id) {
            this.indexList = indexTask;
            console.log("f", {
              indexTask: indexTask,
              indexList: index,
            });
            let editTask = {
              indexTask: indexTask,
              indexList: index,
            };
            return editTask;
          }
        });
        console.log(ok);
        console.log(task);
      });
      // console.log(indexList);
      // console.log(newTaskChanged);
      // this.lists[indexList].task[indexReplaceTask] = task;
    },
    addNewTask(task) {
      this.isAddingNewTask = true;
      console.log("ToCreate new task:", task);
    },
    saveNewTask(task) {
      if (!task) {
        this.isAddingNewTask = false;
        console.log("Task saved:", task);
      } else {
        alert("Los campos están vacios.");
      }
    },
    closeAddNewTask(value) {
      if (value) {
        this.isAddingNewTask = false;
        console.log("Close to add new task:", value);
      }
    },
    printThis() {
      console.log("PrintThis");
    },
  },
};
</script>

<style lang="scss" scoped>
$color-secondary-base-4: #fde67d;
$base-color-background: #d3dde4;
$background-btn-color-opaque: rgba(80, 102, 119, 0.5);

$size-default-icons: 35px;

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

.btn-opaque-custom {
  @include button-opaque-1;
  &__title {
    background-color: rgba(114, 138, 156, 0.5) !important;
    color: #ffffff !important;
  }
  &__new-cards {
    background-color: rgba(114, 138, 156, 0.5) !important;
    color: #ffffff !important;
  }
}

.background-color-board-view {
  background-color: #506677 !important;
}

.background-color-custom {
  background-color: $base-color-background !important;
}

.v-main__wrap {
  background-color: #506677 !important;
}

.input-board-custom {
  color: $color-secondary-base-4 !important;
}

.v-input__slot:after {
  width: 0% !important;
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

.scroll-x {
  width: 100%;
  overflow-x: auto;
  display: flex;
}
/* Show scrollbar */
::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 7px;
}
/* Style for scrollbar visible */
::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.432);
  box-shadow: 0 0 1px rgba(255, 255, 255, 0.368);
}

.screen-full-height {
  height: 100vh !important;
}

@media (min-width: 576px) and (max-width: 767px) {
}

@media (min-width: 374px) and (max-width: 575px) {
}

@media screen and (max-width: 373px) {
}
</style>
