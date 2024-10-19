export default function Logado ({propsLogado}){
    return(
    <button> {(propsLogado) ? 'Sair' : 'Entrar'}</button>
    )
}