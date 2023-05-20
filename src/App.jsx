import React, {useState} from "react";
import Header from "./components/header/Header";
import Carrosel from "../src/components/carrosel/Carrosel";
import Navbar from "./components/genero_filmes/Navbar";

function App(){

    return(
        <>
          <Header/>
          <main>
             <Carrosel/>
             <Navbar/>
          </main>
        </>
    )
}

export default App;