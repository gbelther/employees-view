import { AiOutlineSearch } from "react-icons/ai";

import { Header, Heading, InputText } from "./components";

import "./styles/global.scss";
import "./styles.scss";

const App = () => {
  return (
    <>
      <Header />
      <main id="main-content">
        <section className="main-content__title-input-wrapper">
          <Heading>Funcionários</Heading>
          <InputText
            type="text"
            placeholder="Pesquisar"
            icon={<AiOutlineSearch />}
          />
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
              <tr>
                <td>
                  <img
                    src="/images/avatar_generic.svg"
                    alt="Avatar do usuário"
                    width={32}
                    height={32}
                  />
                </td>
                <td>Rodrigo Mota</td>
                <td>Front-end</td>
                <td>00/00/0000</td>
                <td>+55 (55) 55555-5555</td>
              </tr>
              <tr>
                <td>
                  <img
                    src="/images/avatar_generic.svg"
                    alt="Avatar do usuário"
                    width={32}
                    height={32}
                  />
                </td>
                <td>Rodrigo Mota</td>
                <td>Front-end</td>
                <td>00/00/0000</td>
                <td>+55 (55) 55555-5555</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </>
  );
};

export default App;
