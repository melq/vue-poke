<template>
  <div>
    <h2>{{ pokemon.species.name }}</h2>
    <img v-bind:src="pokemon.sprites.front_default" />
  </div>
</template>

<script>
module.exports = {
  components: {

  },
  props: {
    pokemon: {}
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
