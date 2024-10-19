export default function Nivel({ propNivel }) {
    return (
        <h1>{(propNivel == 'Iniciante') ? 'Bem vindo Iniciante' : (propNivel == 'Intermediario') ? 'Você está progredindo' : (propNivel == 'Avançado') ? 'Parabéns especialista': ''}</h1>
    )

}