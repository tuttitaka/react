import { useState } from 'react'

export default function Contador () {
    const [ contador, setContador] = useState(0)

    function aumentar () {
        setContador (contador + 1)
    }

    function diminuir () {
        setContador (contador - 1)
    }

    if(contador > 5){
      return(
          <div>
              <h1>Contador valor muito alto </h1>
              <button onClick={aumentar}>aumentar</button>
              <button onClick={diminuir}>diminuir</button>
          </div>
      )
    }

    return(
        <div>
            <h1>meu contador:{contador}</h1>
            <button onClick={aumentar}>aumentar</button>
            <button onClick={diminuir}>diminuir</button>
        </div>
    )
}
    
