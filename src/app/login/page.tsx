import Link from 'next/link';

import './login.css';

export default function Login() {
    return (
        <div>
            <main className="paginaLogin">
                <div className="blocoLogin">
                    <div className="conteudoLogin"> 
                        <h1 className="tituloLogin">Faça seu Login</h1>

                        <form className="formLogin">
                            <div className="campo">
                                <label htmlFor="email">Email</label>
                                <input id="email" type="email" autoComplete="email" />
                            </div>

                            <div className="campo">
                                <label htmlFor="senha">Senha</label>
                                <input id="senha" type="password" autoComplete="current-password" />
                            </div>

                            <button className="botaoAcessoLogin" type="submit">Acessar</button>

                            <div className="linksLogin">
                                <Link href="/recuperar-senha">Esqueceu a senha</Link>
                                <Link href="/cadastro">Criar conta</Link>
                            </div>
                    </form>
                    </div>

                </div>
            </main>
        </div>
    )
}