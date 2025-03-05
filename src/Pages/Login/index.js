import { useEffect, useState } from "react";
import {
    Titulo,
    Botao,
    BotaoClicado,
    CaixaTexto,
} from "../../Componentes/ComponentesIcones";

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [loading, setLoading] = useState(false);

    return (
        <>
            <Titulo text="Bem Vindo(a)!" />
            <form>
                <div>
                    <label>E-mail</label>
                    <CaixaTexto
                        type="email"
                        value={email}
                        text="Digite seu e-mail"
                        required
                    />
                </div>

                <div>
                    <label>Senha</label>
                    <CaixaTexto
                        type={mostrarSenha ? "text" : "password"}  // Corrigido de "senha" para "password"
                        value={senha}
                        text="Digite sua senha"
                        required
                    />

                    <div>
                        <input
                            type="checkbox"
                            id="mostrarSenha"
                            className="mr-2"
                            checked={mostrarSenha}
                            onChange={() => setMostrarSenha(!mostrarSenha)}
                        />
                        <label htmlFor="mostrarSenha">
                            Exibir Senha
                        </label>
                    </div>
                </div>
           

            <BotaoClicado disabled={loading}>
                {loading ? "Carregando..." : "Entrar"}
            </BotaoClicado>
        </form >

      <Titulo text="Sua primeira vez por aqui?" />
      <Botao text="Cadastre-se agora" />
    </>
  );
}
