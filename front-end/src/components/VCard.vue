<template>
  <div class="v-card">
    <slot />
  </div>
</template>

<style lang="stylus">
  .v-card
    border-radius: 60px
    background-color: #ffffff
    box-shadow: 0  10px 40px 0 rgba(16, 36, 94, .2),
          inset 0 -10px    0 0 rgba(103, 117, 161, .06)
</style>
