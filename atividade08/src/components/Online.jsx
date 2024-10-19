export default function Online ({propsOnline}){
    if (propsOnline==true){
        return <h1>Usuário Online</h1>
    }

    else if (propsOnline==false){
        return <h1>Usuário offline</h1>
    }

}