const actions = {
    async add({ commit },  data ) {
      const response = await this.$axios.$post(
        "/job_posting/",
        data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      response.data = data;
    },
    async edit({ commit },  data ) {
      const response = await this.$axios.$put(
        `/job_posting/${data.get('id')}/`,
        data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      response.data = data;
    },
    async view({ commit }, ) {
        const response = await this.$axios.$get(
          "/job_posting/"
        );
        commit("SET_EVENT", response);
      },
      async notify({ commit }, ) {
        const response = await this.$axios.$post(
          "/notify/",
          {}
        );
        commit("SET_EVENT", response);
      },
  };
  
  export default actions;
  