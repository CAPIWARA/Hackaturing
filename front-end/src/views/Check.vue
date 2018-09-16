<template>
  <section class="check-container">
    <v-card class="card" />
  </section>
</template>

<script>
  import VCard from '@/components/VCard';

  export default {
    components: { VCard },
  };
</script>

<style lang="stylus">
  .check-container
    padding: 50px
    display: flex
    align-items: center
    justify-content: center

    > .card
      width: 980px
      height: 100vh
</style>
