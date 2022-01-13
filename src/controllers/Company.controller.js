import CompanyService from "../services/Company.service";

export default {
  getLinkedinInformations(req, _) {
    const company = new CompanyService();
    return company.getLinkedinInformations(req.query.name);
  },
  getSocieteDotComformations(req, _) {
    const company = new CompanyService();
    return company.getSocieteDotComformations(req.query.name);
  },
};
