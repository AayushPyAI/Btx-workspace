<template>
  <div class="p-6 min-h-screen">
    <div class="grid grid-cols-4 gap-4">
      <div v-for="(column, index) in columns" :key="index" class="rounded-lg border border-gray-200 shadow-sm p-4 bg-white">
        <!-- Column Header -->
     <div class="flex justify-between items-center mb-4 border-b-3 pb-2 " :style="{ borderColor: column.color }">
          <h2 class="text-md font-semibold text-gray-700" >{{ column.title }}</h2>
         <span class="text-xs bg-gray-100 px-3  py-1 rounded-full border-1" :style="{ color: column.color, borderColor: column.color }">
          {{ column.tasks.length }}
</span>
        </div>

        <!-- Task Cards -->
        <div class="space-y-4">
          <Taskcard v-for="(task, i) in column.tasks" :key="i" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Taskcard from './Taskcard.vue';
import NotesCard from './NotesCard.vue';
export default {
  components: {
    Taskcard,
    NotesCard
  },
  data() {
    return {
      columns: [
        { title: 'New', tasks: new Array(4).fill({}) ,color:'#67757C'},
        { title: 'InProgress', tasks: new Array(3).fill({}),color:'#67757C' },
        { title: 'Awaiting feedback', tasks: new Array(5).fill({}) ,color:'#FF6600'},
        { title: 'Completed', tasks: new Array(4).fill({}),color:'#32D3B5'}
      ]
    };
  }
};
</script>

<style scoped>
</style>
