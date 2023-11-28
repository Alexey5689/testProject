import { defineStore } from "pinia";
export const testTicket = defineStore("ticket", {
  state: () => ({
    taskName: "",
    taskContent: "",
    tasks: [],
    response: "",
  }),
  getters: {
    getShowResponse() {
      return this.response;
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "tasks",
        storage: localStorage,
        paths: ["tasks"],
      },
    ],
  },
  actions: {
    createTask() {
      if (this.taskName === "" || this.taskContent === "") {
        this.response = "Поля должны быть заполнены";
        setTimeout(() => {
          this.response = "";
        }, 2000);
      } else {
        const toDo = {
          nameTask: this.taskName,
          contentTask: this.taskContent,
        };
        this.tasks.push(toDo);
        this.taskName = "";
        this.taskContent = "";
      }
    },
    clearTickets() {
      this.tasks = [];
    },
  },
});
