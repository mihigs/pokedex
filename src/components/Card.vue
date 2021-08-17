<template>
    <div class="card-container" @click="toggleDetails()">
        <p>{{pokemon.name}}</p>
        <div v-if="showDetails" class="details">
            <img :src="pokemonDetails.sprites.front_default" alt="">
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    props: ['pokemon'],
    data(){
        return{
            pokemonDetails: {},
            showDetails: false,
        }
    },
    methods: {
        toggleDetails(){
            if(this.showDetails){
                this.showDetails = false;
            }else{
                this.getPokemonData();
            }
        },
        getPokemonData(){
            axios.get(this.pokemon.url)
                .then((response) => {
                    // handle success
                    this.pokemonDetails = response.data;
                    console.log(this.pokemonDetails);
                    this.showDetails = true;
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
}
</script>

<style>
    .card-container{
        border-radius: 20px;
        border: black solid 1px;
        margin-bottom: 1%;
    }
</style>