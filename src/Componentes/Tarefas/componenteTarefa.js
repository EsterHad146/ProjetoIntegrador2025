import React from "react";

export default function ComponenteTarefa({ tarefa, excluir, editar }) {
    return (
        <>
            <h3>{tarefa.titulo}</h3>
            <p>Status: {tarefa.status}</p>
            <p>Prioridade: {tarefa.prioridade}</p>
            <button onClick={() => editar(tarefa)}>Editar</button>
            <button onClick={() => excluir(tarefa.id)}>Excluir</button>
        </>
    );
}
