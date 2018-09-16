<template>
  <div class="check-controls">
    <v-check
      v-if="review === undefined || review === 'CHECKED'"
      class="control"
      @click="$emit('change', review === undefined ? 'CHECKED' : undefined)"
    />

    <v-cancel
      v-if="review === undefined || review === 'REJECTED'"
      class="control"
      @click="$emit('change', review === undefined ? 'REJECTED' : undefined)"
    />
  </div>
</template>

<script>
  import VCheck from '@/components/VCheck';
  import VCancel from '@/components/VCancel';

  export default {
    components: { VCheck, VCancel },
    props: {
      review: {
        type: String,
        default: undefined,
      },
    },
  };
</script>

<style lang="stylus">
  .check-controls
    display: flex
    min-width: 130px
    align-items: center
    justify-content: flex-start
    padding: 10px

    > .control + .control
      margin-left: 10px
</style>
