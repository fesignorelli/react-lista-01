export default function Estudante({propsEstudante}){
if (propsEstudante==true){
    return <h1>Você é um Estudante</h1>
}

else if (propsEstudante==false){
    return <h1>Você não é um estudante</h1>
}
}
