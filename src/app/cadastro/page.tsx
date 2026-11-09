import Link from 'next/link';

import "./cadastro.css";

export default function CadastrarUsuario() {
  return (
    <main>
      <form className="paginaCadastro" action="">
        <h1 className="tituloCadastro">Cadastrar Usuário</h1>

        <div className="formularioCadastro">
          <label htmlFor="nomeCompleto">Nome completo</label>
          <input type="text" id="nomeCompleto" name="nomeCompleto" autoComplete="name" required />
        </div>

        <div className="formularioCadastro">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" autoComplete="email" required />
        </div>

        <div className="formularioCadastro">
          <label htmlFor="senha">Senha</label>
          <input type="password" id="senha" name="senha" autoComplete="new-password" required />
        </div>

        <div className="botoesCadastro">
          <button className="botaoEnviar" type="button">Cadastrar</button>
          <Link href="/login" className="botaoSecundario">Cancelar</Link>
        </div>
      </form>
    </main>
  );
}