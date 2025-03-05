import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Titulo, Botao, CaixaTexto } from "../../Componentes/ComponentesIcones";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validação simples de senha
//     if (senha !== confirmarSenha) {
//       alert("As senhas não coincidem!");
//       return;
//     }
//   };

  return (
    <>
      <Titulo text="Criar Conta" />
      <form >
        {/* onSubmit={handleSubmit} */}
        <div>
          <label>Informe o seu E-mail:</label>
          <CaixaTexto
            text="Digite seu email"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Informe a sua Senha:</label>
          <CaixaTexto
            type={senha? "text" : "password"}
            id="senha"
            value={senha}
            text="Digite sua senha"
            onChange={(e) => setSenha(e.target.value)}
            required
            />
        </div>

        <div>
          <label>Confirme sua Senha:</label>
          <CaixaTexto
            type={confirmarSenha ? "text" : "password"}
            id="confirmarSenha"
            value={confirmarSenha}
            text="Digite sua senha"
            onChange={(e) => setConfirmarSenha(e.target.value)}
            required
          />
        </div>

        <div>
          <Botao text="Cadastrar" />
        </div>
      </form>
    </>
  );
}
