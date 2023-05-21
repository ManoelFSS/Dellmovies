import React, {useState, useEffect} from "react";
import {SecaoDeFilmes,Areafimes} from "./styled"
import Cards from "../api_cards/Card";

export default function Navbar(){

    useEffect(()=>{

    }, [])

    const [emAlta, setEmAlta] = useState('/movie/top_rated?language=pt-BR&page=1&')
    const [popular, setPopular] = useState('/movie/top_rated?language=pt-BR&page=2&')
    const [drama, setDrama] = useState('/movie/top_rated?language=pt-BR&page=3&')
    const [acao, setAcao] = useState('/discover/movie?with_genres=28&language=pt-BR&page=1&')
    const [aventura, setAventur] = useState('/discover/movie?with_genres=28&language=pt-BR&page=4&')
    const [comedia, setComedia] = useState('/movie/top_rated?language=pt-BR&page=5&')
    const [crime, setCrime] = useState('/movie/top_rated?language=pt-BR&page=6&')
    const [fantasia, setFantasia] = useState('/movie/top_rated?language=pt-BR&page=7&')
    const [familia, setFamilia] = useState('/movie/top_rated?language=pt-BR&page=8&')
    const [generoFilmes,setGeneroFilmes] = useState(emAlta)
    console.log(generoFilmes)

    const [menuAtivo, setMenuAtivo] = useState("Em Alta");

    return (
        <SecaoDeFilmes>
            <nav>
                <ul>
                
                    <li className={menuAtivo === "Em Alta" ? "ativo" : ""} onClick={()=> `${setGeneroFilmes(emAlta)} ${setMenuAtivo("Em Alta")}` }>
                        Em Alta
                    </li>
                    <li  className={menuAtivo === "Popular" ? "ativo" : ""}  onClick={()=>  `${setGeneroFilmes(popular)} ${setMenuAtivo("Popular")}` }>
                        Popular
                    </li>
                    <li  className={menuAtivo === "Drama" ? "ativo" : ""}  onClick={()=>  `${setGeneroFilmes(drama)} ${setMenuAtivo("Drama")}`}>
                        Drama
                    </li>
                    <li className={menuAtivo === "Ação" ? "ativo" : ""} onClick={()=>  `${setGeneroFilmes(acao)} ${setMenuAtivo("Ação")}`}>
                        Ação
                    </li>
                    <li  className={menuAtivo === "Aventura" ? "ativo" : ""} onClick={()=>  `${setGeneroFilmes(aventura)} ${setMenuAtivo("Aventura")}`}>
                        Aventura
                    </li>
                    <li className={menuAtivo === "Comédia" ? "ativo" : ""}  onClick={()=>  `${setGeneroFilmes(comedia)} ${setMenuAtivo("Comédia")}`}>
                        Comédia
                    </li>
                    <li className={menuAtivo === "Crime" ? "ativo" : ""} onClick={()=>  `${setGeneroFilmes(crime)} ${setMenuAtivo("Crime")}`}>
                        Crime
                    </li>
                    <li className={menuAtivo === "Fantasia" ? "ativo" : ""} onClick={()=>  `${setGeneroFilmes(fantasia)} ${setMenuAtivo("Fantasia")}`}>
                        Fantasia
                    </li>
                    <li className={menuAtivo === "Família" ? "ativo" : ""} onClick={()=>  `${setGeneroFilmes(familia)} ${setMenuAtivo("Família")}`}>
                        Família
                    </li>
                   
                </ul>
            </nav>
            <Areafimes>
                <Cards generoFilmes={generoFilmes} quantidadeFilmes={10}/>
            </Areafimes>
        </SecaoDeFilmes>
    )
}