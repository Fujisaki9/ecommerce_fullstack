import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import "./globals.css";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: "PetShop Store",
  description: "Tudo para o seu pet, em um só lugar!",
};

export default function RootLayout({ children }: LayoutProps<"/">) {

    const links = [
        { id: 1, href: "/", texto: "Página Inicial", nome_classe: "botaoMenu" },
        { id: 2, href: "/produto", texto: "Produtos", nome_classe: "botaoMenu" },
        { id: 3, href: "/meus-pedidos", texto: "Meus Pedidos", nome_classe: "botaoMenu" },
        { id: 4, href: "/carrinho", texto: "Carrinho", nome_classe: "botaoMenu" },
        { id: 5, href: "/checkout", texto: "Checkout", nome_classe: "botaoMenu" },
        { id: 6, href: "/login", texto: "Login", nome_classe: "botaoLogin", final: true }
    ]

    const linksRodape = [
        { id: 1, href: "/", texto: "Página Inicial" },
        { id: 2, href: "/produto", texto: "Produtos" },
        { id: 3, href: "/meus-pedidos", texto: "Meus Pedidos" },
        { id: 4, href: "/carrinho", texto: "Carrinho" }    
    ]

    const infoContato = [
        {id: 1, texto: "contato@petshop.com"},
        {id: 2, texto: "(41) 00000-0000"},
        {id: 3, texto: "São José dos Pinhais, PR"}
    ]

    return (
        <html lang="pt-br">
        <body>
            <header className="cabecalho">
                <nav>
                    <ul className="menuNavegacao">
                        {links.map((link) => (
                            <li key={link.id} className={link.final ? "itemFinal" : undefined}>
                                <Link className={link.nome_classe} href={link.href}>
                                    {link.texto}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <Image 
                    src="/banners/banner-novo.png"
                    alt="Foto PetShop"
                    width={0}                  
                    height={0}                 
                    sizes="100vw"              
                    loading="eager"            
                    style={{ 
                        width: '100%',        
                        height: '300px',       
                        objectFit: 'cover',   
                        display: 'block'
                }}/>
            </header>
            {children}
            <footer className="rodape">
                <div className="rodapeConteudo">
                    <div>
                        <h3>PetShop Store</h3>
                        <p>Tudo para o seu pet, em um só lugar!</p>
                    </div>
                    <div>
                        <h3>Navegação</h3>
                        <ul>
                            {linksRodape.map((links) =>(
                                <li key={links.id}>
                                    <Link href={links.href}>{links.texto}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3>Contato</h3>
                        <ul>
                            {infoContato.map((info) => (
                                <li key={info.id}>{info.texto}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <p className="rodapeDireitos">© 2026 PetShop Store</p>
            </footer>
        </body>
        </html>
    );
    }
