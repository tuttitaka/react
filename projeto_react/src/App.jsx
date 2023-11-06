import MeuComponente from "./components/MeuComponetes"

function App() {

  return (
   <div>

     <h1>Ola mundo, react</h1>
     <MeuComponente/>
     <MeuBotao conteudo='me clique'/>

     <MeuBotao conteudo='depois '/>

     <MeuBotao conteudo='e por fim aqui'/>

   </div>
  )
}

function MeuBotao(props){

  console.log()
  return(
    <button>{props.conteudo}</button>
  )
}



export default App
