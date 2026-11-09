import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faMinus,
  faPlus,
  faCartShopping,
  faTruck,
  faShield,
  faRotateLeft,
} from '@fortawesome/free-solid-svg-icons';
import '../../checkout/checkout.css';
import '../../carrinho/carrinho.css';
import './produto.css';

export default function PaginaProduto() {
  return (
    <main className="blocoConteudoPrincipalCheckout">
      <div className="produtoGrid">
        <section className="produtoGaleria">
          <div className="produtoImagemPrincipal">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80"
              alt="Fone Bluetooth Noise Cancelling"
            />
          </div>

          <div className="produtoMiniaturas">
            <div className="produtoMiniatura miniaturaAtiva">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=120&q=80"
                alt="Fone, vista 1"
              />
            </div>
            <div className="produtoMiniatura">
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=120&q=80"
                alt="Fone, vista 2"
              />
            </div>
            <div className="produtoMiniatura">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=120&q=80"
                alt="Fone, vista 3"
              />
            </div>
          </div>
        </section>

        <section className="produtoInfo">
          <h1 className="produtoNome">Fone Bluetooth Noise Cancelling</h1>

          <div className="produtoAvaliacao">
            <span className="estrelas">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </span>
            <span className="textoPedido">4,8 (127 avaliações)</span>
          </div>

          <div className="produtoPreco">
            <span className="precoAntigo">R$ 599,00</span>
            <span className="precoAtual">R$ 499,00</span>
            <span className="textoPedido">ou 10x de R$ 49,90 sem juros</span>
            <span className="textoVerde">No Pix: R$ 474,05 (-5%)</span>
          </div>

          <div className="produtoOpcao">
            <label>Cor</label>
            <div className="produtoVariacoes">
              <button className="variacao variacaoAtiva" type="button">Preto</button>
              <button className="variacao" type="button">Branco</button>
              <button className="variacao" type="button">Azul</button>
            </div>
          </div>

          <div className="produtoOpcao">
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
          </div>

          <div className="produtoBotoes">
            <button className="botaoEnviar" type="button">
              <FontAwesomeIcon icon={faCartShopping} /> Adicionar ao carrinho
            </button>
            <button className="botaoContorno" type="button">Comprar agora</button>
          </div>

          <div className="produtoFrete">
            <label htmlFor="cepFrete">Calcular frete</label>
            <div className="caixaDesconto">
              <input type="text" id="cepFrete" placeholder="00000-000" />
              <button className="botaoCupom" type="button">Calcular</button>
            </div>
          </div>

          <ul className="produtoSelos">
            <li><FontAwesomeIcon icon={faTruck} /> Frete grátis acima de R$ 500,00</li>
            <li><FontAwesomeIcon icon={faRotateLeft} /> Troca em até 7 dias</li>
            <li><FontAwesomeIcon icon={faShield} /> Compra 100% segura</li>
          </ul>
        </section>
      </div>

      <div className="painelCartao produtoDescricao">
        <h2 className="secaoTitulo">Descrição do produto</h2>
        <p>
          Fone Bluetooth com cancelamento ativo de ruído, até 30 horas de bateria
          e microfone com redução de eco para chamadas.
        </p>
        <ul className="produtoEspecificacoes">
          <li><strong>Conexão:</strong> Bluetooth 5.3</li>
          <li><strong>Bateria:</strong> até 30 horas</li>
          <li><strong>Carregamento:</strong> USB-C</li>
          <li><strong>Peso:</strong> 250 g</li>
        </ul>
      </div>
    </main>
  );
}