import { useState } from "react";
import { InterOperacionesMetodo } from "../interfaces/InterOperacionesMetodo";
import { SumForm } from "./SumForm";
import { InterTipoMetodo } from "../interfaces/InterTipoMetodo";
import logo from "../assets/calculo.png";

export const Cabecera = (
  miObj: InterOperacionesMetodo,
  miObjT: InterTipoMetodo
) => {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-md navbar-dark bg-secondary space-around">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            <img src={logo} style={{ width: "32px" }} alt="El logo si sale" />{" "}
            React Calculadora
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle  text-bg-success"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Operaciones matemàticas
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="/#"
                      onClick={() => {
                        miObj.seleccionar("Sumar");
                      }}
                    >
                      Sumar
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/#"
                      onClick={() => {
                        miObj.seleccionar("Restar");
                      }}
                    >
                      Restar
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/#"
                      onClick={() => {
                        miObj.seleccionar("Multiplicar");
                      }}
                    >
                      Multiplicar
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/#"
                      onClick={() => {
                        miObj.seleccionar("Dividir");
                      }}
                    >
                      Dividir
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown  ">
                <a
                  className="nav-link dropdown-toggle btn-group text-bg-danger"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tipo de nùmeros
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      className="dropdown-item"
                      href="/#"
                      onClick={() => {
                        miObj.seleccionartipo("Par");
                      }}
                    >
                      Par
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/#"
                      onClick={() => {
                        miObj.seleccionartipo("Impar");
                      }}
                    >
                      Impar
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-info " type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};
