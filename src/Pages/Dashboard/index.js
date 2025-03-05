import React, { useState } from "react";
import Footer from "../../Componentes/Footer";
import listaTarefas from "../../Componentes/Tarefas/listaTarefas"
import formularioTarefa from "../../Componentes/Tarefas/listaTarefas"

export default function Home() {
    const [tarefas, setTarefas] = useState([])
    

  return (
    <>
      <h2>Gerenciador de Tarefas</h2>
      {/* <button onClick={handleSair}>Sair</button>
      <formularioTarefa addTarefa={() => {}} />
      <listaTarefas tarefas={tarefas} excluir={handleExcluir} /> */}
      <Footer />
    </>
  );
}
