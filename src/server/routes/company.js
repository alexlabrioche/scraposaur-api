import CompanyController from "../../controllers/Company.controller";

export default {
  name: "company",
  version: "1.0.0",
  register: async (server) => {
    server.route([
      {
        method: "GET",
        path: "/api/company/linkedin",
        handler: CompanyController.getLinkedinInformations,
      },
      {
        method: "GET",
        path: "/api/company/societedotcom",
        handler: CompanyController.getSocieteDotComformations,
      },
    ]);
  },
};
