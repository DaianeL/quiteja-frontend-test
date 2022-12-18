<template>
  <v-container>
    <ul>
      <li v-for="user in users" :key="user.id" class="d-flex flex-column pa-1">
        <v-card elevation="4">
          <v-container class="d-flex justify-space-between align-center">
            <div class="d-flex align-center ">
              <v-avatar size="40">
                <img :src="user.picture" :alt="user.firstName"/>
              </v-avatar>
              <v-card-title>
                {{user.firstName}} {{user.lastName}}
              </v-card-title>
            </div>
            <div class="d-flex">
              <v-btn icon color="blue" class="mx-4">
                <router-link :to="{name: 'edit', query: { id: user.id }}" style="text-decoration: none">
                  <v-icon>mdi-pencil</v-icon>
                </router-link>
              </v-btn>
              <v-btn icon color="red" @click="deletarUsuario(user.id)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </div>
          </v-container>

        </v-card>
      </li>
    </ul>
  </v-container>
</template>

<script>

export default {
  name: 'ListaDeUsuarios',
  data() {
    return {
      users: {}
    }
  },
  created(){
    this.buscarUsuarios()
  },
  methods: {
    buscarUsuarios() {
      this.$axios.get('/user').then((res) => {
        this.users= res.data.data
      }).catch((error) => {
        console.log(error)
      })
    },
    deletarUsuario(id) {
      this.$axios.delete(`/user/${id}`).then(() => {
        this.buscarUsuarios()
      }).catch((error) => {
        console.log(error)
      })

    }
  }
 }
</script>

