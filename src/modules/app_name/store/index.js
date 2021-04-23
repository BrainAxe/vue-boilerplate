import * as state from "./state";
import * as mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";

export const app_name = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
