import React from "react";
import FormularioTarefa from "../../Componentes/Tarefas/formularioTarefa";
import { Titulo } from "../../Componentes/ComponentesIcones";

export default function Dashboard() {
   

  return (
    <>
      <Titulo text="Gerenciador de Tarefas" />
      <FormularioTarefa />
    </>
  );
}
