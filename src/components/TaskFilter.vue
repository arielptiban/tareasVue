<template>
  <div class="mb-3">
    <label for="filter" class="form-label">Filtrar tareas: </label>
    <input id="filter" v-model="filterText" @input="filterTasks" class="form-control" placeholder="Filtrar por..." />
  </div>
</template>

<script>
export default {
  name: 'TaskFilter',
  data() {
    return {
      filterText: ''
    };
  },
  methods: {
    filterTasks() {
      this.$emit('filter-tasks', this.filterText);
    }
  }
};
</script>
