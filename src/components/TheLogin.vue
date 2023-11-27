<template>
  <div class="loginWrapper">
    <div v-if="!test.getLogin" class="login">
      <div class="login_Head">
        <h2>Вход</h2>
      </div>
      <div class="ruls">
        <p>{{ test.getShowResponse }}</p>
      </div>
      <form @submit.prevent="test.LogForm" class="login_form">
        <div class="login_form_inputs">
          <input
            type="text"
            placeholder="User*"
            class="user"
            v-model="test.user"
          />
          <div class="passwordInput">
            <input
              v-if="test.getShowPass"
              type="password"
              placeholder="Пароль*"
              class="password"
              v-model="test.password"
            />
            <input
              v-else
              type="text"
              placeholder="Пароль*"
              class="password"
              v-model="test.password"
            />
            <div
              class="show open"
              @click="test.showPassword"
              :class="{ hidden: !test.getShowPass }"
            ></div>
          </div>
        </div>
        <div class="login_Button">
          <div class="login_Btn">
            <button type="submit">Войти</button>
          </div>
        </div>
      </form>
    </div>
    <div v-else class="login">
      <div class="login_Head">
        <h1>Выход</h1>
      </div>
      <div class="login_Button">
        <form @submit.prevent="test.LogOutForm" class="login_form">
          <div class="login_Button">
            <div class="login_Btn">
              <button @click="test.LogOutForm" type="submit">Выйти</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { testProject } from "@/stores/index";
export default {
  name: "Login",
  setup() {
    const test = testProject();
    return {
      test,
    };
  },
};
</script>
<style src="@/components/componentStyle/login/loginStyle.css" scoped></style>
