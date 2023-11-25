<template>
  <div class="containerHeader">
    <nav>
      <div class="left"><h3 class="logo">Test2</h3></div>
      <div class="right">
        <ul>
          <li>
            <RouterLink to="/">Main</RouterLink>
          </li>
          <li>
            <RouterLink to="/login">Login</RouterLink>
          </li>
          <li>
            <RouterLink to="/profile">Profile</RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style src="./componentStyle/header/headerStyle.css" scoped></style>
