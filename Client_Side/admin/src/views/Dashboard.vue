<template>
    <div>
      <!--Stats cards-->
      <div class="row">
        <div
          class="col-md-6 col-xl-3"
          v-for="stats in statsCards"
          :key="stats.title"
        >
          <stats-card>
            <div
              class="icon-big text-center"
              :class="`icon-${stats.type}`"
              slot="header"
            >
              <i :class="stats.icon"></i>
            </div>
            <div class="numbers" slot="content">
              <p>{{ stats.title }}</p>
              {{ stats.value }}
            </div>
            <div class="stats" slot="footer">
              <i :class="stats.footerIcon"></i> {{ stats.footerText }}
            </div>
          </stats-card>
        </div>
      </div>
      <!-- Table List -->
        <div class="row my-5" v-if="tableData.length > 0">
                    <div class="col">
                        <table class="table bg-white rounded shadow-sm  table-hover">
                            <thead>
                                <tr>
                                  <th></th>
                                </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th></th>
                              </tr>
                            </tbody>
                        </table>
                    </div>
        </div>
    </div>
  </template>
  <script>
  import { StatsCard} from "@/components/index";

  export default {
    components: {
      StatsCard,
    },
    computed:{
      user(){
        return this.$store.getters.user;
      }
    },
    data() {
      return {
        statsCards: [
          {
            type: "warning",
            icon: "ti-pencil",
            title: "Today",
            value: "10",
            footerText: "Today",
            footerIcon: "ti-reload",
          },
          {
            type: "success",
            icon: "ti-pencil-alt",
            title: "Last Day",
            value: "4",
            footerText: "Last day",
            footerIcon: "ti-timer",
          },
          {
            type: "danger",
            icon: "ti-folder",
            title: "A Week Ago",
            value: "23",
            footerText: "A Week Ago",
            footerIcon: "ti-timer",
          },
          {
            type: "info",
            icon: "ti-server",
            title: "A Month Ago",
            value: "45",
            footerText: "A Month Ago",
            footerIcon: "ti-calendar",
          },
        ],
        tableData: [],

      };
    },
    created(){
      this.getAllCategories();
    },
    methods: {
      getAllCategories(){
        this.$http.get('/category/categoricalList').then((res) => {
          try {
            console.log(res);
          } catch (error) {

          }
        })
      },
    }
  };
  </script>
  <style></style>
