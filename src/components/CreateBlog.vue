<template>
    <!-- <div class="row "> -->
        <form class="  pb-4 d-flex flex-column bg-dark" action="" @submit.prevent="createBlog">
            <p>Create a blog</p>
            <input type="text" placeholder=" title" v-model="blogData.title" />
            <input type="text" placeholder=" image url" v-model="blogData.imgUrl" />
            <textarea name="" id="" cols="30" rows="4" placeholder=" Post description" v-model="blogData.body"></textarea>
            <button class="btn btn-primary">create</button>
        </form>
    <!-- </div> -->
</template>


<script>
import { AppState } from "../AppState";
import { computed, reactive, onMounted, onBeforeUnmount, ref } from "vue";
import { Modal } from "bootstrap";
import { logger } from "../utils/Logger.js";
import { blogsService } from "../services/BlogsService.js";
import Pop from "../utils/Pop.js";
export default {
    setup() {
        const blogData = ref({})
        return {
            blogData,
            async createBlog() {
                try {
                    await blogsService.createBlog(blogData.value)

                } catch (error) {
                    logger.error(error)
                    Pop.toast(error.message, 'error')
                }
            }
        }
    }
}
</script>


<style lang="scss" scoped>
</style>