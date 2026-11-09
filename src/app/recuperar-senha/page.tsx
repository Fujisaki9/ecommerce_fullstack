import Link from 'next/link';

import './recuperar-senha.css';

export default function RecuperarSenha() {
    return (
        <div>
            <main className="paginaRecuperarSenha">
                <form action="">
                    <h1 className="tituloRecuperarSenha">Recuperar senha</h1>
                    <div className="formularioRecuperarSenha">
                        <label htmlFor="email">Digite seu email</label>
                        <input type="text" id="email" />
                    </div>
                    <div className="botoesRecuperarSenha">
                        <Link className="botaoEnviar" href="#">Confirmar</Link>
                        <Link className="botaoSecundario" href="/login">Voltar</Link>
                    </div>
                </form>
            </main>
        </div>
    );
}