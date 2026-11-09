import "./produto.css";

export default function PaginaProdutos() {
    
const listaDeProdutos = [
    { id: '1', nome: 'Ração Premium Cães Adultos 15kg', preco: 'R$ 189,90', categoria: 'Rações' },
    { id: '2', nome: 'Ração Premium Gatos Castrados 10kg', preco: 'R$ 164,90', categoria: 'Rações' },
    { id: '3', nome: 'Biscoito Canino Sabor Frango 400g', preco: 'R$ 18,90', categoria: 'Petiscos' },
    { id: '4', nome: 'Bifinho para Gatos Sabor Salmão 50g', preco: 'R$ 7,90', categoria: 'Petiscos' },
    { id: '5', nome: 'Shampoo Neutro Hipoalergênico 500ml', preco: 'R$ 27,90', categoria: 'Higiene' },
    { id: '6', nome: 'Condicionador Pelos Longos 500ml', preco: 'R$ 29,90', categoria: 'Higiene' },
    { id: '7', nome: 'Antipulgas e Carrapatos Cães 10 a 20kg', preco: 'R$ 89,90', categoria: 'Saúde' },
    { id: '8', nome: 'Vermífugo Gatos 4 Comprimidos', preco: 'R$ 39,90', categoria: 'Saúde' },
    { id: '9', nome: 'Comedouro Inox Antiderrapante', preco: 'R$ 39,90', categoria: 'Acessórios' },
    { id: '10', nome: 'Bebedouro Automático Fonte 2L', preco: 'R$ 79,90', categoria: 'Acessórios' },
    { id: '11', nome: 'Cama Redonda Pelúcia Tamanho M', preco: 'R$ 99,90', categoria: 'Camas e Casinhas' },
    { id: '12', nome: 'Casinha Plástica para Cães Tamanho 3', preco: 'R$ 189,00', categoria: 'Camas e Casinhas' },
    { id: '13', nome: 'Aquário Completo 20L com Filtro', preco: 'R$ 249,90', categoria: 'Aquarismo, Aves e Roedores' },
    { id: '14', nome: 'Ração para Calopsita 500g', preco: 'R$ 17,90', categoria: 'Aquarismo, Aves e Roedores' },
    { id: '15', nome: 'Ração para Hamster e Roedores 500g', preco: 'R$ 18,90', categoria: 'Aquarismo, Aves e Roedores' },
    { id: '16', nome: 'Bola Mordedora com Ranhuras Dentais', preco: 'R$ 12,90', categoria: 'Brinquedos' }

    ]

    const categorias = [...new Set(listaDeProdutos.map(produto => produto.categoria))];

    return (
        <div>
            <main className="paginaProduto">
                <div className="blocoConteudo">
                    <aside className="menuLateral">
                        <h2 className="tituloMenu">Nossa loja</h2>
                        <h3 className="secaoMenu"> Categorias</h3>        
                        <ul className="listaItensMenu">
                            <li>
                                <a href="#" className="itemMenuAtivo">Todos os produtos</a>
                            </li>

                            {categorias.map(categoria => (
                            <li key={categoria}>
                                <a href="#" className="itemMenu">{categoria}</a>
                            </li>
                            ))}
                        </ul>
                    </aside>

                    <section className="vitrineProdutos"> 
                        {listaDeProdutos.map((produto) => (
                            <div className="cardProduto" key={produto.id}>
                                <div>
                                    <div className="imagemProduto">
                                        <img src="./produtos-imagens/racao-calopsita-500g.jpg" alt="" />
                                    </div>
                                    <h2 className="descricaoProduto">{produto.nome}</h2>
                                </div>
                                <p className="precoProduto">{produto.preco}</p>
                            </div>
                        ))}     

                    </section>
                </div>
            </main>
        </div>
       

                
    )
}
