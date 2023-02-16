import { type } from "@testing-library/user-event/dist/type";
import { InterOperacionesNombre } from "../interfaces/InterOperacionesNombre";
import { useEffect, useState } from "react";


export const Operaciones = (tipo: InterOperacionesNombre, tipo2:InterOperacionesNombre) => {
  type formulario = React.FormEvent<HTMLFormElement>;

  //CONSTANTES
  const [resultado, setResultado] = useState<number>(0);
  const [valNum1, setValNum1] = useState<number>(0);
  const [valNum2, setValNum2] = useState<number>(0);
  const [mensaje, setMensaje] = useState<string>("");

  const calcularOperacion = (): void => {
    switch (tipo.nombre.toLowerCase()) {
      case "sumar":
        switch (tipo.tipoNum.toLowerCase()){
          case "par":
            if(valNum1%2 === 0 && valNum2%2 === 0){
              setMensaje("");
              setResultado(valNum1 + valNum2);
            }else{
              setMensaje("   Los números no son pares");
              setResultado(0);
            }
            break;
          case "impar":
            if(valNum1%2 !== 0 && valNum2%2 !== 0){
              setMensaje("");
              setResultado(valNum1 + valNum2);
            }else{
              setMensaje("   Los números no son impares");
              setResultado(0);
            }
            break;
        }
        break;
      case "multiplicar":
        switch (tipo.tipoNum.toLowerCase()){
          case "par":
            if(valNum1%2 === 0 && valNum2%2 === 0){
              setMensaje("");
              setResultado(valNum1 * valNum2);
            }else{
              setMensaje("  Los números no son pares");
              setResultado(0);
            }
            break;
          case "impar":
            if(valNum1%2 !== 0 && valNum2%2 !== 0){
              setMensaje("");
              setResultado(valNum1 * valNum2);
            }else{
              setMensaje("   Los números no son impares");
              setResultado(0);
            }
            break;
        }
        break;
      case "dividir":
        switch (tipo.tipoNum.toLowerCase()){
          case "par":
            if(valNum1%2 === 0 && valNum2%2 === 0){
              setMensaje("");
              setResultado(valNum1 / valNum2);
            }else{
              setMensaje("   Los números no son pares");
              setResultado(0);
            }
            break;
          case "impar":
            if(valNum1%2 !== 0 && valNum2%2 !== 0){
              setMensaje("");
              setResultado(valNum1 / valNum2);
            }else{
              setMensaje("  Los números no son impares");
              setResultado(0);
            }
            break;
        }
        break;
      case "restar":
        switch (tipo.tipoNum.toLowerCase()){
          case "par":
            if(valNum1%2 === 0 && valNum2%2 === 0){
              setMensaje("");
              setResultado(valNum1 - valNum2);
            }else{
              setMensaje("   Los números no son pares");
              setResultado(0);
            }
            break;
          case "impar":
            if(valNum1%2 !== 0 && valNum2%2 !== 0){
              setMensaje("");
              setResultado(valNum1 - valNum2);
            }else{
              setMensaje("   Los números no son impares");
              setResultado(0);
            }
            break;
        }
        break;
      default:
        setResultado(valNum1 + valNum2);
        break;
    }
  };


  useEffect(() => {
    calcularOperacion();
  });

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="text-center col-2 col-md-5 mt-5">
        <form onSubmit={calcularOperacion}>
          <div className="card text-center mx-auto ">
            <div className="card-header">
              <span className="titulo">
                {" "}
                <b>CALCULADORA</b>{" "}
              </span>
            </div>

            <label htmlFor="num1">Valor Número 1</label>
            <input
              className="form-control"
              id="num1"
              name="num1"
              placeholder="Numero"
              onChange={(evento) => {
                const dato = Number(evento.target.value);
                setValNum1(dato);
              }}
            />

            <div className="form-group">
              <label htmlFor="num2">Valor Número 2</label>
              <input
                className="form-control"
                id="num2"
                name="num2"
                placeholder="Numero"
                onChange={(evento) => {
                  const dato = Number(evento.target.value);
                  setValNum2(dato);
                }}
              />
            </div>

            <div>Resultado: {resultado + mensaje}</div>
            <div className="card-footer text-muted">
              <button type="submit" className="btn btn-primary">
                {tipo.nombre} {tipo.tipoNum}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );     
              }
