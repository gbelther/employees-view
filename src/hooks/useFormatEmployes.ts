import { IGetEmployesData } from "../interfaces/apiEmployess/getEmployes";
import { IEmployes } from "../interfaces/IEmployes";

export const useFormatEmployes = (data: IGetEmployesData): IEmployes => {
  const { id, name, job, admission_date, phone, image } = data;

  return {
    id,
    name,
    job,
    admissionDate: admission_date,
    phone,
    image,
  };
};
