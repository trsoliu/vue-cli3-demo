import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import common from "./modules/common";
import sessionLogs from "./modules/sessionLogs";

export default new Vuex.Store({
  modules: {
    common,
    sessionLogs
  }
});
