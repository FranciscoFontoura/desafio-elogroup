import React from "react";
import { Container } from "./styles";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { UncontrolledAlert, Input, Button } from "reactstrap";

function Login() {
  const { register, handleSubmit, watch, errors } = useForm();
  const history = useHistory();
  const onSubmit = (data) => {
    console.log(data);
    history.push("/leadspanel");
  };

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section>

            <Input
              placeholder="Usuário"
              name="username"
              type="text"
              innerRef={register({ required: true })}
            />
            {errors.username && (
              <UncontrolledAlert color="primary">
                Insira um usuário!
              </UncontrolledAlert>
            )}

          <Input
            placeholder="Senha"
            name="password"
            type="password"
            innerRef={register({
              required: true,
              pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            })}
          />
          {errors.password && (
            <UncontrolledAlert color="primary">
              Favor inserir um password válido!
            </UncontrolledAlert>
          )}

          <Input
            placeholder="Confirmar Senha"
            name="passwordConfirmation"
            type="password"
            innerRef={register({
              required: true,
              validate: (value) => {
                return value === watch("password");
              },
            })}
          />
          {errors.passwordConfirmation && (
            <UncontrolledAlert color="primary">
              Passwords diferentes!
            </UncontrolledAlert>
          )}
          
        </section>

        <Button type="submit" value="Registrar" color="secondary">
          Registrar
        </Button>
      </form>
    </Container>
  );
}

export default Login;
