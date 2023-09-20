<template>
  <div class="wrapper">
    <side-bar>
      <template slot="links">
        <sidebar-link to="/dashboard" name="Dashboard" icon="ti-panel" />
        <sidebar-link to="/todolist" name="To-Do List" icon="ti-view-list-alt" />
        <sidebar-link
          to="/writingassistant"
          name="Writing Composition"
          icon="ti-pencil-alt2"
        />
      </template>
<!-- Mobile Side Bar -->
<mobile-menu>

      <li class="nav-item">
        <a class="nav-link">
          <i class="ti-settings"></i>
          <p v-on:click="logout">Logout</p>
        </a>
      </li>
      <li class="divider"></li>
    </mobile-menu>

    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>
      <dashboard-content @click.native="toggleSidebar"> </dashboard-content>
      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from "../components/TopNavBar/TopNavbar.vue";
import DashboardContent from "../views/Content.vue";
import MobileMenu from "./MobileMenu";
import ContentFooter from "./ContentFooter.vue";
export default {
  components: {
    TopNavbar,
    DashboardContent,
    MobileMenu,
    ContentFooter,
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
    logout() {
      // remove token
      localStorage.removeItem("eleToken");
      this.$store.dispatch("clearCurrentState");

      this.$router.push("/login");
    }
  },
};
</script>
