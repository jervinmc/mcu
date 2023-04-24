const actions = {
  async add({ commit }, data) {
    const response = await this.$axios.$post("/skills/", data);
    response.data = data;
  },
  async edit({ commit }, data) {
    const response = await this.$axios.$put(`/skills/${data.id}/`, data);
    response.data = data;
  },
  async delete({ commit }, data) {
    const response = await this.$axios.$delete(`/skills/${data}/`);
    // response.data = data;
  },
  async view({ commit }) {
    const response = await this.$axios.$get("/skills/");
    commit("SET_EVENT", response);
  },
  async getByUserID({ commit }) {
    const response = await this.$axios.$get("/skill-get-by-id/");
    commit("SET_EVENT", response);
  },
};

export default actions;
