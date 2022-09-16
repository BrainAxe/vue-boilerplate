<template>
  <div class="home">
    <div class="flex justify-center">
      <div>
        <img alt="Vue logo" src="../assets/logo.png">
      </div>
      <div>
        <img alt="Tailwind logo" src="../assets/logo_2.png">
      </div>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/common/components/HelloWorld.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
  },
};
</script>
