const actions = {
    async add({ commit },  data ) {
      const response = await this.$axios.$post(
        "/job_posting/",
        data
      );
      response.data = data;
    },
    async edit({ commit },  data ) {
      const response = await this.$axios.$put(
        `/job_posting/${data.id}/`,
        data
      );
      response.data = data;
    },
    async view({ commit }, ) {
        const response = await this.$axios.$get(
          "/job_posting/"
        );
        commit("SET_EVENT", response);
      },
  };
  
  export default actions;
  