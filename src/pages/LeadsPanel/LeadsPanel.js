import React, { useState } from "react";
import { Container } from "./styles";
import Board from "../../components/Board";
import { useForm } from "react-hook-form";
import { Button, Modal, FormGroup, Label, Input, Form } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { postLists } from "../../service/api"

function LeadsPanel() {

  const notify = () => toast.dark("Lead adicionado com sucesso!");
  const [checkBoxChecked, setCheckBoxChecked] = useState({
    rpa: false,
    digitalProduct: false,
    analytics: false,
    bpm: false,
  });
  const { register, handleSubmit } = useForm();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onSubmit = (data) => {
    postLists(data);
    setModalIsOpen(false);
    notify();
    return console.log(data);
  };

  function changeCheck(e) {
    if (e.target.checked === true) {
      setCheckBoxChecked(true);
    } else {
      setCheckBoxChecked(false);
    }
  }

  function checkUncheckAll(e) {
    if (e.target.checked === false) {
      setCheckBoxChecked({
        rpa: false,
        digitalProduct: false,
        analytics: false,
        bpm: false,
      });
    } else {
      setCheckBoxChecked({
        rpa: true,
        digitalProduct: true,
        analytics: true,
        bpm: true,
      });
    }
  }

  return (
    <Container>
      <section>
        <h1>Painel de Leads</h1>
        <Button color="secondary" onClick={() => setModalIsOpen(true)}>
          Novo Lead
        </Button>
      </section>
      <Board></Board>

      <Modal
        isOpen={modalIsOpen}
        toggle={() => setModalIsOpen(false)}
        contentClassName="bg-dark"
      >
        <Form onSubmit={handleSubmit(onSubmit)} style={{ padding: "20px" }}>
          <h1>Novo Lead</h1>
          <FormGroup>
            <Label>Nome*</Label>
            <Input
              name="name"
              type="text"
              innerRef={register({ required: true })}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label>Telefone*</Label>
            <Input
              name="phone"
              type="text"
              innerRef={register({ required: true })}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label>Email*</Label>
            <Input
              name="email"
              type="email"
              innerRef={register({ required: true })}
            ></Input>
          </FormGroup>

          <Label>Oportunidades*</Label>

          <FormGroup check>
            <Label check>
              <Input
                name="checkAll"
                type="checkbox"
                onChange={checkUncheckAll}
              />
              Marcar Todas
            </Label>
          </FormGroup>

          <FormGroup check>
            <Label check>
              <Input
                name="RPA"
                type="checkbox"
                onChange={changeCheck}
                checked={checkBoxChecked.rpa}
                innerRef={register({ required: false })}
              />
              RPA
            </Label>
          </FormGroup>

          <FormGroup check>
            <Label check>
              <Input
                name="digitalProduct"
                type="checkbox"
                onChange={changeCheck}
                checked={checkBoxChecked.digitalProduct}
                innerRef={register({ required: false })}
              />
              Produto Digital
            </Label>
          </FormGroup>

          <FormGroup check>
            <Label check>
              <Input
                name="analytics"
                type="checkbox"
                onChange={changeCheck}
                checked={checkBoxChecked.analytics}
                innerRef={register({ required: false })}
              />
              Analytics
            </Label>
          </FormGroup>

          <FormGroup check>
            <Label check>
              <Input
                name="BPM"
                type="checkbox"
                onChange={changeCheck}
                checked={checkBoxChecked.bpm}
                innerRef={register({ required: false })}
              />
              BPM
            </Label>
          </FormGroup>

          <Button
            type="submit"
            color="secondary"
            style={{ margin: "20px 0px 0px 0px" }}
          >
            Registrar
          </Button>
        </Form>
      </Modal>

      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
    </Container>
  );
}

export default LeadsPanel;
