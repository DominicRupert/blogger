<template>
    <div class="component">
<div class="container-fluid">
    
    <h3 class ="row flex-column border border-1">
        {{blog.title}}
       <h4>
           {{blog.body}}
       </h4> 
       <!-- dig into github -->
       <h5>by - {{blog.creator.name}} github: {{blog.creator.github}}</h5>

</h3>
<img class="img-fluid" :src='blog.imgUrl' alt="">
    </div>
    </div>
</template>


<script>
import { AppState } from '../AppState.js'
import { computed, onMounted } from 'vue'
import Pop from '../utils/Pop.js'
import { blogsService } from '../services/BlogsService.js'
import {useRouter} from 'vue-router'
export default {
    props:{ blog: {type: Object, reqiured: true} },
    setup(props){
        const router = useRouter()
        return {

        }
    }
}
</script>


<style lang="scss" scoped>

</style>