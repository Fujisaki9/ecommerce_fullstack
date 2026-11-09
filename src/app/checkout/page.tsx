import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-regular-svg-icons';
import { faLock, faShield } from '@fortawesome/free-solid-svg-icons';

import './checkout.css';

import Link from 'next/link';

export default function Checkout() {
    return (
    <div>     
        <main className="paginaCheckout">

            <div className="bannerStripe">
                <div>
                    <strong>Modo de Testes Ativo (Integração Stripe Visual)</strong><br />
                    Utilize o cartão de testes <code>4242 4242 4242 4242</code> para simulações no layout.
                </div>
            </div>

            <div className="checkoutGrid">
                <section>
                    <div className="painelCartaoCheckout">
                        <h2 className="secaoTituloCheckout">
                            <span className="numeroPasso">1</span> Informações Pessoais e Entrega
                        </h2>

                        <div className="formularioCheckout">
                            <label htmlFor="nomeCompleto">Nome Completo</label>
                            <input type="text" id="nomeCompleto" defaultValue="João da Silva"/>
                        </div>

                        <div className="formularioCheckout">
                            <label htmlFor="email">E-mail para Confirmação</label>
                            <input type="email" id="email" defaultValue="joao.silva@exemplo.com" />
                        </div>
                    </div>    

                    <div className="painelCartaoCheckout">
                        <h2 className="secaoTituloCheckout">
                            <span className="numeroPasso">2</span> Pagamento
                        </h2>

                        <div className="opcoesPagamento">
                            <div className="abaPagamento ativo">
                                <FontAwesomeIcon className="iconesAba" icon={faCreditCard} />Cartão
                            </div>
                        </div>

                        <div className="formularioCheckout">
                            <label>Dados do Cartão (Stripe Card Element)</label>
                            <div className="elementoCartaoStripe">
                                <div className="entradaLinhaStripe">
                                    <input type="text" defaultValue="4242 4242 4242 4242" style={{ flex: 1 }} />
                                </div>
                                <div className="entradaLinhaStripe segundaLinha">
                                    <input type="text" defaultValue="12 / 28" style={{ flex: 1 }} />
                                    <input type="text" defaultValue="123" style={{ flex: 1, textAlign: 'right' }} />
                                </div>
                            </div>
                        </div>

                        <div className="formularioCheckout">
                            <label htmlFor="parcelas">Parcelamento</label>
                            <select id="parcelas" defaultValue="1">
                                <option value="1">1x de R$ 354,80 sem juros</option>
                                <option value="2">2x de R$ 236,60 sem juros</option>
                                <option value="3">3x de R$ 118,30 sem juros</option>
                            </select>
                        </div>

                        <Link className="botaoEnviar" href="/pagamento-finalizado"><FontAwesomeIcon icon={faLock} /> Finalizar Pedido R$ 354,80</Link>
                     
                        <div className="mensagemSeguranca">
                        <FontAwesomeIcon icon={faShield} /> Processamento seguro via criptografia 256-bit Stripe.
                        </div>
                    </div>
                </section>

                <aside>
                    <div className="painelCartaoCheckout">
                        <h2 className="secaoTituloCheckout barraLateral">
                            <span>Resumo do Pedido</span>
                            <span className="textoPedidoCheckout">2 Itens</span>
                        </h2>

                        <div className="carrinhoDeItens">
                            <div className="carrinhoDeItemCheckout">
                                <div className="informacaoItem">
                                    <div className="tituloItem">Ração Premium Gatos Castrados 10kg</div>
                                    <div className="quantidadeItem">Qtd: 1</div>
                                </div>
                                <div className="precoItem">R$ 164,90</div>
                            </div>

                            <div className="carrinhoDeItemCheckout">
                                <div className="informacaoItem">
                                    <div className="tituloItem">Ração Premium Cães Adultos 15kg</div>
                                    <div className="quantidadeItem">Qtd: 1 | Pulseira: Silicone</div>
                                </div>
                                <div className="precoItem">R$ 189,90</div>
                            </div>
                        </div>

                        <div className="linhasSumario">
                            <div className="linhaSumario">
                                <span>Subtotal</span>
                                <span>R$ 0,00</span>
                            </div> 
                            
                            <div className="totalLinhasSumario">
                                <span>Total:</span>
                                <span className="precoTotal">R$ 354,80</span>
                            </div>

                        </div>
                    </div>
                </aside>    

            </div>
        </main>
    </div>
    );
}