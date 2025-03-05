import React from "react"


export default function Footer() {
    return (
        <div className="grid place-items-center h-60 bg-gradient-to-r from-purple-800 to-teal-400 ">
            <p className="font-sans font-bold mb-3 text-center text-white dark:text-white">Rua Santos Nº 300, Centro, Catanduva - SP - 15801-350 <br/> catanduva@sp.senac.br - (17) 3311-4650</p>
            <div className="grid grid-cols-2 gap-5 pb-5">
                {/* <Link href="/fale-conosco">
                    <button type="submit" className="font-semibold text-white">Sobre Nós</button>
                </Link>
                <Link href="/fale-conosco">
                    <button type="submit" className="font-semibold text-white">Fale Conosco</button>
                </Link> */}
            </div>
            <div className="grid grid-cols-5 gap-8 pb-5">
                <a href="https://www.facebook.com/senaccatanduvasp/?locale=pt_BR" target="_blank">
                    <img className="h-10 max-w-full" src="/facebook-app-round-white-icon.svg" alt="logo facebook"/></a>
                <a href="https://www.instagram.com/senac.catanduva/" target="_blank">
                    <img className="h-10 max-w-full" src="/instagram-white-icon.svg" alt="image description"/></a>
                <a href="https://api.whatsapp.com/send?phone=551140901030&text=Ol%C3%A1%2C%20preciso%20de%20informa%C3%A7%C3%B5es" target="_blank">
                    <img className="h-10 max-w-full" src="/whatsapp-white-icon.svg" alt="image description"/></a>
                <a href="https://www.linkedin.com/school/senacsaopaulo/posts/?feedView=all" target="_blank">
                    <img className="h-10 max-w-full" src="/linkedin-app-white-icon.svg" alt="image description"/></a>
                <a href="https://www.sp.senac.br/senac-catanduva" target="_blank">
                    <img className="h-10 max-w-full" src="/senac-site-logo.svg" alt="logo-site-senac"/></a>
            </div>
        </div>
    )
  }