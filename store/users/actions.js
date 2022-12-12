const actions = {
    async add({ commit },  customer ) {
      const response = await this.$axios.$post(
        "/signup/",
        customer
      );
    //   response.customer = customer;
    },
    async addUser({ commit },  customer ) {
      const response = await this.$axios.$post(
        "/users/",
        customer
      );
    //   response.customer = customer;
    },
    async edit({ commit },  customer ) {
      const response = await this.$axios.$put(
        `/users/${customer.id}/`,
        customer
      );
      response.customer = customer;
    },
    async delete({ commit },  customer ) {
      const response = await this.$axios.$delete(
        `/users/${customer.id}/`,
        customer
      );
      response.customer = customer;
    },
    async view({ commit },  customer ) {
      const response = await this.$axios.$get(
        `/users/`,
      );
      response.customer = customer;
      commit("SET_EVENT", response);
    },
    async editImage({ commit },  customer ) {
      const response = await this.$axios.$put(
        `/users/${customer.get('id')}/`,
        customer,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      response.customer = customer;
    },
  };
  
  export default actions;
  