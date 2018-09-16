<template>
  <section class="check-container">
    <check-card
      v-if="transaction"
      class="card"
      :reviews="reviews"
      :transaction="transaction"

      :current="quantity.current"
      :quantity="quantity.quantity"

      @change-review="onReviewChange"
    />
  </section>
</template>

<script>
  import CheckCard from '@/components/CheckCard';
  import {
    getCurrent,
    getQuantity,
    sendReviews,
  } from '@/services/transactions';

  export default {
    components: { CheckCard },
    data () {
      return {
        quantity: {
          current: 0,
          quantity: 0
        },
        transaction: null,
        reviews: {
          0: 'CHECKED',
        },
      };
    },
    methods: {
      onReviewChange (review, index) {
        this.reviews = { ...this.reviews, [index]: review };
      }
    },
    async mounted () {
      this.transaction = await getCurrent();
      this.quantity = await getQuantity();
    }
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
      height: calc(100vh - 100px)
</style>
