import Vue from 'vue'

Vue.config.productionTip = false

import CardsLoopApp from '../apps/CardsLoopApp.vue'

var cardsLoop = new Vue({
    render: h => h(CardsLoopApp),
}).$mount('#cards-loop')