<template>
  <div>
    <NavApp />
    <ProfileUser />
  </div>
</template>

<script>
import ProfileUser from "../components/profile-user.vue";
import NavApp from "../components/nav-app.vue";
export default {
  name: "profile-user",
  components: {
    NavApp,
    ProfileUser,
  },
  data() {
    return {
      token: localStorage.getItem("token"),
      userId: localStorage.getItem("userId"),
    };
  },
};
</script>
<style scoped lang="scss">
a {
  display: block;
  text-align: center;
  text-decoration: none;
}
</style> 