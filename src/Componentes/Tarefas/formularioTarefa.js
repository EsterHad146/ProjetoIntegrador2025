import { useState } from "react";
import { db } from "../../api-conexao";
import { collection, addDoc, Timestamp } from "firebase/firestore"; // Importa as funções do Firestore
import { Botao, CaixaTexto } from "../ComponentesIcones";

export default function FormularioTarefa({ tarefaAdicionada }) {
  const [titulo, setTitulo] = useState("");
  const [status, setStatus] = useState("pendente");
  const [prioridade, setPrioridade] = useState("média");

  // Função para adicionar tarefa ao Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!titulo.trim()) return; // Verifica se o título não está vazio

    try {
      await addDoc(collection(db, "tarefas"), {
        // Envia a tarefa para o Firestore
        titulo,
        status,
        prioridade,
      });
      setTitulo(""); // Limpa o input após enviar
      setStatus("pendente"); // Limpa o input após enviar
      setPrioridade("média"); // Limpa o input após enviar
      tarefaAdicionada(); // Chama a função de callback após a tarefa ser adicionada
    } catch (error) {
      console.error("Erro ao adicionar tarefa:", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CaixaTexto
          type="text"
          text="Nova Tarefa"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)} // Atualiza o estado do título
          required
        />

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="pendente">Pendente</option>
          <option value="em andamento">Em Andamento</option>
          <option value="concluída">Concluída</option>
        </select>
        <select
          value={prioridade}
          onChange={(e) => setPrioridade(e.target.value)}
        >
          <option value="baixa">Baixa</option>
          <option value="média">Média</option>
          <option value="alta">Alta</option>
        </select>

        <Botao type="submit" text="Adicionar" />
      </form>
    </>
  );
}
