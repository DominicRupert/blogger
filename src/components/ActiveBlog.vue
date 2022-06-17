<template>
  <div class="container-fluid">
    <div class="row">

      <div
        v-for="img in activeBlog.imgUrl"
        :key="img"
        class="col-12 d-flex justify-content-center"
      >
        <img class="img-fluid" :src="img" alt="" />
      </div>
     
    </div>
    <div class="col-12 d-flex justify-content-end">
      <router-link
        :to="{ name: 'Profile', params: { id: activeBlog.creatorId } }"
      >
        <div class="selectable p-2 d-flex" data-bs-dismiss="modal">
          <img
            v-if="activeBlog.creator"
            class="profile-img"
            :src="activeBlog.creator.picture"
            alt=""
          />
        
          <p>Creator: {{ activeBlog.creator }}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { AppState } from "../AppState";
import { computed, reactive, onMounted } from "vue";
export default {
  setup() {
    return {
      activeBlog: computed(() => AppState.activeBlog),
    };
  },
};
</script>


<style lang="scss" scoped>
.profile-img {
  height: 50px;
  width: 50px;
  object-fit: cover;
}
</style>
