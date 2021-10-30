import { IGetEmployesData } from "../interfaces/apiEmployess/getEmployes";
import { IEmployes } from "../interfaces/IEmployes";
import { formatPhoneNumber } from "../utils/numberFormats";

export const useFormatEmployes = (data: IGetEmployesData): IEmployes => {
  const { id, name, job, admission_date, phone, image } = data;

  const arrayDate = admission_date.slice(0, 10).split("-");

  return {
    id,
    name,
    job,
    admissionDate: `${arrayDate[2]}/${arrayDate[1]}/${arrayDate[0]}`,
    phone: formatPhoneNumber(phone),
    image,
  };
};
