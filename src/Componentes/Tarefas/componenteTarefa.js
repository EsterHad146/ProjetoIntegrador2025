

export default function componenteTarefa({tarefa, excluir, editar}){
    return(
        <>
            <h3>{tarefa.titulo}</h3>
            <p>Status: {tarefa.status}</p>
            <p>Prioridade: {tarefa.prioridade}</p>
            <button onClick={()=> editar}>Editar</button>
            <button onClick={()=> excluir}>Excluir</button>

        </>
    )
}