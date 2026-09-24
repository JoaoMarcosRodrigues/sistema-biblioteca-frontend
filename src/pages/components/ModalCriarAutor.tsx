import { useEffect, useState } from "react"
import "../components/ModalCriarAutor.css"
import { useAutorDataMutate } from "../../hooks/usetAutorDataMutate";
import type { AutorData } from "../../inteface/AutorData";

interface ModalProps{
    closeModal(): void
}

const ModalCriarAtor = ({closeModal}: ModalProps) => {
    const [nome, setNome] = useState("");
    const [nacionalidade, setNacionalidade] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    const [biografia, setBiografia] = useState("");
    const {mutate, isSuccess, isPending } = useAutorDataMutate();

    const submit = () => {
        const autorData: AutorData = {
            nome,
            nacionalidade,
            dataNascimento,
            biografia
        }

        mutate(autorData);
    }

    useEffect(() =>{
        if(!isSuccess) return
        closeModal();
    }, [isSuccess])

    return(
        <div className="container-modal">
            <div className="modal">
                <h3>Dados do Autor</h3>
                <form>
                    <input placeholder="Nome" type="text" value={nome} onChange={e => setNome(e.target.value)} />
                    <input placeholder="Nacionalidade" type="text" value={nacionalidade} onChange={e => setNacionalidade(e.target.value)} />
                    <input placeholder="Data de Nascimento" type="date" value={dataNascimento} onChange={e => setDataNascimento(e.target.value)} />
                    <textarea placeholder="Biografia" className="textarea-biografia" rows={6} value={biografia} onChange={e => setBiografia(e.target.value)}></textarea>
                </form>
                <div className="container-botoes">
                    <button type="button" onClick={submit}>{isPending ? 'Salvando...' : 'Salvar'}</button>
                    <button type="button" className="botao-fechar" onClick={closeModal}>Fechar</button>
                </div>
            </div>
        </div>
    )
}

export default ModalCriarAtor