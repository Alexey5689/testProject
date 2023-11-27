<template>
  <div class="cityListWrapper">
    <div class="cityList">
      <div
        v-for="city in profile.serchCity"
        :key="city.id"
        @click="profile.select(city)"
        class="city"
      >
        {{ city.name }}
      </div>
    </div>
  </div>
</template>
<script>
import { testProfile } from "@/stores/profile";
export default {
  name: "Cities",
  setup() {
    const profile = testProfile();
    return {
      profile,
    };
  },
};
</script>
<style src="@/components/componentStyle/citylist/cityList.css" scoped></style>
