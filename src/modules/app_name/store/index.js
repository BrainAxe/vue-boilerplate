import * as state from "./state";
import * as mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";

const appName = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};

export default appName;
