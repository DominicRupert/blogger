<template >

  <div class="col-4 card bg-dark border border-3">
    <h1>{{ blog.title }}</h1>
    <button
      v-show="blog.creatorId == account.id"
      class="delete-button btn btn-danger rounded-pill content selectable"
      @click="removeBlog"
    >
      <i class="mdi mdi-delete-forever"></i>
    </button>
    <h4>
      {{ blog.body }}
    </h4>
    <!-- dig into github -->
    <p class="profile m-0 selectable p-1 rounded" @click.stop="goToProfile">
      <img class="profile-img me-2" :src="blog.creator.picture" alt="" />{{
        blog.creator.name
      }}
    </p>

    <img class="img-fluid" :src="blog.imgUrl" alt="" />
  </div>
 
</template>


<script>
import { AppState } from "../AppState.js";
import { computed, onMounted } from "vue";
import Pop from "../utils/Pop.js";
import { blogsService } from "../services/BlogsService.js";
import { useRouter } from "vue-router";
import { Modal } from "bootstrap";
export default {
  props: { blog: { type: Object, reqiured: true } },
  setup(props) {
    const router = useRouter();
    return {
        setActive() {
        blogsService.setActive(props.blog);
        Modal.getOrCreateInstance(
          document.getElementById("blog-modal")
        ).show();
      },
      goToProfile() {
        router.push({
          name: "Profile",
          params: { id: props.blog.creatorId },
        });
      },
      account: computed(() => AppState.account),
      async removeBlog() {
        try {
          await blogsService.removeBlog(props.blog.id);
        } catch (error) {
          Pop.toast(error.message, "error");
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>
.delete-button {
  position: absolute;
  top: 0.25em;
  right: 0.25em;
  width: 40px;
  height: 40px;
  border-radius: 50em;
  background: var(--bs-danger);
  color: var(--bs-light);
  border: 0;
}

.img-fluid {
  max-width: 40vw;
  height: auto;
}
.profile {
  position: absolute;
  bottom: 2px;
  right: 5px;
}

.profile-img {
  width: 40px;
  height: 40px;
  border-radius: 45px;
  object-fit: cover;
}
</style>