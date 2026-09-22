interface TableAutorProps {
  nome: string;
  nacionalidade: string;
  dataNascimento: string;
  biografia: string;
}

function formatarData(data: string): string {
  const [ano, mes, dia] = data.split("-");

  return `${dia}/${mes}/${ano}`;
}

export function TableAutor({
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
    </tr>
  );
}
