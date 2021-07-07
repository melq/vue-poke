<template>
  <div>
    <h1>Pokemons!</h1>
    <li v-for = "pokemon in pokemons">
      <h2>{{ pokemon.species.name }}</h2>
<!--      <img src="{{ pokemon.}}">-->
    </li>
  </div>
</template>

<script>
module.exports = {
  components: {

  },
  data: function() {
    return {
      pokemons: []
    }
  },
  methods: {
    async getPokemons() {
      const array = [];
      for (let i = 1; i < 10; i++) {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${i}/`)
            .then(function(response) {
              array.push(response.data)
              console.log(response.data)
            })
      }
      this.pokemons = array
    }
  },
  created: function() {
    this.getPokemons()
  }
}

</script>

<style>
h1 {
  color: #909090;
}
li {
  list-style: none;
}
</style>
