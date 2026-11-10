import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faCartShopping } from '@fortawesome/free-solid-svg-icons';

import './produto-id.css';

export default function PaginaProduto() {
  return (
    <main className="paginaProdutoEspecifico">
        <div className="produtoGrid">
            <div className="produtoImagemPrincipal">
                <img
                    src="../produtos-pagina/antipulgas-caes-grande.jpg"
                    alt=""
            />
            </div>
            <section className="produtoInfo">
                <h1 className="produtoNome">Antipulgas e Carrapatos Cães 10 a 20kg</h1>

                <div className="produtoPreco">
                    <span className="precoAtual">R$ 89,90</span>
                    <span className="textoPedidoProdutoEspecifico">ou 10x de R$ 8,90 sem juros</span>
                </div>

                <label>Quantidade</label>
                <div className="produtoCompra">
                    <div className="controleQuantidade">
                        <button className="botaoQuantidade" type="button" aria-label="Diminuir">
                            <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <span className="valorQuantidade">1</span>
                        <button className="botaoQuantidade" type="button" aria-label="Aumentar">
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                    </div>
                    <span className="avisoEstoque">Restam 3 unidades</span>
                </div>
            

                <div className="produtoBotoes">
                    <button className="botaoAdicionarCarrinho" type="button">
                        <FontAwesomeIcon icon={faCartShopping} /> Adicionar ao carrinho
                    </button>
                    <button className="botaoContorno" type="button">Comprar agora</button>
                </div>
            </section>
        </div>

        <div className="painelCartaoProdutoEspecifico produtoDescricao">
            <h2 className="secaoTituloProdutoEspecifico">Descrição do produto</h2>
            <p>
            O Antipulgas e Carrapatos para cães de 10 a 20 kg oferece ação rápida
            e proteção eficaz contra pulgas e carrapatos por até 30 dias. De fácil
            aplicação, ajuda a manter o seu cão protegido, confortável e feliz.
            </p>
            <ul className="produtoEspecificacoes">
                <li><strong>Indicado para:</strong> cães de 10 a 20 kg</li>
                <li><strong>Proteção:</strong> até 30 dias</li>
                <li><strong>Ação:</strong> rápida e eficaz</li>
                <li><strong>Aplicação:</strong> pipeta (uso tópico)</li>
            </ul>
        </div>
    </main>
  );
}