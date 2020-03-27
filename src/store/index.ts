import Vue from 'vue';
import Vuex from 'vuex';
import CommonModule, {ICommonState} from './Modules/CommonModule';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    common: CommonModule
  },
});
