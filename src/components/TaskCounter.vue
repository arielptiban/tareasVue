<template>
  <div>
    <p class="fs-5">Total de tareas: {{ tasks.length }}</p>
  </div>
</template>

<script>
export default {
  name: 'TaskCounter',
  props: {
    tasks: {
      type: Array,
      required: true
    }
  }
};
</script>
