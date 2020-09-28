import React from "react";
import { Container } from "./styles";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

function Login() {
  const { register, handleSubmit, watch, errors } = useForm();
  const history = useHistory();
  const onSubmit = (data) => {
    console.log(data);
    history.push("/leadspanel");
  };

  return (
    <Container>
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <section>
          <div>
            <h3>Usuário*</h3>
            <input
              name="username"
              type="text"
              ref={register({ required: true })}
            ></input>
            {errors.username && <p>Favor inserir o usuário</p>}
          </div>

          <h3>Password*</h3>
          <input
            name="password"
            type="password"
            ref={register({
              required: true,
              pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            })}
          ></input>
          {errors.password && (
            <p>
              Favor inserir um password que contenha no minimo 8 caracteres,
              dentre eles um caracter especial e um numero
            </p>
          )}

          <h3>Confirmação Password*</h3>
          <input
            name="passwordConfirmation"
            type="password"
            ref={register({
              required: true,
              validate: (value) => {
                return value === watch("password");
              },
            })}
          ></input>
          {errors.passwordConfirmation && <p>Passwords diferentes!</p>}
        </section>

        <div className="submit-container">
          <input type="submit" value="Registrar"></input>
        </div>
      </form>
    </Container>
  );
}

export default Login;
