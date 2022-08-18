<template>
  <div class="container-fluid">
    <div class="row">
      <CreateBlog v-if="account.id" />

      <Blog v-for="blog in blogs" :key="blog.id" :blog="blog" />
    </div>
  </div>
</template>

<script>
import { AppState } from "../AppState.js";
import { computed, onMounted } from "vue";
import Pop from "../utils/Pop.js";
import { blogsService } from "../services/BlogsService.js";

export default {
  name: "Home",

  setup() {
    onMounted(async () => {
      try {
        AppState.blogs = [];
        await blogsService.getBlogs();
      } catch (error) {
        Pop.toast(error.message, "error");
        logger.error(error);
      }
    });

    return {
      blogs: computed(() => AppState.blogs),
      account: computed(() => AppState.account),
    };
  },
};
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
