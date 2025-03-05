import { useState } from "react";

export default function formularioTarefa(){
    const [titulo, setTitulo] = useState('');

    //***CONEXÃO COM O BANCO */
    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     if (!titulo.trim()) return;
    
    //     try {
    //       await addDoc(collection(db, "tarefas"), {
    //         titulo,
    //         status: "pendente",
    //         prioridade: "média",
    //         createdAt: Timestamp.now(),
    //       });
    //       setTitulo("");
    //       tarefaAdicionada();
    //     } catch (error) {
    //       console.error("Erro ao adicionar tarefa:", error);
    //     }
    //   };

    return(
        <>
            <form>
                <input
                    type="text"
                    placeholder="Nova Tarefa"
                    value={titulo}
                    onChange={(e)=>setTitulo(e.target.value)}
                    required
                />

                <button type="submit">Adicionar</button>
            </form>
        </>
    )
}