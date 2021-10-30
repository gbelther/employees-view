import { IGetEmployesData } from "../interfaces/apiEmployess/getEmployes";
import { IEmployes } from "../interfaces/IEmployes";
import { formatPhoneNumber } from "../utils/numberFormats";

export const useFormatEmployes = (data: IGetEmployesData): IEmployes => {
  const { id, name, job, admission_date, phone, image } = data;

  return {
    id,
    name,
    job,
    admissionDate: admission_date,
    phone: formatPhoneNumber(phone),
    image,
  };
};
