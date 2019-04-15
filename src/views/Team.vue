<template>
  <div class="team">
    <h1 class="subheading grey--text">Team</h1>

    <v-container class="my-5">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="(person, index) in team" :key="index">
          <v-card class="text-xs-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar" alt="Avatar">
              </v-avatar>
            </v-responsive>

            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            
            <v-card-actions>
              <v-btn flat color="grey">
                <v-icon small left>message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: 'Nelson Mandela', role: 'Web developer', avatar: '/avatar-1.jpg' },
        { name: 'Martin Luther King', role: 'Graphic designer', avatar: '/avatar-2.jpg' },
        { name: 'Malcolm X', role: 'Web developer', avatar: '/avatar-3.png' },
        { name: 'Mahatma Gandhi', role: 'Project manager', avatar: '/avatar-4.jpg' },
        { name: 'Dalai Lama', role: 'Evangelist', avatar: '/avatar-5.jpg' }
      ]
    }
  }
};
</script>
