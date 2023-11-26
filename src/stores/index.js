import { defineStore } from "pinia";
export const testProject = defineStore("test", {
  state: () => ({
    user: "",
    password: "",
    showPass: true,
    response: "",
    IsLogin: false,
  }),
  getters: {
    getShowPass() {
      return this.showPass;
    },
    getShowResponse() {
      return this.response;
    },
    getLogin() {
      return this.IsLogin;
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "login",
        storage: localStorage,
        paths: ["IsLogin"],
      },
    ],
  },
  actions: {
    showPassword() {
      this.showPass = !this.showPass;
    },
    LogForm() {
      if (this.user === "" || this.password === "") {
        this.response = "Поля должны быть заполнены";
        setTimeout(() => {
          this.response = "";
          this.user = "";
          this.password = "";
        }, 2000);
      } else if (this.user !== "admin" || this.password !== "admin") {
        this.response = "Неверный логин или пароль";
        setTimeout(() => {
          this.response = "";
          this.user = "";
          this.password = "";
        }, 2000);
      } else {
        this.IsLogin = true;
        window.location.href = "/profile";
      }
    },
    LogOutForm() {
      this.IsLogin = false;
    },
  },
});
