<template>
  <div class="mb-3">
    <input v-model="newTask" @keyup.enter="addTask" class="form-control" placeholder="Nueva tarea" />
    <button @click="addTask" class="btn btn-primary mt-2">Añadir</button>
  </div>
</template>
<script>
export default {
  name: 'NewTaskForm',
  data() {
    return {
      newTask: ''
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.$emit('add-task', this.newTask.trim());
        this.newTask = '';
      }
    }
  }
};
</script>
