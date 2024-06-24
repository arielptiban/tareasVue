<template>
  <li class="d-flex justify-content-between align-items-center">
    {{ task }}
    <button @click="deleteTask" class="btn btn-danger btn-sm">Eliminar</button>
  </li>
</template>

<script>
export default {
  name: 'TaskItem',
  props: {
    task: {
      type: String,
      required: true
    }
  },
  methods: {
    deleteTask() {
      this.$emit('delete-task');
    }
  }
};
</script>

<style scoped>
/* Estilos específicos para TaskItem.vue si es necesario */
</style>
