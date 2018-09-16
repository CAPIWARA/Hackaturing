<template>
  <section class="check-container">
    <v-card class="card">
      
      <div class="check-count">
        <span class="current">{{ current }}</span>
        <span class="quantity"> / {{ receipts.length }}</span>
      </div>


    </v-card>
  </section>
</template>

<script>
  import VCard from '@/components/VCard';

  export default {
    components: { VCard },
    data () {
      return {
        current: 0,
        receipts: [],
      };
    },
  };
</script>

<style lang="stylus">
  .check-container
    margin: 50px
    display: flex
    align-items: center
    justify-content: center

    > .card
      width: 980px
      height: 100vh
</style>
