
import Footer from './src/Componentes/Footer';
import { Titulo, Botao } from './src/Componentes/ComponentesIcones';

export default function NotFound() {
  return (
    <>
      {/* <Header /> */}
      <div>
          <Titulo text= "Não foi possível localizar o que você está procurando..." />
           
          <Botao text="Voltar ao início"/>

      </div>
      <Footer />
    </>
  );
}