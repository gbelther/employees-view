import { useEffect, useState } from "react";
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
            />
          </div>
        </section>
        <section className="main-content__table-wrapper">
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
              {employess.map(
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
        </section>
      </main>
    </>
  );
};

export default App;
