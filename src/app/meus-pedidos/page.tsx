import Link from 'next/link';

import './meus-pedidos.css';

export default function MeusPedidos() {
    return (
    <div>
        <main className="paginaPedidos">
            <div className="painelCartaoPedidos">
                <h2 className="secaoTituloPedidos barraLateral">
                    <span>Meus Pedidos</span>
                    <span className="textoPedido">2 pedidos</span>
                </h2>

                <div className="listaPedidos">
                    <article className="cartaoPedido">
                        <header className="pedidoCabecalho">
                            <div>
                                <div className="pedidoNumero">Pedido #10517</div>
                                <div className="pedidoData">28 de outubro de 2026</div>
                            </div>
                            <span className="statusPedido statusEnviado">Pago</span>
                        </header>

                        <div className="carrinhoDeItemPedido">
                            <div className="informacaoItem">
                                <div className="tituloItem">Ração Premium Cães Adultos 15kg</div>
                                <div className="quantidadeItem">Qtd: 1</div>
                            </div>
                            <div className="precoItem">R$ 189,90</div>
                        </div>

                        <footer className="pedidoRodape">
                            <div>
                                <div className="pedidoPagamento">Cartão Visa final 4242</div>
                                <div className="pedidoTotal">Total: R$ 299,00</div>
                            </div>
                            <div className="pedidoAcoes">
                                <Link href="./carrinho">
                                    <button className="botaoSecundario" type="button">Ver detalhes</button>
                                </Link>
                            </div>
                        </footer>
                    </article>

                    <article className="cartaoPedido">
                        <header className="pedidoCabecalho">
                            <div>
                                <div className="pedidoNumero">Pedido #10534</div>
                                <div className="pedidoData">2 de novembro de 2026</div>
                            </div>
                            <span className="statusPedido statusPendente">Aguardando pagamento</span>
                        </header>

                        <div className="carrinhoDeItemPedido">
                            <div className="informacaoItem">
                                <div className="tituloItem">Ração Premium Gatos Castrados 10kg</div>
                                <div className="quantidadeItem">Qtd: 3</div>
                            </div>
                            <div className="precoItem">R$ 494,70</div>
                        </div>

                        <footer className="pedidoRodape">
                            <div>
                                <div className="pedidoPagamento">Efetue o pagamento</div>
                                <div className="pedidoTotal">Total: R$ 494,70</div>
                            </div>
                            <div className="pedidoAcoes">
                                <Link href="./carrinho">
                                    <button className="botaoSecundario" type="button">Ver detalhes</button>
                                </Link>
                                <Link href="./checkout">
                                    <button className="botaoPrimario" type="button">Pagar agora</button>
                                </Link>
                            </div>
                        </footer>
                    </article>
                </div>
            </div>
        </main>
    </div>
    );
}