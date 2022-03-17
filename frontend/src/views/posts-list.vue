<template>
  <div>
    <NavApp />
    <h1 class="card-titlepost">partagez vos intérêts avec votre communauté</h1>
    <InfoPost />
    <Footer />
  </div>
</template>

<script>
import NavApp from "../components/nav-app.vue";
import Footer from "../components/footer-bloc";
import InfoPost from "../components/info-post.vue";
export default {
  name: "posts-user",
  components: {
    NavApp,
    InfoPost,
    Footer,
  },
  data() {
    return {
      posts: [],
      post: {},
    };
  },
};
</script>

<style lang="scss">
.card-titlepost {
  margin: 1rem;
  text-align: center;
  display: block;
  background-color: #0dcaf0;
  border-color: #0dcaf0;
}
</style>