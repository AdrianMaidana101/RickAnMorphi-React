import React, { useState, useEffect } from "react";
import { useUserForm } from './../../hooks/Custom.hooks';

export const UserForm = () => {
  const { form, setForm, handleChanges } = useUserForm();

  const [areEquals, setareEquals] = useState(true); // se va a encargar de ver si las contraseñas son iguales

  const [passwordConfirmation, setpasswordConfirmation] = useState(); //se encarga de atrapar la unica clave que vamos a mandar

  const [pass, setPass] = useState(true);

  const validPass = () => { //comprueba que la password no este indefinida
    const { password } = form;  
    if (password !== undefined) {
    setPass(false)
  } 
  return pass
  }

  const handlePasswordConfirmation = (e) => {
    setpasswordConfirmation(e.target.value);

  }

  useEffect(() => {
    const {password} = form;
    setareEquals( password === passwordConfirmation);
  }, [passwordConfirmation])
  
  

  const handleSubmit = (e) => {
    // se va a encargar de atrapar el envio del formulario
    e.preventDefault();
    userService
  };

  return (
    <div className="w-25 mx-auto mt-5">
      <h4 className="mb-3">Humano Registrate!</h4>
      <form className="needs-validation" noValidate>
        <div className="row g-3">
          <div className="col-12">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="you@example.com"
              name="email"
              onChange={handleChanges}
            />
            <div className="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>

          <div className="col-12">
            <label htmlFor="address" className="form-label">
              Clave
            </label>
            <input
              type="password"
              className="form-control"
              id="address"
              placeholder="Clave"
              name="password" //con esto se va a ir generando el json que mandamos a la api porq asi lo armamos en el hook
              onChange={handleChanges}
              required
            />
            <div className="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>

          <div className="col-12">
            <label htmlFor="password2" className="form-label">
              Repetir Clave
            </label>
            <input
              // no le ponemos name porque no nos interesa mandarla a la api, la contraseña se manda del primer input
              type="password"
              className="form-control"
              id="password2"
              placeholder="Repetir clave"
              onChange={handlePasswordConfirmation}
            />
            { !areEquals && (
              <div className="form-text list-group-item-danger">
                Las claves no son iguales
              </div>
            )}
          </div>
          <button
            disabled={!areEquals || pass==(false)}
            className="w-100 btn btn-primary btn-lg"
            type="submit"
            onClick={handleSubmit}
          >
            Registrarme
          </button>
        </div>
      </form>
    </div>
  );
};
