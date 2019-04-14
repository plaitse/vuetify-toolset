<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-5">
      <v-layout row class="mb-3">
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
            <v-icon left small>folder</v-icon>
            <span class="caption text-lowercase">By project name</span>
          </v-btn>
          <span>Sort by project name</span>
        </v-tooltip>
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('person')" slot="activator">
            <v-icon left small>person</v-icon>
            <span class="caption text-lowercase">By person</span>
          </v-btn>
          <span>Sorts by person</span>
        </v-tooltip>
      </v-layout>

      <v-card flat v-for="(project, index) in projects" :key="index">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex>

          <v-flex xs2 sm4 md2>
            <div class="right">
              <v-chip
                small
                :class="`${project.status} white--text caption my-2`"
              >{{ project.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Design a new website",
          person: "Nelson Mandela",
          due: "1st Jan 2019",
          status: "ongoing",
          lorem:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolorem obcaecati voluptatem tempora expedita praesentium, pariatur doloremque aperiam iusto magnam tempore voluptate quo itaque quis ipsum quam optio, similique nobis?"
        },
        {
          title: "Code up the homepage",
          person: "Martin Luther King",
          due: "1st Jan 2019",
          status: "complete",
          lorem:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem laboriosam modi reiciendis aperiam mollitia ex fugit iusto quam quasi voluptatibus non, soluta voluptatem libero in enim minima. Eum, molestias exercitationem."
        },
        {
          title: "Design video thumbnails",
          person: "Malcolm X",
          due: "20th Dec 2018",
          status: "complete",
          lorem:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos totam magni facilis dolorum nostrum natus quas tenetur officia iure qui ducimus ad voluptates impedit incidunt excepturi, eum rem nobis doloremque."
        },
        {
          title: "Create a community forum",
          person: "Gandhi",
          due: "20th Oct 2018",
          status: "overdue",
          lorem:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius iure facilis eveniet possimus tempore nobis distinctio aliquam deleniti, atque obcaecati, quod iusto at laudantium quibusdam itaque cupiditate. Placeat, repellat incidunt!"
        }
      ]
    };
  },
  methods: {
    sortBy(prop) {
      // Sort compares items next to each other in an array, 1 changes the order and -1 doesn't
      // It consecutively performs the operation on each pair
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    }
  }
};
</script>

<style lang="scss">
.project {
  &.complete {
    border-left: 4px solid #3cd1c2;
  }
  &.ongoing {
    border-left: 4px solid orange;
  }
  &.overdue {
    border-left: 4px solid tomato;
  }
}
.v-chip {
  &.complete {
    background: #3cd1c2;
  }
  &.ongoing {
    background: #ffaa2c;
  }
  &.overdue {
    background: #f83e70;
  }
}
</style>
