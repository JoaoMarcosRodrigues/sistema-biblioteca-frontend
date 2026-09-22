import { TableAutor } from "../components/table-autor/table-autor";
import "./style.css";
import ImgLupa from "../../assets/lupa.png";
import { useAutorData } from "../../hooks/useAutorData";
import { useState } from "react";

function Autor() {
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const { data, isLoading, isFetching } = useAutorData(page, size);

  const handlePreviousPage = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    if (data && !data.last) {
      setPage(page + 1);
    }
  };

  return (
    <div className="container">
      <h1>Autores</h1>
      <div className="cabecalho-pesquisa">
        <input type="text" placeholder="Pesquise o autor..." />
        <button type="button" title="Pesquisar autor">
          <img src={ImgLupa} alt="Pesquisar" />
        </button>
        <button type="button">Novo</button>
      </div>
      <div className="table-wrapper">
        <table className="table-autor">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Nacionalidade</th>
              <th>Data de Nascimento</th>
              <th>Biografia</th>
            </tr>
          </thead>
          <tbody>
            {isLoading && (
              <tr>
                <td colSpan={4}>Carregando...</td>
              </tr>
            )}
            {!isLoading && data?.content.length === 0 && (
              <tr>
                <td colSpan={4}>
                  Nenhum autor encontrado.
                </td>
              </tr>
            )}
            {data?.content.map((autorData) => (
              <TableAutor
                key={autorData.id}
                nome={autorData.nome}
                nacionalidade={autorData.nacionalidade}
                dataNascimento={autorData.dataNascimento}
                biografia={autorData.biografia}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <button
          disabled={page === 0 || isFetching}
          onClick={handlePreviousPage}
        >
          Anterior
        </button>

        <span>
          Página {page + 1} de {data?.totalPages ?? 0}
        </span>

        <button
          disabled={data?.last || isFetching}
          onClick={handleNextPage}
        >
          Próxima
        </button>
      </div>

      <div className="page-size">
        <label htmlFor="page-size">
          Itens por página:
        </label>

        <select
          id="page-size"
          value={size}
          onChange={(event) => {
            setSize(Number(event.target.value));
            setPage(0);
          }}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </select>
      </div>
    </div>
  );
}

export default Autor;
