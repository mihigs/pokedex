import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './pages/Home'
import PokemonList from './pages/PokemonList'

Vue.config.productionTip = false

// 1. Define route components.
// These can be imported from other files
// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/allPokemon', component: PokemonList }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
