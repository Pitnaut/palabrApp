import "../styles/Keyboard.scss";
import { LETRAS } from "../data/palabrasYLetras";
import Key from "./Key";

export default function KeyBoard({
  letrasPresentes,
  letrasCorrectas,
  letrasAusentes,
  escribeLetra,
  darAlEnter,
  borrar,
}) {
  return (
    <div className="keyboard">
      <div className="teclaFila">
        {LETRAS.slice(0, 10).map((letra) => {
          return (
            <Key 
              key={letra} 
              letra={letra} 
              escribeLetra={escribeLetra} 
              estaAusente={letrasAusentes.includes(letra)} 
              estaPresente={letrasPresentes.includes(letra)}
              estaCorrecta={letrasCorrectas.includes(letra)}
            />
          ); 
        })}
      </div>
      <div className="teclaFila">
        {LETRAS.slice(10, 20).map((letra) => {
          return (
            <Key 
              key={letra} 
              letra={letra} 
              escribeLetra={escribeLetra} 
              estaAusente={letrasAusentes.includes(letra)} 
              estaPresente={letrasPresentes.includes(letra)}
              estaCorrecta={letrasCorrectas.includes(letra)}
            />
          ); 
        })}
      </div>
      <div className="teclaFila">
        <div className="key enter" onClick={() => darAlEnter()}>ENTER</div>
        {LETRAS.slice(20, 27).map((letra) => {
          return (
            <Key 
              key={letra} 
              letra={letra} 
              escribeLetra={escribeLetra} 
              estaAusente={letrasAusentes.includes(letra)} 
              estaPresente={letrasPresentes.includes(letra)}
              estaCorrecta={letrasCorrectas.includes(letra)}
            />
          ); 
        })}
        <div className="key borrar" onClick={() => borrar()}>
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 0 24 24"
            width="20"
          >
          <path
            fill="#f8f8f8"
            d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z"
          ></path>
          </svg>
        </div>
      </div>
    </div>
  )
}
