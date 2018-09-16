<template>
  <button
    :class="[ 'v-check', '-' + size.toLowerCase() ]"
    @click="$emit('click', $event)"
  >
    <img class="icon" src="@/assets/icons/Check.svg" alt="Confirmar" />
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
  .v-check
    display: block
    border: 2px solid #2acf85
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
      background-color: rgba(#2acf85, .25)
      transition: background-color .05s

    // &.-success
    //   border-color: #2acf85
    // &.-failure
    //   border-color: #ff4757
</style>
