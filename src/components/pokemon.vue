<template>
  <div>
<!--    <h2>{{ pokemon.species.name }}</h2>-->
<!--    <img v-bind:src="pokemon.sprites.front_default" />-->
    <h2>{{ name }}</h2>
    <img v-bind:src="imgUrl" />
  </div>
</template>

<script>
module.exports = {
  components: {

  },
  props: {
    // pokemon: {species: {name: String}, sprites: {front_default: String}}
    name: String,
    imgUrl: String
  },
  data: function() {
    return {

    }
  },
  methods: {

  },
}
</script>

<style>

</style>
