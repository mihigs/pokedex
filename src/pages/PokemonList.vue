<template>
  <div>
      <router-link to="/">Home</router-link>
      <h1>Pokedex</h1>
        <Card  v-for="poke in pokemon" :key="poke.name" :pokemon="poke"/>
  </div>
</template>

<script>
import axios from 'axios'
import Card from '../components/Card.vue'

export default {
    components:{
        Card,
    },
    data(){
        return{
            pokemon: [],
        }
    },
    methods:{
        getData(){
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then((response) => {
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
    },
    created(){
        this.getData();
    },
}
</script>

<style>

</style>