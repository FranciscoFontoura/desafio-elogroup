import React, { useRef, useContext } from "react";
import { useDrag, useDrop } from "react-dnd";
import { Container } from "./styles";
import BoardContext from '../Board/context';

function Card({ data, index, listIndex }) {
  const ref = useRef();
  const { move } = useContext(BoardContext);

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: "Card", index, listIndex },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, dropRef] = useDrop({
    accept: "Card",
    hover(item, monitor) {
      const draggedIndex = item.index;
      const targetIndex = index;
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      if (draggedListIndex === targetListIndex) {
        return;
      }

      move(draggedListIndex,targetListIndex,draggedIndex,targetIndex);
      item.index = targetIndex;
      item.listIndex = targetListIndex;
    },
  });

  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDragging={isDragging}>
      <p>{data.content}</p>
    </Container>
  );
}

export default Card;
