import React, { useState, useEffect } from "react";
import { db } from "../../api-conexao";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import ComponenteTarefa from "./componenteTarefa";

export default function ListaTarefas({ excluir, editar }) {
    const [tarefas, setTarefas] = useState([]);

    // Função para carregar as tarefas do Firestore
    const loadTarefas = async () => {
        const querySnapshot = await getDocs(collection(db, "tarefas"));
        const tarefasArray = [];
        querySnapshot.forEach((doc) => {
            tarefasArray.push({ id: doc.id, ...doc.data() });
        });
        console.log(tarefasArray);
        setTarefas(tarefasArray);
    };

    // Função para excluir tarefa
    const handleExcluir = async (taskId) => {
        try {
            const taskRef = doc(db, "tarefas", taskId);
            await deleteDoc(taskRef);
            loadTarefas(); // Recarregar a lista de tarefas
        } catch (error) {
            console.error("Erro ao excluir tarefa:", error);
        }
    };

    // Carregar as tarefas quando o componente for montado
    useEffect(() => {
        loadTarefas();
    }, []);

    return (
        <>
            {tarefas.map((tarefa) => (
                <ComponenteTarefa
                    key={tarefa.id}
                    tarefa={tarefa}
                    excluir={handleExcluir} // Função de excluir ajustada
                    editar={editar} // Passa a função editar como está
                />
            ))}
        </>
    );
}

