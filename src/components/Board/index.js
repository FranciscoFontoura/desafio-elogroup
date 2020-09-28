import React, { useState } from "react";
import List from "../List";
import produce from "immer";
import BoardContext from "./context";
import { Container } from "./styles";
import { loadLists } from "../../service/api";

const data = loadLists();

function Board() {
  const [lists, setLists] = useState(data);
  
  
  function move(fromList, toList, from, to) {
    if (fromList === 0 && toList === 2) {
      return;
    }
    if (fromList === 1 && toList === 0) {
      return
    }
    if (fromList === 2 && toList === 1) {
      return
    }
    if (fromList === 2 && toList === 0) {
      return
    }
    setLists(
      produce(lists, (draft) => {
        const dragged = draft[fromList].cards[from];
        
        draft[fromList].cards.splice(from, 1);
        draft[toList].cards.splice(to, 0, dragged);
      })
      );
    }
    
    return (
      <BoardContext.Provider value={{ lists, move }}>
      <Container>
        {lists.map((list, index) => (
          <List key={list.title} index={index} data={list} />
        ))}
      </Container>
    </BoardContext.Provider>
  );
}

export default Board;
