import React from "react";
import componenteTarefa from "./componenteTarefa";

export default function listaTarefas({tarefas, excluir, editar}){
        return(
            <>
                {tarefas.map((tarefa)=>(
                    <componenteTarefa 
                        key={tarefa.id}
                        tarefa={tarefa}
                        excluir={excluir}
                        editar={editar}
                        />
                ))}
            </>
        )
}