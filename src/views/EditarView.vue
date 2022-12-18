<template>
  <div>
    <img alt="QuiteJá Logo" src="../assets/logo.png"/>
    <EditarUsuario/>
  </div>
</template>

<script>
import EditarUsuario from '@/components/EditarUsuario.vue'

export default {
  name:'EditarView',
  components: {
    EditarUsuario
  }
}
</script>