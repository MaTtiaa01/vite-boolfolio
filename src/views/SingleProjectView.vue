<script>
import PocketBase from "pocketbase";
import { store } from "../store.js";

export default {
  name: "SinglePostView",
  data() {
    return {
      project: null,
      loading: false,
      store,
      pb: null,
      url: null,
    };
  },
  methods: {
    async getSingleProject() {
      this.pb = new PocketBase("https://admin-portfolio.pockethost.io");
      this.project = await this.pb
        .collection("projects")
        .getOne(this.$route.params.id, {
          expand: "relField1,relField2.subRelField",
        });
      this.url = this.pb.files.getUrl(this.project, this.project.cover_img);
      this.loading = true;
    },
  },
  mounted() {
    this.getSingleProject();
  },
};
</script>

<template>
  <div class="single_post text-center py-5" v-if="loading">
    <div class="container">
      <img class="img-fluid mb-3" :src="url" :alt="project.title" />
      <h2 class="text-uppercase mb-3">
        {{ project.title }}
      </h2>
      <div class="content">
        <div class="description mb-3" v-if="project.description">
          {{ project.description }}
        </div>

        <div class="technologies mb-3" v-if="project.technologies">
          <strong>TECHNOLOGIES: </strong>
          <span> {{ project.technologies }} </span>
        </div>
        <div class="type mb-3" v-if="project.type">
          <strong> TYPE: </strong>{{ project.type.name }}
        </div>

        <div class="github" v-if="project.source_code">
          <a class="" :href="project.source_code">
            Go to Source Code
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              class="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div
    class="loader text-center d-flex justify-content-center align-items-center"
    v-else
  >
    <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.single_post {
  background-color: bisque;
  min-height: 500px;

  img {
    max-height: 300px;
  }

  .content {
    .description {
      max-width: 800px;
      margin: auto;
    }
  }

  .github {
    a {
      color: black;
      text-decoration: none;
    }

    a:hover {
      font-weight: bold;
      text-decoration: underline;
    }
  }
}

.loader {
  background-color: bisque;
  min-height: 500px;
  .lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #0f0e0e;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #0f0e0e transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
