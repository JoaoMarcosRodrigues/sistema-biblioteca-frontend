import type { TableAutorProps } from "../../inteface/TableAutorProps";
import IconEdit from '../../assets/icon-edit.png';
import IconDelete from '../../assets/icon-delete.png';
import '../components/TableAutor.css'

function formatarData(data: string): string {
  const [ano, mes, dia] = data.split("-");

  return `${dia}/${mes}/${ano}`;
}

export function TableAutor({
  id,
  nome,
  nacionalidade,
  dataNascimento,
  biografia,
}: TableAutorProps) {
  return (
    <tr>
      <td>{nome}</td>
      <td>{nacionalidade}</td>
      <td>{formatarData(dataNascimento)}</td>
      <td>{biografia}</td>
      <td>
        <div className="container-botoes-acao">
          <button key={id} className="botao-acao">
              <img src={IconEdit} alt="Editar" />
          </button>
          <button key={id} className="botao-acao">
              <img src={IconDelete} alt="Excluir" />
          </button>
        </div>
      </td>
    </tr>
  );
}
