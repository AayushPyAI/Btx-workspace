<template>
   <router-view />
</template>




<script>
import { mapGetters, mapActions } from 'vuex'
import { OhVueIcon, addIcons } from 'oh-vue-icons';

import './style.css'
export default {
  mounted() {
    console.log("application mounted")
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['isDarkTheme']),
  },
  methods: {
  },

}
</script>

<style scoped></style>
