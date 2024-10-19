export default function Idade({propsIdade}){
    if (propsIdade>=18){
        return <h1>Maior de Idade</h1>
    }

    else if (propsIdade<18){
        return <h1>Menor de Idade</h1>
    }
}