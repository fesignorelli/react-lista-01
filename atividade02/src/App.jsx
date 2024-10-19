import Autenticacao from './components/PropSimples'
import './App.css'

function App() {
  const usuario_autenticado = true;

  return (
    <div>
      <Autenticacao autenticado = {usuario_autenticado} />
    </div>
  )
}

export default App