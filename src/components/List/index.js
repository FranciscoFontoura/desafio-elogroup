import React from "react";
import Card from "../Card";
import { Container } from "./styles";


function List({ data, index: listIndex }) {
  return (
    <Container>
      <header>
        <h2>{data.title}</h2>
      </header>

      <ul>
        {data.cards.map((card, index) => (
          <Card key={card.id} data={card} index={index} listIndex={listIndex} />
        ))}
      </ul>
    </Container>
  );
}

export default List;
