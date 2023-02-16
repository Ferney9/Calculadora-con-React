import { useEffect, useState } from "react";

type miObjeto = { nombreOperacion: string };

export const SumForm = (tipoOperacion: miObjeto) => {
  type miFormulario = React.FormEvent<HTMLFormElement>;
  //Aca voy a crear variables

  const [resultado, setResultado] = useState<number>(0);
  const [valNum1, setValNum1] = useState<number>(0);
  const [valNum2, setValNum2] = useState<number>(0);

  const hagaClickBoton = (e: miFormulario) => {
    e.preventDefault();
    calcularOperacion();
  };
  const calcularOperacion = (): void => {
    switch (tipoOperacion.nombreOperacion.toLowerCase()) {
      case "Sumar":
        setResultado(valNum1 + valNum2);
        break;
      case "Multiplicar":
        setResultado(valNum1 * valNum2);
        break;
      case "Dividir":
        setResultado(valNum1 / valNum2);
        break;
      case "Restar":
        setResultado(valNum1 - valNum2);
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
        <form onSubmit={hagaClickBoton}>
          <div className="card text-center mx-auto ">
            <div className="card-header">
              <span className="titulo">
                CALCULADORA
              </span>
            </div>
            <label className="titulo2" htmlFor="num1">
             Valor Número 1
            </label>
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

            <div>Resultado: {resultado}</div>
            <div className="card-footer text-muted">
              <button type="submit" className="btn btn-primary">
                {tipoOperacion.nombreOperacion} números
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
