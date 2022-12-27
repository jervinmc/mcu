const actions = {
    async add({ commit },  data ) {
      const response = await this.$axios.$post(
        "/events/",
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
        `/events/${data.get('id')}/`,
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
          "/events/"
        );
        commit("SET_EVENT", response);
      },
  };
  
  export default actions;
  
  