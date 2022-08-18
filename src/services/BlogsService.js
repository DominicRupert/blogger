import { AppState } from "../AppState.js";
import { logger } from "../utils/Logger.js";
import { api } from "./AxiosService.js";

class BlogsService {
  async getBlogs() {
    const res = await api.get("api/blogs");
    logger.log(res.data, "sup");

    AppState.blogs = res.data;
  }

  async createBlog(blogData) {
    const res = await api.post("api/blogs", blogData);
    logger.log(res.data);

    AppState.blogs.unshift(res.data);
  }

  async getBlogsByProfile(profileId) {
    const res = await api.get(`api/blogs/?creatorId=${profileId}`);
    logger.log(res.data, "supper");
    AppState.blogs = res.data;
  }
  async removeBlog(id) {
    const res = await api.delete(`api/blogs/${id}`);
    logger.log(res.data);
    AppState.blogs = AppState.blogs.filter((blog) => blog.id != id);
  }
  async editBlog(id, blogData) {
    const res = await api.put(`api/blogs/${id}`, blogData);
    logger.log(res.data);
  }
}
export const blogsService = new BlogsService();
