<template>
  <div id="app" class="container mt-5">
    <h1 class="text-center mb-4">{{ capitalize(title) }}</h1>
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <TaskFilter @filter-tasks="filterTasks" />
        <NewTaskForm @add-task="addTask" />
        <TaskCounter :tasks="filteredTasks" />
        <TaskList :tasks="filteredTasks" @delete-task="deleteTask" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import TaskList from './components/TaskList.vue';
import NewTaskForm from './components/NewTaskForm.vue';
import TaskCounter from './components/TaskCounter.vue';
import TaskFilter from './components/TaskFilter.vue';
import capitalize from './pipes/Capitalize.js'


export default defineComponent({
  name: 'App',
  components: {
    TaskList,
    NewTaskForm,
    TaskCounter,
    TaskFilter
  },
  data() {
    return {
      title: 'lista de tareas',
      tasks: [],
      filterText: ''
    };
  },
  computed: {
    filteredTasks() {
      return this.tasks.filter(task =>
        task.toLowerCase().includes(this.filterText.toLowerCase())
      );
    }
  },
  methods: {
    addTask(task) {
      this.tasks.push(capitalize(task));
    },
    deleteTask(taskIndex) {
      this.tasks.splice(taskIndex, 1);
    },
    filterTasks(filterText) {
      this.filterText = filterText;
    },
    capitalize(value) {
      if (!value) return '';
      value = value.toString();
      return value.replace(/\b\w/g, function (l) {
        return l.toUpperCase();
      });
    }
  }

});
</script>
