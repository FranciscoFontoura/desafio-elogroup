import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "./styles";
import Board from "../../components/Board";
import Modal from "react-modal";
import { useForm } from "react-hook-form";
import "./ModalStyles.css";

function LeadsPanel() {
  const [checkBoxChecked, setCheckBoxChecked] = useState({
    rpa: false,
    digitalProduct: false,
    analytics: false,
    bpm: false,
  });
  const { register, handleSubmit, watch, errors } = useForm();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const onSubmit = (data) => {
    if (data.bpm === false) {
      return console.log("teste");
    }
    setModalIsOpen(false);
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

  Modal.setAppElement("#root");

  return (
    <Container>
      <div>
        <h1>Painel de Leads</h1>
        <button onClick={() => setModalIsOpen(true)}>novo</button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          content: {
            backgroundColor: "#404040",
            position: "fixed",
            top: "20%",
            left: "20%",
            bottom: "20%",
            right: "20%",
          },
        }}
      >
        <h1>Novo Lead</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="right-container">
            <p>Nome*</p>
            <input
              name="name"
              type="text"
              ref={register({ required: true })}
            ></input>

            <p>Telefone*</p>
            <input
              name="phone"
              type="text"
              ref={register({ required: true })}
            ></input>

            <p>Email*</p>
            <input
              name="email"
              type="email"
              ref={register({ required: true })}
            ></input>
          </div>
          <div className="left-container">
            <h2>Oportunidades*</h2>
            <ul>
              <li>
                <input
                  name="checkAll"
                  type="checkbox"
                  onChange={checkUncheckAll}
                ></input>
                <label>Marcar Todas</label>
              </li>
            </ul>
            <ul>
              <li>
                <input
                  name="RPA"
                  type="checkbox"
                  onChange={changeCheck}
                  checked={checkBoxChecked.rpa}
                  ref={register({ required: false })}
                ></input>
                <label>RPA</label>
              </li>
            </ul>

            <ul>
              <li>
                <input
                  name="digitalProduct"
                  type="checkbox"
                  onChange={changeCheck}
                  checked={checkBoxChecked.digitalProduct}
                  ref={register({ required: false })}
                ></input>
                <label>Produto Digital</label>
              </li>
            </ul>
            <ul>
              <li>
                <input
                  name="analytics"
                  type="checkbox"
                  onChange={changeCheck}
                  checked={checkBoxChecked.analytics}
                  ref={register({ required: false })}
                ></input>
                <label>Analytics</label>
              </li>
            </ul>
            <ul>
              <li>
                <input
                  name="BPM"
                  type="checkbox"
                  onChange={changeCheck}
                  checked={checkBoxChecked.bpm}
                  ref={register({ required: false })}
                ></input>
                <label>BPM</label>
              </li>
            </ul>

            <input type="submit" value="input"></input>
          </div>
        </form>
      </Modal>
      <Board></Board>
    </Container>
  );
}

export default LeadsPanel;
