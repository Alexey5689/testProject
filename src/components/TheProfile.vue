<template>
  <div class="profileWrapper">
    <div class="profile">
      <div class="profile_Head">
        <h1>Profile</h1>
      </div>
      <div class="profileInfo">
        <input
          type="text"
          placeholder="Имя*"
          autocomplete="off"
          class="profInput"
        />
        <input
          type="text"
          placeholder="Фамилия*"
          autocomplete="off"
          class="profInput"
        />
        <Calendar
          :class="$style.input"
          v-model="profile.birthday"
          dateFormat="dd.mm.yy"
          placeholder="Дата рождения*"
        />
        <div class="cityList">
          <input
            type="text"
            placeholder="Город*"
            autocomplete="off"
            class="profInput"
            v-model="profile.searchTown"
            @click="profile.cityListVisible = true"
          />
          <Cities v-if="profile.searchTown && profile.getCityListVisible" />
        </div>
      </div>
      <div class="profile_Button">
        <div class="profile_Btn">
          <button>Сохранить</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { testProfile } from "@/stores/profile";
export default {
  name: "Profile",
  setup() {
    const profile = testProfile();
    return {
      profile,
    };
  },
};
</script>
<style
  src="@/components/componentStyle/profile/profileStyle.css"
  scoped
></style>
<style module>
input {
  font-family: Monserrat_Reg;
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  width: 100%;
  height: 56px;
  background-color: #f0f1f3;
  box-shadow: none;
  border-radius: 9px;
  border: none;
  outline: none;
  padding: 16px;
}
</style>
