import ErrorEntity from "../../entities/Error.entity";

export default {
  name: "not-found",
  version: "1.0.0",
  register: async (server) => {
    server.route([
      {
        method: "GET",
        path: "/{p*}",
        handler: function () {
          return new ErrorEntity({ code: 404, message: "Oups" });
        },
      },
    ]);
  },
};
