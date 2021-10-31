import { ChangeEvent, useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import { apiemployess } from "./services/api";
import { Header, Heading, InputText } from "./components";
import { useFormatEmployes } from "./hooks/useFormatEmployes";

import { IGetEmployesData } from "./interfaces/apiEmployess/getEmployes";
import { IEmployes } from "./interfaces/IEmployes";

import "./styles/global.scss";
import "./styles.scss";

const App = () => {
  const [employess, setEmployess] = useState<IEmployes[]>([]);
  const [employessFiltered, setEmployessFiltered] = useState<IEmployes[]>([]);

  useEffect(() => {
    const getEmployess = async () => {
      try {
        const response = await apiemployess.get("/");

        setEmployess(
          response.data.map((employes: IGetEmployesData) =>
            useFormatEmployes(employes)
          )
        );
      } catch (error) {
        console.log(error);
      }
    };

    getEmployess();
  }, []);

  useEffect(() => {
    setEmployessFiltered(employess);
  }, [employess]);

  const handleFilter = (event: ChangeEvent<HTMLInputElement>) => {
    const textFilter = event.target.value.toLowerCase();

    setEmployessFiltered(
      employess.filter(
        (employes) =>
          employes.name.toLowerCase().includes(textFilter) ||
          employes.job.toLowerCase().includes(textFilter) ||
          employes.admissionDate.toLowerCase().includes(textFilter) ||
          employes.phone.toLowerCase().includes(textFilter)
      )
    );
  };

  return (
    <>
      <Header />
      <main id="main-content">
        <section className="main-content__title-input-wrapper">
          <Heading>Funcionários</Heading>
          <div className="main-content__title-input-wrapper--input-wrapper">
            <InputText
              type="text"
              placeholder="Pesquisar"
              icon={<AiOutlineSearch />}
              onChange={handleFilter}
            />
          </div>
        </section>
        <section className="main-content__table-wrapper">
          {employessFiltered.length === 0 ? (
            <p className="main-content__table-wrapper--warning-text">
              Nenhum Funcionário Encontrado.
            </p>
          ) : (
            <table className="main-content__table-wrapper--table">
              <thead>
                <tr>
                  <th>FOTO</th>
                  <th>NOME</th>
                  <th>CARGO</th>
                  <th>DATA DE ADMISSÃO</th>
                  <th>TELEFONE</th>
                </tr>
              </thead>
              <tbody>
                {employessFiltered.map(
                  ({ id, name, job, admissionDate, phone, image }) => (
                    <tr key={id}>
                      <td>
                        <img
                          src={image ?? "/images/avatar_generic.svg"}
                          alt={`Avatar do usuário ${name}`}
                          width={32}
                          height={32}
                        />
                      </td>
                      <td>{name}</td>
                      <td>{job}</td>
                      <td>{admissionDate}</td>
                      <td>{phone}</td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          )}
        </section>
      </main>
    </>
  );
};

export default App;
