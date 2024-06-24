<template>
  <div class="list-group">
    <TaskItem v-for="(task, index) in tasks" :key="index" :task="task" @delete-task="deleteTask(index)"
      class="list-group-item d-flex justify-content-between align-items-center" />
  </div>
</template>

<script>
import TaskItem from './TaskItem.vue';


export default {
  name: 'TaskList',
  components: {
    TaskItem
  },
  props: {
    tasks: {
      type: Array,
      required: true
    }
  },
  methods: {
    deleteTask(index) {
      this.$emit('delete-task', index);
    }
  },

};
</script>
