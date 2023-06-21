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
      loading: true,
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
      console.log(this.projects);

      this.projects.forEach((element) => {
        const url = this.pb.files.getUrl(element, element.cover_img);
        console.log(url);
      });
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
      <div v-else-if="loading">
        Loading...
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-hourglass-split"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"
          />
        </svg>
      </div>
      <div v-else>No projects available yet...</div>
      <nav v-if="projects" aria-label="Page navigation">
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
      </nav>
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
</style>
