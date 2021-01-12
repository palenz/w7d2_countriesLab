import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
    new Vue({
        el: '#app',
        data: {
            country: null,
            favCountry: null
        },
        mounted () {
           this.countries();
        },

    
        computed: {
            totalPopulation: function(){ 
            return this.country.reduce((total, currentCountry) => total + currentCountry.population, 0);
        }},
        methods: {
          countries: function(){
              fetch('https://restcountries.eu/rest/v2/all')
              .then(response => response.json())
              .then( data => this.country = data )
          }

        }
    });
});

