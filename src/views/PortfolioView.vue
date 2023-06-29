<script>
import ProjectCard from "../components/ProjectCard.vue";
import { store } from "../store.js";
import { onMounted } from "vue";
import PocketBase from "pocketbase";

export default {
  name: "PortfolioView",
  components: {
    ProjectCard,
  },
  data() {
    return {
      store,
      projects: {},
      error: null,
      loading: false,
      max: 100,
      pb: null,
    };
  },
  methods: {
    nextPage() {
      this.getProject(this.projects.next_page_url);
    },
    prevPage() {
      this.getProject(this.projects.prev_page_url);
    },
    trimText(text) {
      if (text.length > this.max) {
        return text.slice(0, this.max) + "...";
      }
      return text;
    },

    async getProjects() {
      this.pb = new PocketBase("https://admin-portfolio.pockethost.io");
      const authData = await this.pb.admins.authWithPassword(
        "mattia2001@live.it",
        "394NN!252tt"
      );
      // console.log(pb.authStore.isValid);
      // console.log(pb.authStore.token);
      // console.log(pb.authStore.model.id);

      this.projects = await this.pb
        .collection("projects")
        .getFullList({ sort: "-created" });
      this.loading = true;
    },
  },

  mounted() {
    this.getProjects();
  },
};
</script>

<template>
  <section class="project_list py-5">
    <div class="container">
      <div class="head d-flex align-items-center justify-content-between">
        <h1 class="text-uppercase">
          <span class="actual-text">&nbsp;Portfolio&nbsp;</span>
          <span class="hover-text" aria-hidden="true"
            >&nbsp;Portfolio&nbsp;</span
          >
        </h1>
        <div class="instruction">Click the Laptop Screen to show more</div>
      </div>
      <div v-if="loading">
        <div class="row row-cols-1 row-cols-md-2" v-if="this.projects != []">
          <div class="col" v-for="project in projects">
            <ProjectCard
              :title="project.title"
              :description="project.description"
              :project="project"
              :img="this.pb.files.getUrl(project, project.cover_img)"
            >
            </ProjectCard>
          </div>
        </div>
        <div v-else>Sorry...no projects available yet!</div>
      </div>
      <div
        v-else
        class="loader text-center d-flex justify-content-center align-items-center"
      >
        <div class="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <!-- page navigation -->
      <!-- <nav v-if="projects" aria-label="Page navigation">
        <ul class="pagination">
          <li
            class="page-item"
            v-if="projects.prev_page_url"
            @click="prevPage()"
          >
            <a class="page-link" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item active" aria-current="page">
            <a class="page-link" href="#">{{ projects.current_page }}</a>
          </li>
          <li
            class="page-item"
            v-if="projects.next_page_url"
            @click="nextPage()"
          >
            <a class="page-link" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav> -->
    </div>
  </section>
</template>

<style lang="scss" scoped>
.project_list {
  background-color: rgb(7, 10, 32);
  min-height: 800px;

  .head {
    margin-bottom: 7rem;

    h1 {
      margin: 0;
      height: auto;
      background: transparent;
      padding: 0;
      border: none;
      --border-right: 6px;
      --text-stroke-color: rgba(255, 255, 255, 0.6);
      --animation-color: #37ff8b;
      --fs-size: 2em;
      letter-spacing: 3px;
      text-decoration: none;
      font-size: var(--fs-size);
      font-family: "Arial";
      position: relative;
      text-transform: uppercase;
      color: transparent;
      -webkit-text-stroke: 1px var(--text-stroke-color);
    }

    /* this is the text, when you hover on h1 */
    .hover-text {
      position: absolute;
      box-sizing: border-box;
      content: attr(data-text);
      color: var(--animation-color);
      width: 0%;
      inset: 0;
      border-right: var(--border-right) solid var(--animation-color);
      overflow: hidden;
      transition: 0.3s;
      -webkit-text-stroke: 1px var(--animation-color);
    }

    /* hover */
    h1:hover .hover-text {
      width: 100%;
      filter: drop-shadow(0 0 23px var(--animation-color));
    }

    .instruction {
      color: beige;
      font-weight: bold;
      text-shadow: 0 0 7px rgba(255, 255, 255, 0.212),
        0 0 10px rgba(255, 255, 255, 0.212), 0 0 21px rgba(255, 255, 255, 0.212),
        0 0 42px rgba(255, 255, 255, 0.212), 0 0 82px rgba(255, 255, 255, 0.212),
        0 0 92px rgba(255, 255, 255, 0.212),
        0 0 102px rgba(255, 255, 255, 0.212),
        0 0 151px rgba(255, 255, 255, 0.212);
    }
  }

  .container {
    nav {
      margin-top: 3rem;
    }
  }
}

.loader {
  background-color: rgb(7, 10, 32);
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
    border: 8px solid #cab1b1;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #cab1b1 transparent transparent transparent;
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
