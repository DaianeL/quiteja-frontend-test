<template>
  <v-container>
    <v-card elevation="4" class="pa-6">
      <form v-on:submit.prevent="atualizarUsuario">
        <v-text-field v-model="form.nome" label="Nome"/>
        <v-text-field v-model="form.sobrenome" label="Sobrenome"/>
        <v-text-field v-model="form.telefone" label="Telefone"/>
        <v-btn color="primary" class="mr-4" type="submit">
          Atualizar
        </v-btn>
        <v-btn>
          <router-link to="/" style="text-decoration: none">
            Cancelar
          </router-link>
        </v-btn>
      </form>
    </v-card>
  </v-container>
</template>

<script>
import router from '@/router'
export default{
  name: 'EditarUsuario', 
  data() {
    return {
      form: {
        nome: '',
        sobrenome: '',
        telefone: ''
      }
    }
  },
  created() {
    this.buscarUsuario()
  },
  methods: {
    buscarUsuario() {
      this.$axios.get(`/user/${this.$route.query.id}`).then(({data}) => {
        const {firstName, lastName, phone} = data
        this.form.nome = firstName
        this.form.sobrenome = lastName
        this.form.telefone = phone
      }).catch((error) => {
        console.log(error)
      })
    },
    atualizarUsuario() {
      this.$axios.put(`/user/${this.$route.query.id}`, {
        firstName: this.form.nome,
        lastName: this.form.sobrenome,
        phone: this.form.telefone
      }).then(()=>{
        router.push({name:'home'}) 
      }).catch((error) =>{
        console.log(error)
      })
    }
  }
}
</script>