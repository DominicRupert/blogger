import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";



class BlogsService{
    async getBlogs(){
        const res = await api.get('api/blogs');
        logger.log(res.data, 'sup');

        AppState.blogs = res.data;
}

async createBlog(blogData){
    const res = await api.post('api/blogs', blogData);
    logger.log(res.data);

    AppState.blogs.push(res.data);
}


}


export const blogsService = new BlogsService();