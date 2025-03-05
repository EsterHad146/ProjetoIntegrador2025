import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Titulo, Botao, BotaoClicado, CaixaTexto } from "../../Componentes/ComponentesIcones";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../api-conexao";


export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleLogin = async (e) => {
      e.preventDefault();
      setLoading(true); // Definir o estado para "carregando"
      try {
        await signInWithEmailAndPassword(auth, email, senha);
        navigate("/home"); // Redireciona para o painel de tarefas
      } catch (error) {
        alert("Erro ao fazer login: " + error.message);
      }
  }

  return (
    <>
      <Titulo text="Bem Vindo(a)!" />
      <form onSubmit={handleLogin}>
        <div>
          <label>E-mail</label>
          <CaixaTexto
            type="email"
            value={email}
            text="Digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Senha</label>
          <CaixaTexto
            type={mostrarSenha ? "text" : "password"}
            id="password"
            value={senha}
            text="Digite sua senha"
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          <div>
            <input
              type="checkbox"
              id="mostrarSenha"
              checked={mostrarSenha}
              onChange={() => setMostrarSenha(!mostrarSenha)}
            />
            <label htmlFor="mostrarSenha">Exibir Senha</label>
          </div>
        </div>

       
        <BotaoClicado disabled={loading}>
          {loading ? "Carregando..." : "Entrar"}
        </BotaoClicado>
      </form>

      <Titulo text="Sua primeira vez por aqui?" />
      <Botao text="Cadastre-se agora" />
    </>
  );
}
