import Vue from 'vue';
import { Select, Option } from "@artsalliancemedia/aam-ui-vue";
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(Select);
Vue.use(Option);

new Vue({
  render: h => h(App),
}).$mount('#app');
