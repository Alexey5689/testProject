<template>
  <div class="profileWrapper">
    <div v-if="profile.isSafe" class="profile">
      <div class="profile_Head">
        <h2>Profile</h2>
      </div>
      <div class="profileInfo">
        <div class="profInputRedaction">
          Имя:<span>{{ profile.firstName }}</span>
        </div>
        <div class="profInputRedaction">
          Фамилия:<span>{{ profile.lastName }}</span>
        </div>
        <div class="profInputRedaction">
          Дата рождения:<span>{{ profile.getBirthDay }}</span>
        </div>
        <div class="profInputRedaction">
          Город:<span>{{ profile.searchTown }}</span>
        </div>
      </div>
      <div class="profile_Button">
        <div class="profile_Btn">
          <button @click="profile.redaction">Редактировать</button>
        </div>
      </div>
    </div>

    <div v-else class="profile">
      <div class="profile_Head">
        <h2>Profile</h2>
      </div>
      <div class="ruls">
        <p>{{ profile.getShowResponse }}</p>
      </div>
      <div class="profileInfo">
        <input
          type="text"
          placeholder="Имя*"
          autocomplete="off"
          class="profInput"
          v-model="profile.firstName"
        />
        <input
          type="text"
          placeholder="Фамилия*"
          autocomplete="off"
          class="profInput"
          v-model="profile.lastName"
        />
        <Calendar
          :class="$style.input"
          v-model="profile.birthDay"
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
          <button @click="profile.save">Сохранить</button>
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
