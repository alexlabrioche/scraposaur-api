import { scrapLinkedinByCompanyName } from "../utils/linkedin";
import { scrapSocieteDotComByCompanyName } from "../utils/societe-dot-com";
import CompanyEntity from "../entities/Company.entity";
import ErrorEntity from "../entities/Error.entity";

export default class Company {
  async getLinkedinInformations(name) {
    const data = await scrapLinkedinByCompanyName(name);
    const company = new CompanyEntity(data);
    return company;
  }

  async getSocieteDotComformations(name) {
    if (!name) {
      return new ErrorEntity({ code: 422, message: "parametre manquant" });
    }

    const data = await scrapSocieteDotComByCompanyName(name);

    if (data.error) {
      return new ErrorEntity({ code: 422, message: "Entreprise non trouvé" });
    }

    return new CompanyEntity(data);
  }
}
