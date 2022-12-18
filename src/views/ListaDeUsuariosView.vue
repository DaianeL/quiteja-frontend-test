<template>
  <div>
    <img alt="QuiteJá Logo" src="../assets/logo.png">
    <ListaDeUsuarios />
  </div>
</template>

<script>
import ListaDeUsuarios from '@/components/ListaDeUsuarios.vue'

export default {
  name: 'ListaDeUsuariosView',
  components: {
    ListaDeUsuarios
  }
}
</script>
