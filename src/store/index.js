import Vue from "vue";
import Vuex from "vuex";

import * as state from "./state";
import * as mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";

import { app_name } from "@/modules/app_name/store";

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    app_name,
  },
});
