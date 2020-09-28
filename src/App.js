import React from "react";
import Routes from "./routes/Routes";
import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Header/>
      <GlobalStyle/>
      <Routes />
    </DndProvider>
  );
}

export default App;
