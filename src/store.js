import { reactive } from "vue";

export const store = reactive({
  base_api_url: "https://admin-portfolio.pockethost.io",
  getImagePath(path) {
    if (path) {
      return this.base_api_url + "/storage/" + path;
    }
    return "./img/placeholder.png";
  },
});
