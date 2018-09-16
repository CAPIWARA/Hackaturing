<template>
  <button :class="[ 'v-cancel', '-' + size.toLowerCase() ]">
    <img class="icon" src="@/assets/icons/Cancel.svg" alt="Rejeitar" />
  </button>
</template>

<script>
  export default {
    props: {
      size: {
        type: String,
        default: 'MD',
        validator: (size) => [ 'SM', 'MD' ].includes(size),
      },
    },
  };
</script>

<style lang="stylus">
  .v-cancel
    display: block
    border: 2px solid #ff4757
    padding: 5px
    outline: none
    border-radius: 50%
    cursor: pointer
    transition: background-color .5s

    &.-sm
      width: 30px
      height: @width

    &.-md
      width: 50px
      height: @width

    &:active
      background-color: rgba(#ff4757, .25)
      transition: background-color .05s
</style>
