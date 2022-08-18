<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div
        class="
          col-4
          d-flex
          flex-column
          justify-content-center
          align-items-center
        "
      >
        <img class="profile-img profile" :src="profile.picture" alt="" />
        <h3 class="col-12 text-center">
          {{ profile.name }}
        </h3>
      </div>
    </div>
    <CreateBlog v-if="account.id == profile.id" />
    <div class="row m-2">
      <Blog v-for="b in blogs" :key="b.id" :blog="b" />
    </div>
  </div>
</template>


<script>
import { AppState } from "../AppState";
import { computed, reactive, onMounted } from "vue";
import Pop from "../utils/Pop";
import { logger } from "../utils/Logger";
import { useRoute } from "vue-router";
import { profilesService } from "../services/ProfilesService";
import { blogsService } from "../services/BlogsService";
export default {
  setup() {
    const route = useRoute();
    onMounted(async () => {
      try {
        AppState.blogs = [];
        await profilesService.getProfile(route.params.id);
        await blogsService.getBlogsByProfile(route.params.id);
      } catch (error) {
        Pop.toast(error.message, "error");
        logger.error(error);
      }
    });
    return {
      account: computed(() => AppState.account),
      profile: computed(() => AppState.profile),
      blogs: computed(() => AppState.blogs),
    };
  },
};
</script>


<style lang="scss" scoped>
.bg-img {
  height: 20vh;
  background-size: cover;
  background-position: center;
  background-color: var(--bs-primary);
}
.profile {
  transform: translateY(-9vh);
}
.profile-img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50em;
}
</style>
