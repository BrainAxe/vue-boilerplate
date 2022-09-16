import { createStore } from "vuex";

import appName from "@/modules/app_name/store";

import * as state from "./state";
import * as mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";

export default createStore({
  state,
  mutations,
  actions,
  getters,
  modules: {
    appName,
  },
});
