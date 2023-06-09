import React, {useState,useEffect} from "react";
import {Headers, Input, Conteiner_btns,Descricao, Avaliacao, HeaderGradient, Containner} from './styled'
import axios, { all } from 'axios'
import Logo from '../../assets/logo.png'
import Lupa from '../../assets/lupa.png'
import Estrela from '../../assets/estrela.png'
import Setapkay from '../../assets/setaplay.png'
import Iconevideo from '../../assets/iconevideo.png'

export default function Header(){

const [emAlta, setEmAlta] = useState('/movie/top_rated?language=pt-BR&page=1&')
const [popular, setPopular] = useState('/movie/popular?&language=pt-BR')
// https://api.themoviedb.org/3/movie/popular?language=pt-BR
const [acao, setAcao] = useState(`/discover/movie?with_genres=28&language=pt-BR&page=1&`)
const [secao, setSecao] = useState(acao)


const API_KEY = 'a80332ecd67498023b64c67499fbd152';
const API_BASE = 'https://api.themoviedb.org/3';

const [filmes, setFilmes] = useState([]);
const [filmeIndex, setFilmeIndex] = useState(null);
const [mostrarFilme, setMostrarFilme] = useState(false);
const [widthInput,setwidthInput] = useState('60px')
const [bordColor,setBordColor] = useState('none')


console.log(filmeIndex)

const  handelInput = (e)=>{
    e.target.value !== '' ? `${setwidthInput('200px')} ${setBordColor('#fff')} ` :  `${setwidthInput('60px')}  ${setBordColor('none')} `;
    
}

console.log(filmes)
useEffect(() => {
    setApi(`${API_BASE}${acao}api_key=${API_KEY}`, `${'https://image.tmdb.org/t/p/original/'}`);

 // Trocar automaticamente o filme a cada 5 segundos
 const interval = setInterval(()=>{
    
   trocarFilmeAutomaticamente()

 },  10000);
 atualizarFilmeIndex() // Limpar o intervalo quando o componente for desmontado
 return () => {
   clearInterval(interval);
 };
},[]);

function setApi(urlendereco, urlimage) {
 const getFilms = async (urlendereco, urlimage) => {
   await axios.get(urlendereco)
     .then(resposta => {
       const allApi = resposta.data.results.map((item) => {
         return {
           ...item,
           image: `${urlimage}${item.backdrop_path}`
         };
       });

       setFilmes(allApi);

       // Gerar um índice aleatório quando o array de filmes é carregado
       const randomIndex = Math.floor(Math.random() * 20);
       setFilmeIndex(randomIndex);

       // Mostrar o filme após um breve atraso
       setTimeout(() => {
         setMostrarFilme(true);
       }, 10000);
     })
     .catch(error => console.log(`Desculpe, houve uma falha: ${error}`));
 };

 getFilms(urlendereco, urlimage);
}

// Função para atualizar o índice do filme
const atualizarFilmeIndex = () => {
 setMostrarFilme(false); // Ocultar o filme temporariamente

 // Atualizar o índice após um breve atraso
 setTimeout(() => {
   const randomIndex = Math.floor(Math.random() * 20);
   setFilmeIndex(randomIndex);
   setMostrarFilme(true); // Mostrar o novo filme
 },10000);
};

// Função para trocar o filme automaticamente
const trocarFilmeAutomaticamente = () => {
 setMostrarFilme(false); // Ocultar o filme temporariamente

 // Atualizar o índice após um breve atraso
 setTimeout(() => {
   const randomIndex = Math.floor(Math.random() * 20);
   setFilmeIndex(randomIndex);
   setMostrarFilme(true); // Mostrar o novo filme
 },10000);
};

// Verificar se há filmes disponíveis
if (filmes.length === 0) {
  return (
    <div className="load">
        <p>Carregando...</p>
    </div>
  )
}

// Obter o filme atual com base no índice
const filmeAtual = filmes[filmeIndex];

// Renderizar o filme atual



    return (
        <Headers back={filmeAtual.image}>
            <section>
                <div>
                    <img src={Logo} alt="DELL MOVIES" />
                </div>
                <nav>
                    <ul>
                        <li>Séries</li>
                        <li className={'ativo'}>Filmes</li>
                    </ul>
                </nav>
                <div>
                    <aside>           
                        <img src={Lupa} alt="pesquisa"  />
                        <Input widthInput={widthInput} bordColor={bordColor}  type="search" placeholder="Filtro"  onChange={(e)=> handelInput(e)}/>
                    </aside>
                    <a href="#">Login</a>
                </div>
            </section>
            <HeaderGradient>
                <Containner>
                    <Descricao>
                        <h1>{filmeAtual.title}</h1>
                        <div >3hr 23 min | Fantasia, Família | {filmeAtual.release_date.split('').slice(0, 4).join(' ')}</div>
                        <Avaliacao >
                          <img src={Estrela} alt="estrela" />
                          <span>{filmeAtual.vote_average}</span>
                          <span>IMDB</span>
                        </Avaliacao>
                        <p>{filmeAtual.overview}</p>
                        <Conteiner_btns>
                            <a href="#" className={'btnAssistir'}>
                              <img src={Setapkay} alt="icone play" />
                              Assistir agora
                            </a>
                            <a href="#"  className={'btnTraler'}>
                              <img src={Iconevideo} alt="" />
                              Trailer
                            </a>
                        </Conteiner_btns>
                    </Descricao>
                </Containner>
            </HeaderGradient>
        </Headers>
    )
}