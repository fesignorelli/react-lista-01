import Autenticacao from './components/Autenticacao'
import './App.css'

function App() {
  const usuario_autenticado = true;

  return (
    <div>
      <Autenticacao Autenticacao = {usuario_autenticado} />
    </div>
  )
}

export default App
