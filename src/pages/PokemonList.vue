<template>
  <div>
      <h1>Pokedex</h1>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            pokemon: [],
        }
    },
    methods:{
        getData(){

        },
    },
    created(){
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(function (response) {
                // handle success
                // console.log(response);
                this.pokemon = response.data.results;
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    },
}
</script>

<style>

</style>