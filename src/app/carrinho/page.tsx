import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faMinus, faPlus, faLock } from '@fortawesome/free-solid-svg-icons';

import './carrinho.css';

export default function PaginaCarrinho() {
  return (
  <div>
    <main className="paginaCarrinho">
      <div className="checkoutGrid">
        <section>
          <div className="painelCartaoCarrinho">
            <h2 className="secaoTituloCarrinho barraLateral">
              <span>Meu Carrinho</span>
              <span className="textoPedidoCarrinho">3 itens</span>
            </h2>

            <div className="listaCarrinho">
              <div className="carrinhoDeItem itemCarrinho">
                <div className="informacaoItem">
                  <div className="tituloItem">Ração Premium Cães Adultos 15kg</div>
                  <div className="precoUnitario">R$ 189,90 cada</div>
                </div>
                <div className="controleQuantidade">
                  <button className="botaoQuantidade" type="button" aria-label="Diminuir">
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <span className="valorQuantidade">1</span>
                  <button className="botaoQuantidade" type="button" aria-label="Aumentar">
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
                <div className="precoItem">R$ 189,90</div>
                <button className="botaoRemover" type="button" aria-label="Remover item">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>

              <div className="carrinhoDeItem itemCarrinho">
                <div className="informacaoItem">
                  <div className="tituloItem">Vermífugo Gatos 4 Comprimidos</div>
                  <div className="precoUnitario">R$ 39,90 cada</div>
                </div>
                <div className="controleQuantidade">
                  <button className="botaoQuantidade" type="button" aria-label="Diminuir">
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <span className="valorQuantidade">2</span>
                  <button className="botaoQuantidade" type="button" aria-label="Aumentar">
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
                <div className="precoItem">R$ 79,80</div>
                <button className="botaoRemover" type="button" aria-label="Remover item">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>

              <div className="carrinhoDeItem itemCarrinho">
                <div className="informacaoItem">
                  <div className="tituloItem">Ração para Calopsita 500g</div>
                  <div className="precoUnitario">R$ 17,90 cada</div>
                </div>
                <div className="controleQuantidade">
                  <button className="botaoQuantidade" type="button" aria-label="Diminuir">
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <span className="valorQuantidade">1</span>
                  <button className="botaoQuantidade" type="button" aria-label="Aumentar">
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
                <div className="precoItem">R$ 17,90</div>
                <button className="botaoRemover" type="button" aria-label="Remover item">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>

            <Link href="/" className="linkContinuar">
              ← Continuar comprando
            </Link>
          </div>
        </section>

        <aside className="barraLateralCheckout">
          <div className="painelCartaoCarrinho">
            <h2 className="secaoTituloCarrinho">Resumo</h2>

            <div className="linhasSumario">
              <div className="linhaSumario">
                <span>Subtotal (3 itens)</span>
                <span>R$ 297,70</span>
              </div>
              <div className="totalLinhasSumario">
                <span>Total</span>
                <span className="precoTotal">R$ 297,70</span>
              </div>
            </div>

            <Link href="/checkout" className="botaoEnviar botaoLink">
              <FontAwesomeIcon icon={faLock} /> Ir para o checkout
            </Link>
          </div>
        </aside>
      </div>
    </main>
  </div>
  );
}