import './pagamento-finalizado.css';

export default function PagamentoFinalizado() {
    return (
        <div>
            <main>
            <div className="paginaPgtoFinalizado">
                <div className="painelCartaoPgto painelAprovado">
                <div className="iconeAprovado">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5 5L20 6.5"/></svg>
                </div>
                <h1 className="tituloAprovado">Pagamento aprovado!</h1>
                <p className="textoAprovado">Obrigado, <strong>João</strong>! Enviamos a confirmação para <strong>joao.silva@exemplo.com</strong>.</p>
            
                <div className="resumoAprovado">
                    <div className="linhaAprovado"><span>Pedido</span><strong>#10535</strong></div>
                    <div className="linhaAprovado"><span>Método de pagamento</span><strong>Cartão Visa final 4242</strong></div>
                    <div className="linhaAprovado"><span>Total</span><strong>R$ 354,80</strong></div>
                </div>
            
                <div className="bannerStripe avisoDemo">Demonstração: nenhum pagamento real foi processado.</div>
            
                <a href="/produto" className="botaoVoltar">Voltar para a loja</a>
                </div>
            </div>
            </main>
        </div>
    );
}