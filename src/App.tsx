import { useState } from 'react'
import Logo from "../src/assets/logo.png"
import './App.css'


interface CalcularProps {
  gasolina: number;
  alcool: number;
}

function App() {
  const [resultado, setResultado] = useState<string>("")
  const [combustivel, setCombustivel] = useState<CalcularProps>({gasolina :0, alcool :0})

  function clear(){
    setCombustivel({gasolina:0,
      alcool:0
    })
  }

  function calcular(gasolina: number, alcool: number): string {
    if (gasolina <= 0 || alcool <= 0) {
        return "Valores inválidos! Certifique-se de inserir números maiores que zero.";
    } else{
        
      return gasolina > alcool * 1.3 ? "Compensa usar álcool" : "Compensa usar gasolina";
    }
}

function fomataMoeda(moeda:number){
  return(
    moeda.toLocaleString("pt-br" , {
      style:"currency",
      currency:"BRL"
    })
  )
}

  function handleCalcualar() {
    
    const {gasolina, alcool} = combustivel

        if (gasolina > 0 && alcool > 0) {          
          setResultado(calcular(gasolina,alcool))
        } else {
          setResultado("Preencha os campos ")
        }
  }


  return (
    <>
        <div className='content'>
          <div className='img'>
            <img src={Logo} alt="" />
            <span>Qual melhor opção?</span>
          </div>
          <div className='container'>
            <label htmlFor="">Alcool (preço por litro)</label>
             <input type="number"
              placeholder='Digite o preço do álcool'
              onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setCombustivel({...combustivel, alcool:Number(e.target.value)})}
              /> 
               

            <label htmlFor="">Gasolina (preço por litro)</label> 
            <input type="number"
             placeholder='Digite o preço da gasolina'
             onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setCombustivel({...combustivel, gasolina: Number(e.target.value)})}
              />
             

              

          <button className='btn' onClick={handleCalcualar}>Calcular</button>
          </div>

{resultado && 
        <div className='showResult'>
            <h2> {resultado}</h2>
            <p>Alcool: {fomataMoeda(combustivel.alcool)}</p>
            <p>Gasolina: {fomataMoeda(combustivel.gasolina)}</p>
        </div>
}
        </div>
    </>
  )
}

export default App
