<template>
  <Workspace :workspacesName="user.workspaces" />
</template>

<script>
import Workspace from "@/components/workspace/Workspace";

export default {
  name: "Home",
  components: {
    Workspace,
  },
  data: () => {
    return {
      user: {
        id: 1,
        name: "Juanito Pepito",
        workspaces: [
          {
            id: 1,
            name: "Workspace 1",
            boards: [
              { id: 1, title: "W1 Board 1" },
              { id: 2, title: "W1 Board 2" },
              { id: 3, title: "W1 Board 3" },
            ],
          },
          {
            id: 2,
            name: "Workspace 2",
            boards: [
              { id: 1, title: "W2 Board 1" },
              { id: 2, title: "W2 Board 2" },
              { id: 3, title: "W2 Board 3" },
            ],
          },
        ],
      },
    };
  },
};
</script>
