<template>
  <v-card class="check-card card">
    <h2>{{ transaction.title }}</h2>

    <div class="information">
      <dl class="v-chunk">
        <dt class="name">Prestador</dt>
        <dd class="value">{{ transaction.provider }}</dd>

        <dt class="name">Guia</dt>
        <dd class="value">{{ transaction.type }}</dd>

        <dt class="name">Data</dt>
        <dd class="value">{{ transaction.date }}</dd>

        <dt class="name">Caráter do atendimento</dt>
        <dd class="value">{{ transaction.category }}</dd>
      </dl>

      <dl class="v-chunk">
        <dt class="name">Paciente</dt>
        <dd class="value">{{ transaction.patient }}</dd>

        <dt class="name">Sexo</dt>
        <dd class="value">{{ transaction.gender }}</dd>

        <dt class="name">Idade</dt>
        <dd class="value">{{ transaction.birthday | toAge }}</dd>
      </dl>
    </div>

    <p class="check-count count">
      <span class="current">{{ current }}</span>
      <span class="quantity"> / {{ quantity }}</span>
    </p>

    <div
      v-for="(item, index) in transaction.items"
      :key="index"
      class="check-item item"
    >
      <span class="item">
        <small>{{ item.quantity }} x</small> {{ item.name }}</span>
      <span class="price">{{ item.price | toBRL }}</span>

      <check-controls
        :review="reviews[index]"
        @change="$emit('change-review', $event, index)"
      />
    </div>

    <button class="button">
      <span class="text">Próximo</span>
      <img class="icon" src="@/assets/icons/Chevron-Right.svg" alt="Próximo" />
    </button>
  </v-card>
</template>

<script>
  import VCard from '@/components/VCard';
  import CheckControls from '@/components/CheckControls';

  export default {
    components: { VCard, CheckControls },
    props: {
      transaction: {
        type: Object,
        required: true,
      },
      current: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      reviews: {
        type: Object,
        required: true,
      },
    },
  };
</script>

<style lang="stylus">
  .check-count
    margin: 0

  .check-card
    position: relative
    padding: 50px
    display: flex
    align-items: flex-start
    flex-direction: column
    justify-content: flex-start

    > .count
      position: absolute
      top: 30px
      right: 30px
    
    > .item
      width: 100%

    > .item + .item
      border-top:  1px solid rgba(#000, .25)

    > .button
      display: flex
      align-items: center
      background-color: transparent
      border: 2px solid #2acf85
      margin-top: auto
      margin-left: auto
      transition: background-color .5s
      border-radius: 50px
      cursor: pointer
      outline: none 

      > .icon
        width: 50px
        height: 50px
        transition: transform .3s

      > .text
        font: inherit
        font-size: 22px
        color: #2acf85
        padding-left: 10px

      &:active
        background-color: rgba(#2acf85, .25)
        transition: background-color .1s

      &:hover > .icon
        transform: translateX(10%)
        transition: transform .05s

    > .information
      width: 100%
      display: flex

      > .v-chunk
        width: 50%

  .v-chunk
    > .name
      font-weight: 700

    > .value
      margin-top: 10px
      margin-left: 0
      margin-bottom: 20px

  .check-item
    display: flex
    align-items: center
    justify-content: flex-start

    > .price
      margin-left: auto

    > .controls
      width: 120px
      display: flex
      align-items: center
      justify-content: space-around
</style>

