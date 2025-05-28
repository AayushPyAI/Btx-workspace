<template>
  <div class="bg-white p-6 rounded-xl shadow-lg  flex gap-6">
    <div class="flex flex-col items-start space-x-3 mt-4 w-[45%] bg-orange-50 p-10 h-[300px]">
      <!-- User Avatar -->
      <img
        src="https://i.pravatar.cc/40"
        alt="User"
        class="w-14 h-14 rounded-full border-2 border-orange-400"
      />

      <!-- Textarea and Button -->
      <div class="flex-1 w-full mt-5">
        <textarea
          v-model="note"
          placeholder="Write"
          rows="4"
          class="w-full border border-gray-300 bg-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
        ></textarea>
        <div class="text-right mt-2">
          <button
            @click="submitNote"
            class="bg-orange-500 text-white px-5 py-1.5 rounded-md hover:bg-orange-600 transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>

    <div>
        <NotesCard class="mt-4" />
        <NotesCard class="mt-4" />
        <NotesCard class="mt-4" />
    </div>
  </div>
</template>

<script>
import NotesCard from './NotesCard.vue';

export default {
  name: 'NoteInputCard',
  components: {
    NotesCard,
  },
  data() {
    return {
      note: '',
    };
  },
  methods: {
    submitNote() {
      if (this.note.trim()) {
        this.$emit('submit-note', this.note);
        this.note = '';
      }
    },
  },
};
</script>
