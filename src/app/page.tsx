import Image from "next/image";
import Link from "next/link";

import "./pagina-inicial/pagina-inicial.css";

export default function PaginaInicial() {

    const listaDeProdutosTeste = [
        { id: '1', nome: 'Ração Premium Cães Adultos 15kg', preco: 'R$ 189,90', categoria: 'Rações' },
        { id: '2', nome: 'Ração Premium Gatos Castrados 10kg', preco: 'R$ 164,90', categoria: 'Rações' },
        { id: '3', nome: 'Ração Filhotes Raças Pequenas 3kg', preco: 'R$ 74,90', categoria: 'Rações' },
        { id: '4', nome: 'Sachê Úmido para Gatos 85g', preco: 'R$ 4,90', categoria: 'Rações' },
        { id: '5', nome: 'Petisco Bifinho Sabor Carne 500g', preco: 'R$ 32,90', categoria: 'Petiscos' },
        { id: '6', nome: 'Osso de Couro Prensado 3 Unidades', preco: 'R$ 24,90', categoria: 'Petiscos' }
    ]

    const banners_categoria = [
        { id: '1', src: "/categoria/racoes.svg", alt: "Banner rações" },
        { id: '2', src: "/categoria/petiscos.svg", alt: "Banner petiscos" },
        { id: '3', src: "/categoria/higiene.svg", alt: "Banner higiene" },
        { id: '4', src: "/categoria/saude.svg", alt: "Banner saúde" },
        { id: '5', src: "/categoria/brinquedos.svg", alt: "Banner brinquedos" },
        { id: '6', src: "/categoria/acessorios.svg", alt: "Banner acessórios" },
        { id: '7', src: "/categoria/camas-e-casinhas.svg", alt: "Banner camas e casinhas" },
        { id: '8', src: "/categoria/aves-e-roedores.svg", alt: "Banner aves e roedores" }
    ]

    return (

        <div>
            <main className="paginaInicial">
                <section className="bannerProdutosLink">
                    <Link href="/produto"> 
                        <Image
                            src="/banners/banner-explorar-produto.png"
                            alt="Banner Produtos"
                            width={0}                  
                            height={0}
                            sizes="100vw"              
                            loading="eager"
                            style={{ 
                                width: '100%',        
                                height: 'auto',       
                                objectFit: 'cover',
                                
                            }}  
                        />
                    </Link>
                </section>
                <h2 className="tituloDestaque">Produtos em Destaque</h2>
                <section className="vitrineProdutos"> 
                    {listaDeProdutosTeste.map((produto) => (
                        <div className="cardProduto" key={produto.id}>
                            <div>
                                <div className="imagemProduto"></div>
                                <h2 className="descricaoProduto">{produto.nome}</h2>
                            </div>
                            <p className="precoProduto">{produto.preco}</p>
                        </div>
                    ))}     
                </section>
                
                <h2 className="tituloDestaque">Produtos por Categoria</h2>

                <section className="blocoBannersCategoria">
                    {banners_categoria.map((banner) => (
                        <div className="bannerCategoria" key={banner.id}>
                            <Link href="/produto">
                                <Image
                                    src={banner.src}
                                    alt={banner.alt}
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    loading="eager"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        objectFit: 'cover'                                   
                                    }} />
                            </Link>
                        </div>
                    ))}
                </section>
            </main>
        </div>
    )
}