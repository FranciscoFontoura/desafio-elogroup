import React, { useEffect, useState } from "react";
import List from "../List";
import produce from "immer";
import BoardContext from "./context";
import { Container } from "./styles";
import { getLists } from "../../service/api";
import { Spinner } from "reactstrap";

function Board() {
  const [isLoading, setLoading] = useState(true);
  const [lists, setLists] = useState();

  useEffect(() => {
    getLists().then((res) => {
      console.log(res.data);
      setLists(res.data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Spinner style={{ margin: "auto" }} color="light" />;
  }

  function move(fromList, toList, from, to) {
    if (fromList === 0 && toList === 2) {
      return;
    }
    if (fromList === 1 && toList === 0) {
      return;
    }
    if (fromList === 2 && toList === 1) {
      return;
    }
    if (fromList === 2 && toList === 0) {
      return;
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
